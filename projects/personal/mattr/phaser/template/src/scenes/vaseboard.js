import constants from '../config/constants';

import SceneController from './sceneController';

import vasePNG from '../assets/objects/spritesheet.png';
import vaseJSON from '../assets/objects/sprites.json';

import ChallengeObject from '../gameobjects/challengeobject';

import Player from '../gameobjects/player';
import { HighlightSpanKind } from 'typescript';
var utils = require('../helpers/util');

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;
const RIGHTEDGE = center.width + 463;
const LEFTEDGE = center.width - 462;

export default class VaseBoard extends SceneController {
  constructor() {
    super('VaseBoard');
    this.gamepad = null;
    this.numbervases = 10;
    this.board = utils.getRandomInt(2);
  }

  preload() {
    super.preload();

    this.load.atlas('vase', vasePNG, vaseJSON);
  }

  create() {
    super.create();
  }

  addComponents(){
    super.addComponents();

    this.matter.world.setBounds(0, 0, WIDTH, HEIGHT-180);

    this.player = new Player(this, LEFTEDGE+20, HEIGHT-200, center.width-150 );
    this.player.setGamePad(this.gamepad);
    this.player.setInputManager(this.inputmanager);
    this.player.setCollisionGroup(-1);
    this.player.startwalking = true;
    this.player.chopping = false;

    this.vase = new ChallengeObject(this, RIGHTEDGE, this.getVasePosition(), 'vase' );
    this.vase.setIgnoreGravity(true);
    this.vase.animated = false;
    this.vase.leftedge = LEFTEDGE;
    this.vase.rightedge = RIGHTEDGE;
    this.vase.activate();

    this.addText();
    super.useTimer = false;

    super.addBorders();
  }

  addText(){
    this.practiceText = this.add
    .text(center.width-230, center.height+300, 'Click where you want the vase to start', {
      fill: '#000000',
      font: `${16 * SCALE}pt Silom`
    });
  }

  /**
   * Randomly choose a y coordinate to start the vase
   */
  getVasePosition(){
    //-20 to 110
    return this.player.body.bounds.min.y + (-20 + utils.getRandomInt(130));
  }

  resetVase(){
    this.vase.x = RIGHTEDGE;
  }
  /**
   * scene controller handles the player and this handles the vase
   * after update check for collision
   */
  update(){
    if(!this.player || !this.vase)
    return;

    this.player.update();
    if(this.player.ready){

    if(this.vase.x < LEFTEDGE || this.vase.x > RIGHTEDGE)
      this.time.delayedCall(500, this.getNextVase, [], this);
    
    this.vase.update();

    if(Math.abs(this.player.x - this.vase.x) < 200){
        var collision = this.collisionManager.checkForSpriteToBodyCollision(this.player, this.vase);
        if(collision && collision.collided){
          this.vase.play('vase', true);
          this.vase.velocity = 0;
          console.log('collision')
          //player hit vase
          if(collision.hit){
            console.log('player hit')
              //award points for hitting vase        
          }
          //vase hit player
          else{
            
            this.numbervases--;
            console.log('number vases = ', this.numbervases)
            if(collision.fixture == "body-fixture")
              this.player.play('gutkick');
            else if(collision.fixture == "head-fixture")
              this.player.play('facepunch');
            else if(collision.fixture == "leg-fixture")
              this.player.play('fall');
          }

          if(this.numbervases > 0)
            this.time.delayedCall(300, this.getNextVase, [], this);
          else
            this.time.delayedCall(3000, this.completeChallenge, [], this);

        }
    }
  }

  }

  getNextVase(){
    console.log("getting new vase")
    // this.numbervases--;
    this.direction = utils.getRandomInt(2);
    this.vase.reset(this.direction, (this.direction==utils.Direction.LEFT ? RIGHTEDGE : LEFTEDGE), this.getVasePosition());
  }

  completeChallenge(){
    //talley up points
    // this.time.delayedCall(3000, this.player.inputmanager.win, [], this);
    this.scene.stop('VaseBoard');
    this.scene.start('VaseBoard');
  }

  render() {}
}
