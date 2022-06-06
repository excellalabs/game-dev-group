import constants from '../config/constants';
import SceneController from './sceneController';
import background from '../assets/backgrounds/boards/board4.png';

import brickPNG from '../assets/bricks/brickspritesheet.png';
import brickJSON from '../assets/bricks/bricks.json';
import brickboard from '../assets/bricks/brickboard.png';
import indicator from '../assets/backgrounds/game/joystick-indicator.png';
import Brick from '../gameobjects/bricks';
import Player from '../gameobjects/player';

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;

export default class BrickBoard2 extends SceneController {
  constructor() {
    super('BrickBoard2');
    this.gamepad = null;
    this.numbervases = 5;
  }

  preload() {
    super.preload();
    this.load.image('background', background);
    this.load.image('brickboard', brickboard);
    this.load.image('indicator', indicator);
    this.load.atlas('brick', brickPNG, brickJSON);
  }

  create() {
    super.create();
  }

  addComponents(){
    this.add.image(center.width, center.height, 'background').setScale(assetScale);

    super.addComponents();    
    
    this.add.image(center.width+150, center.height+100, 'brickboard');
    
    this.add.image(center.width+200, center.height+130, 'indicator').setScale(0.8);

    this.player = new Player(this, center.width-200, center.height+80, center.width-150, 'horizontal1');
    this.player.setGamePad(this.gamepad);
    this.player.setIgnoreGravity(true);
    this.player.setInputManager(this.inputmanager);
    this.player.setCollisionGroup(-1);
    this.player.animated = true;
    this.player.breaking = true;

    this.bricks = new Brick(this, center.width+120, center.height+55, 'brick', 'horizontalbrick1');
    this.bricks.setIgnoreGravity(true);
    this.bricks.setCollisionGroup(-1);
    this.bricks.breaking = false;
  }

  update(){
    // super.update();
    
    if(this.player.broke){
      var distance = this.bricks.x - this.player.body.bounds.max.x;

        if(!this.bricks.breaking){
          console.log('distance = ', distance);
          if(distance <= 32)this.bricks.play('horizontalbrick10', true);
          if(distance > 32 && distance <= 33)this.bricks.play('horizontalbrick9', true);
          if(distance > 33 && distance <= 34)this.bricks.play('horizontalbrick8', true);
          if(distance > 34 && distance <= 36)this.bricks.play('horizontalbrick7', true);
          if(distance > 36 && distance <= 38)this.bricks.play('horizontalbrick6', true);
          if(distance > 38 && distance <= 40)this.bricks.play('horizontalbrick5', true);
          if(distance > 40 && distance <= 42)this.bricks.play('horizontalbrick4', true);
          if(distance > 42 && distance <= 44)this.bricks.play('horizontalbrick3', true);
          if(distance > 44 && distance <= 46)this.bricks.play('horizontalbrick2', true);
          if(distance > 46 && distance <= 48)this.bricks.play('horizontalbrick1', true);

          
          this.time.delayedCall(2000, this.checkSuccess, [distance], this);

          this.bricks.breaking = true;
        }
    }
    else
      this.player.update();
  }

  checkSuccess(distance){
    if(distance <= 34){
      super.getTeacher().playerVeryGood();
      this.player.x = this.player.x - 50;
      this.player.play('win', true);
    }
    this.time.delayedCall(5000, this.changeScene, [], this);
  }

  changeScene(){
    this.scene.stop('BrickBoard2');
    this.scene.start('BrickBoard2');
  }
  render() {}
}
