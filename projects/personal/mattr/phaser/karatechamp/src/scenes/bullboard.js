import constants from '../config/constants';
import SceneController from './sceneController';
import Bull from '../gameobjects/bull';
import bullPNG from '../assets/bull/bull-spritesheet.png';
import bullJSON from '../assets/bull/bull.json';

import Player from '../gameobjects/player';

var utils = require('../helpers/util');

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;
const RIGHTEDGE = center.width + 463;
const LEFTEDGE = center.width - 462;

export default class BullBoard extends SceneController {
  constructor() {
    super('BullBoard');
    this.gamepad = null;
  }

  preload() {
    console.log("preloading")
    super.preload();

    this.numberBulls = 6;   //the number of bulls on the challenge

    this.load.atlas('bull', bullPNG, bullJSON);
  }

  create() {
    super.create();
  }

  addComponents(){
    super.addComponents();

    this.matter.world.setBounds(0, 0, WIDTH, HEIGHT-200);

    this.player = new Player(this, LEFTEDGE+20, HEIGHT-200, center.width-150);
    this.player.setGamePad(this.gamepad);
    this.player.setInputManager(this.inputmanager);
    this.player.startwalking = true;

    this.bull = new Bull(this, RIGHTEDGE, HEIGHT-200, 'bull');
    this.bull.play('bull', true);
    this.bull.leftedge = LEFTEDGE;
    this.bull.rightedge = RIGHTEDGE;
    this.bull.activate();
    
    this.addText();
    super.useTimer = false;
    this.boardConfig = super.getBoardConfig();
    this.scoringManager = super.getScoringManager();
    super.initializeScoreBoard();
    super.addBorders();
  }

  addText(){
    this.practiceText = this.add
    .text(center.width-305, center.height-235, 'CONQUER', {
      fill: '#ffffff',
      font: `${22 * SCALE}pt Silom`
    });
  }
  /**
   * scene controller handles the player and this handles the vase
   * after update check for collision
   */
  update(){
    this.player.update();
    if(this.player.ready)
        this.bull.update();

    //only check for collision if player and bull are close to each other
    if(Math.abs(this.player.x - this.bull.x) < 200){
        var collision = this.collisionManager.checkForSpriteToSpriteCollision(this.player, this.bull);
        if(collision && collision.collided){
            if(collision.hit)
              this.playerHitBull();
            else
              this.bullHitPlayer();
          }
      }
  }
  
  playerHitBull(){
    this.bull.play('bullfall', true);
    this.bull.velocity = 0;
    
    //award player points here
    //need to pass current 
    this.scoringManager.awardPoints(this.player);
    //scoreing is based on the movement that was used during collision (round 2 will look at the proximity)


    if(this.boardConfig.hasSpectators){
      super.clapping = true;
      super.startClapping(1);
    }
    if(this.numberBulls > 0)
      this.time.delayedCall(8000, this.getNextBull, [], this);
    else
      this.time.delayedCall(8000, this.completeChallenge, [], this);
  }

  bullHitPlayer(){
    this.player.inputmanager.facePunch();
    this.player.inputmanager.pause = true;
    this.numberBulls--;
  }

  getNextBull(){
    this.numberBulls--;
    this.bull.play('bull', true);
    this.direction = utils.getRandomInt(2);
    if(this.boardConfig.hasSpectators)
      super.stopClapping()
    this.bull.reset(this.direction, (this.direction==utils.Direction.LEFT ? RIGHTEDGE : LEFTEDGE));
  }

  completeChallenge(){
    //talley up points
    // this.time.delayedCall(3000, this.player.inputmanager.win, [], this);
    this.scene.stop('BullBoard');
    this.scene.start('BullBoard');
  }

  render() {}
}
