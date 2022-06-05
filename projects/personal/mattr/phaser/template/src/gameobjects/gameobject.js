import Phaser from 'phaser';
import KeyboardManager from '../input/keyboardManager';
import GamepadManager from '../input/gamepadManager';
var utils = require('../helpers/util');


export default class GameObject extends Phaser.Physics.Matter.Sprite {
    constructor(scene, startx, starty, texturemap, frame) {
        console.log("x = ",startx);
        console.log("y = ",starty);
        super(scene.matter.world, startx, starty, texturemap, frame);
        this.setIgnoreGravity(true);
        

        this.scene = scene;
        this.direction = utils.Direction.RIGHT;
        this.starty = starty;
        this.startx = startx;
        this.inputmanager = null;

        scene.add.existing(this);

        this.create();
      }
      preload(){}
      create(){
          console.log('creating')

      }
      setInputManager(){
          this.inputmanager = (this.usesGamePad()) ? new GamepadManager(this.scene) : new KeyboardManager(this.scene);
          this.inputmanager.init(this);
          this.inputmanager.initStates();
      }
      setGamePad(gamepad){
          this.gamepad = gamepad;
      }
      usesGamePad(){
          return (this.gamepad === null) ? false : true;
      }

      update(){
      }
}