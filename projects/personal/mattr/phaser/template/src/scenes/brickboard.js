import constants from '../config/constants';
import SceneController from './sceneController';
// import background from '../assets/backgrounds/boards/board4.png';

import brickPNG from '../assets/bricks/brickspritesheet.png';
import brickJSON from '../assets/bricks/bricks.json';
import Brick from '../gameobjects/bricks';
import Player from '../gameobjects/player';

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;

export default class BrickBoard extends SceneController {
  constructor() {
    super('BrickBoard');
    this.gamepad = null;
    this.numbervases = 5;
  }

  preload() {
    super.preload();
    // this.load.image('background', background);
    this.load.atlas('brick', brickPNG, brickJSON);
  }

  create() {
    super.verticalBreakingBoard = true;
    super.create();
  }

  addComponents(){
    // this.add.image(center.width, center.height, 'background').setScale(assetScale);

    super.addComponents();    
    
    this.player = new Player(this, center.width-100, center.height, center.width-150, 'chop1');
    this.player.setGamePad(this.gamepad);
    this.player.setIgnoreGravity(true);
    this.player.setInputManager(this.inputmanager);
    this.player.animated = true;
    this.player.verticaldistance = 50;  //how much vertical space to bounce
    this.player.chopping = true;
    this.player.chopped = false;
    this.player.inputmanager.pause = true;

    this.bricks = new Brick(this, center.width-100, center.height+150, 'brick', 'brick1');
    this.bricks.setScale(0.5);
    this.bricks.setIgnoreGravity(true);
    this.bricks.breaking = false;
    

    // this.practiceText = this.add
    // .text(center.width-20, center.height-253, '30', {
    //   fill: '#ffffff',
    //   font: `${20 * SCALE}pt Silom`
    // });
  }

  update(){
    super.update();
    
    if(this.player.chopped){
      var distance = this.player.y - this.bricks.body.bounds.min.y;
        if(!this.bricks.breaking){
          if(distance < 0)this.bricks.play('brick1', true);
          else if(distance > 0 && distance < 3)this.bricks.play('brick2', true);
          else if(distance > 3 && distance < 9)this.bricks.play('brick3', true);
          else if(distance > 9 && distance < 12)this.bricks.play('brick4', true);
          else if(distance > 12 && distance < 15)this.bricks.play('brick5', true);
          else if(distance > 15 && distance < 18)this.bricks.play('brick6', true);
          else if(distance > 18 && distance < 21)this.bricks.play('brick7', true);
          else if(distance > 21 && distance < 24)this.bricks.play('brick8', true);
          else if(distance > 24 && distance < 27)this.bricks.play('brick9', true);
          else if(distance > 27 && distance < 30)this.bricks.play('brick10', true);
          
          this.time.delayedCall(4000, this.checkSuccess(distance), [], this);

          this.bricks.breaking = true;
        }
    }
    else
      this.player.update();
  }

  checkSuccess(distance){
    if(distance > 21){
      this.player.play('happy', true);
    }
    this.time.delayedCall(4000, this.changeScene, [], this);
  }

  changeScene(){
    this.scene.stop('BrickBoard');
    this.scene.start('BrickBoard');
  }
  render() {}
}
