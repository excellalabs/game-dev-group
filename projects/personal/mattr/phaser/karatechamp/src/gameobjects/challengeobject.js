import GameObject from './gameobject';
import sounds from '../assets/sounds/processed';
var utils = require('../helpers/util');

export default class ChallengeObject extends GameObject {
    constructor(scene, x, y, texturemap) {
        super(scene, x, y, texturemap);
        this.setCollisionGroup(-1);
        this.active = false;
        this.velocity = -3;
        this.active = false;
        this.rightedge = 0;
        this.leftedge = 0;

        this.create();
      }
      preload(){}
      create(){
        this.addAnimations();
      }
      activate(){this.active = true;}
      deactivate(){this.velocity = 0;}
      reset(newdirection, startx, starty){
        if(newdirection == utils.Direction.LEFT){
            this.velocity = -3;
            this.x = startx;
            this.y = starty;
        }else{
          this.velocity = 3;
          this.x = startx;
          this.y = starty;
        }
      }
      update(){
        if(this.active)
            this.x += this.velocity;
      }
      addAnimations(){
        this.anims.create(
          { key: 'vase', 
            frames: this.anims.generateFrameNames('vase', { prefix: 'vase', start:1, end: 5, zeroPad: 1 }),
            frameRate: 10, 
            repeat: 0
        });
      }
}