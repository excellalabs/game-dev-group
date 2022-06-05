var utils = require('../helpers/util');
import GameObject from './gameobject';

export default class Brick extends GameObject {
    constructor(scene, x, y, texturemap, frame) {
        super(scene, x, y, texturemap, frame);
        this.setCollisionGroup(-1);
        this.breaking = false;
      }
      preload(){}
      create(){
        this.addAnimations();
      }
      update(){}
      addAnimations(){
          this.anims.create(
            { key: 'brick1', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 2, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
  
          this.anims.create(
            { key: 'brick2', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 3, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick3', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 4, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick4', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 5, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick5', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 6, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick6', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 7, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick7', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 8, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick8', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 9, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick9', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 10, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'brick10', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 11, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
  
          this.anims.create(
            { key: 'horizontalbrick1', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 2, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick2', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 3, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick3', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 4, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick4', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 5, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick5', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 6, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick6', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 7, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick7', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 8, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick8', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 9, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick9', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 10, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'horizontalbrick10', 
              frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 11, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
      }
}