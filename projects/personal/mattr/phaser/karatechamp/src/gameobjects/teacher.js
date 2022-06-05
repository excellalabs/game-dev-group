import GameObject from './gameobject';
import sounds from '../assets/sounds/processed';
var utils = require('../helpers/util');

export default class Teacher extends GameObject {
    constructor(scene, startx, starty) {
        super(scene, startx, starty, 'teacher');
        this.setCollisionGroup(-1);
        this.startx = startx;
        this.starty = starty;
        this.velocity = -0.5;
        this.startMatch = true;
        this.isWalking = false;
        this.canWalk = false;
        this.travelDistance = 50;
        this.active = false;

        this.setScale(0.35);

        this.create();
      }
      preload(){}
      create(){
        this.addAnimations();
      }
      addComponents(){
        this.stopmatch = this.scene.add.image(this.startx+50, this.starty-65, 'stop');
        this.stopmatch.visible = false;
        this.begin = this.scene.add.image(this.startx+50, this.starty-65, 'begin');
        this.begin.visible = false;
        this.good = this.scene.add.image(this.startx+50, this.starty-65, 'good');
        this.good.visible = false;
        this.verygood = this.scene.add.image(this.startx+50, this.starty-65, 'verygood');
        this.verygood.visible = false;

        //50% of the time the teacher will stand still
        // this.canWalk = Boolean(utils.getRandomInt(2));
        this.canWalk = true
      }
      playBegin(){
        sounds.play('Begin');
        this.begin.visible = true;
        this.scene.time.delayedCall(2000, function(){ 
          //TODO: Need to figure out why this animation isn't working
          console.log("plyaing animation")
            this.anims.play('teacherwalking', true);
            this.begin.visible = false; 
            this.isWalking = true;
        }, [], this);
      }
      playGood(){
        this.good.visible = true;
        this.good.x = this.x+50;
        this.good.y = this.y-65;
        this.scene.time.delayedCall(2000, function(){ 
            // this.stop('teacherwalking', true); 
            this.good.visible = false; 
        }, [], this);
      }
      playerVeryGood(){
        this.verygood.visible = true;
        this.verygood.x = this.x+50;
        this.verygood.y = this.y-65;
        this.scene.time.delayedCall(2000, function(){ 
            this.anims.stop('teacherwalking', true); 
            this.verygood.visible = false; 
        }, [], this);
      }
      stopMatch(){
        //need sound here for stop
        this.isWalking = false;
        this.stopmatch.x = this.x+50;
        this.stopmatch.y = this.y-65;
        this.stopmatch.visible = true;
        this.scene.time.delayedCall(3000, function(){ 
            this.anims.stop('teacherwalking', true); 
            this.stopmatch.visible = false; 
        }, [], this);
      }
      update(){
        if(this.isWalking && this.canWalk){
          if(this.x < this.startx - this.travelDistance)
              this.velocity = 0.5;
          if(this.x > this.startx + this.travelDistance)
              this.velocity = -0.5;
          this.begin.x += this.velocity;
          this.x += this.velocity;
        }
      }
      addAnimations(){
        this.anims.create(
          { key: 'teacherwalking', 
            frames: this.anims.generateFrameNames('teacher', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
            frameRate: 5,
            repeat: -1
        });
      }
}