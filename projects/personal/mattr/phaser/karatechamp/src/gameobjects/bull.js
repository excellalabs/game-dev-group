import GameObject from './gameobject';
var utils = require('../helpers/util');

export default class Bull extends GameObject {
    constructor(scene, x, y, texturemap) {
        super(scene, x, y, texturemap);
        this.setCollisionGroup(-1);
        this.active = false;
        this.velocity = -2;
        this.leftedge = 0;
        this.rightedge = 0;
      }
      preload(){}
      create(){
        this.addAnimations();
      }
      activate(){this.active = true;}
      deactivate(){this.velocity = 0;}
      reset(newdirection, startx){
        if(newdirection == utils.Direction.LEFT){
            this.velocity = -2;
            this.x = startx;
            this.setFlipX(false);
        }else{
          this.velocity = 2;
          this.x = startx;
          this.setFlipX(true);
        }
      }
      update(){
        if(this.active){
          this.x += this.velocity;
          if(this.x < this.leftedge || this.x > this.rightedge){
            var direction = utils.getRandomInt(2);
            this.reset(direction, (direction==utils.Direction.LEFT ? this.rightedge : this.leftedge));
          }
        }
            
      }
      addAnimations(){
        this.anims.create(
          { key: 'bull', 
            frames: this.anims.generateFrameNames('bull', { prefix: 'bull', start:1, end: 8, zeroPad: 2 }),
            frameRate: 15, 
            repeat: -1
        });

        this.anims.create(
          { key: 'bullfall', 
            frames: this.anims.generateFrameNames('bull', { prefix: 'bullfall', start:1, end: 2, zeroPad: 1 }),
            frameRate: 1, 
            repeat: 0
        });
      }
}