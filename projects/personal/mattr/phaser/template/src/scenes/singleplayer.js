import constants from '../config/constants';
// import beachscene from '../assets/backgrounds/game/beach_background.png';
import SceneController from './sceneController';

import Player from '../gameobjects/player';
import AIPlayer from '../gameobjects/aiplayer';


const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;
const RIGHTEDGE = center.width + 463;
const LEFTEDGE = center.width - 462;

export default class SinglePlayer extends SceneController {
  constructor() {
    super('SinglePlayer');
    this.gamepad = null;
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
  }

  addComponents(){
    super.addComponents();

    this.matter.world.setBounds(0, 0, WIDTH, HEIGHT-this.groundOffset);

    this.aiplayer = new AIPlayer(this, RIGHTEDGE-20, HEIGHT-200, center.width+150);
    this.aiplayer.startwalking = true;
    this.aiplayer.opponentx = LEFTEDGE+20;

    this.player = new Player(this, LEFTEDGE+20, HEIGHT-200, center.width-150);
    this.player.setGamePad(this.gamepad);
    this.player.setInputManager(this.inputmanager);
    this.player.startwalking = true;
    this.player.leftedge = LEFTEDGE+200;
    this.player.rightedge = RIGHTEDGE-200;
    this.player.opponentx = RIGHTEDGE-20;

    super.player = this.player;

    super.addBorders();  
    super.updateGameObjects();  
    // super.setAIPlayer(this.aiplayer);
  }
  

  /**
   * scene controller handles the player and this handles the vase
   * after update check for collision
   */
  update(){
    
    //if player is facing right and aiplayer is facing left
    // this.player.rightedge = (this.aiplayer.x-30 < this.rightedge ? this.aiplayer.x-30 : this.rightedge);
    // this.aiplayer.leftedge = (this.player.x+30 > this.leftedge ? this.player.x+30 : this.leftedge);

    this.player.update();
    this.aiplayer.update();

    this.player.opponentx = this.aiplayer.body.bounds
    this.aiplayer.opponentx = this.player.body.bounds
    

    super.update();
  }

  render() {}
}
