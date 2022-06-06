var utils = require('../helpers/util');
import GameObject from './gameobject';

export default class Player extends GameObject {
    constructor(scene, startx, starty, readyx, frame) {
        super(scene, startx, starty, 'player', frame);

        this.setCollisionGroup(-1);
        this.scene = scene;
        this.readyx = readyx;
        this.startx = startx;
        this.starty = starty;
        this.verticaldistance = 0;
        this.horizontaldistance = 0;
        this.yoffset = 5;
        this.xoffset = 3;
        this.opponentx = 0;
        this.score = 0;

        this.direction = utils.Direction.RIGHT;
        this.startwalking = false;
        this.walking = false;
        this.startbowing = false;
        this.bowing = false;
        this.ready = false;

        this.leftedge = 0;
        this.rightedge = 0;

        this.chopping = false;
        this.chopped = false;
        
        this.breaking = false;
        this.broke = false;
      }
      preload(){
        
      }
      create(){
        //   this.scene.load.atlas('player', playerPNG, playerJSON);
          this.addAnimations();
      }
      setInputManager(){
          super.setInputManager();
      }
      setGamePad(gamepad){
        super.setGamePad(gamepad);
      }
      win(){
        this.inputmanager.win()
      }
      entrance(){
        if(this.startwalking){
            this.inputmanager.pause = true;
            this.anims.play('walking', true);
            this.startwalking = false;
            this.walking = true;
        }
        if(this.walking){
            this.x += 1;
            if(this.x >= this.readyx){
                this.walking = false;
                this.startbowing = true;
            }
        }
        if(this.startbowing){
            this.anims.play('bow', true);
            this.startbowing = false;
            this.scene.time.delayedCall(2000, this.setPlayerReady, [], this);
        }
      }

      setPlayerReady(){
          this.ready = true;
          this.inputmanager.pause = false;
      }

      //TODO: may need to tweak -10 and 50 to take into account direction
      canMoveForward(){ 
        if(!this.opponentx)
          return true;

          return this.x < (this.x > this.opponentx.min.x ? this.rightedge : this.opponentx.min.x-10)
      }
      canMoveBackward(){ 
        if(!this.opponentx)
          return true;

        return this.x > (this.x < this.opponentx.max.x ? this.leftedge : this.opponentx.max.x+50)
      }

      update(){
        this.inputmanager.checkForInput();

        if(!this.chopping && !this.breaking)
            this.entrance();

        if(this.chopping){
            if(!this.chopped)
                utils.bounce(this);
        }
        if(this.breaking){
            if(!this.broke)
                utils.breaking(this);
        }
      }
      addAnimations(){
        this.anims.create(
          { key: 'frontkick', 
            frames: this.anims.generateFrameNames('player', { prefix: 'kick', start:1, end: 12, zeroPad: 2 }),
            frameRate: 10, 
            repeatDelay: 200,
            repeat: 0 
        });
  
        this.anims.create(
            { key: 'roundhousekick', 
                frames: this.anims.generateFrameNames('player', { prefix: 'roundhouse', start:1, end: 12, zeroPad: 2 }),
                frameRate: 10, 
                repeatDelay: 200,
                repeat: 0 
            });
  
        this.anims.create(
            { key: 'spinningheal', 
                frames: this.anims.generateFrameNames('player', { prefix: 'spinningheal', start:1, end: 11, zeroPad: 2 }),
                frameRate: 10, 
                repeatDelay: 200,
                repeat: 0 
            });
  
        this.anims.create(
            { key: 'forward', 
            // frames: this.anims.generateFrameNames('player', { prefix: 'kick', start:1, end: 6, zeroPad: 2 }),
              frames: this.anims.generateFrameNames('player', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
              frameRate: 12, 
              repeat: 0 
          });
  
        this.anims.create(
            { key: 'backward', 
              frames: this.anims.generateFrameNames('player', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'jump', 
              frames: this.anims.generateFrameNames('player', { prefix: 'jump', start:1, end: 11, zeroPad: 2 }),
              frameRate: 12, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'squat', 
              frames: this.anims.generateFrameNames('player', { prefix: 'squat', start:1, end: 5, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });

          this.anims.create(
            { key: 'squatpunch', 
              frames: this.anims.generateFrameNames('player', { prefix: 'squatpunch', start:1, end: 9, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'standup', 
              frames: this.anims.generateFrameNames('player', { prefix: 'standup', start:1, end: 4, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'lowkick', 
              frames: this.anims.generateFrameNames('player', { prefix: 'lowkick', start:1, end: 9, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'flyingside', 
              frames: this.anims.generateFrameNames('player', { prefix: 'flyingside', start:1, end: 13, zeroPad: 2 }),
              frameRate: 12, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'backflip', 
              frames: this.anims.generateFrameNames('player', { prefix: 'backflip', start:1, end: 10, zeroPad: 2 }),
              frameRate: 8, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'frontsweep', 
              frames: this.anims.generateFrameNames('player', { prefix: 'frontsweep', start:1, end: 9, zeroPad: 2 }),
              frameRate: 8, 
              repeat: 0 
          });
          
          this.anims.create(
            { key: 'backkick', 
              frames: this.anims.generateFrameNames('player', { prefix: 'backkick', start:1, end: 10, zeroPad: 2 }),
              frameRate: 8, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'highblock', 
              frames: this.anims.generateFrameNames('player', { prefix: 'highblock', start:1, end: 9, zeroPad: 2 }),
              frameRate: 15, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'middleblock', 
              frames: this.anims.generateFrameNames('player', { prefix: 'middleblock', start:1, end: 9, zeroPad: 2 }),
              frameRate: 15, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'lowblock', 
              frames: this.anims.generateFrameNames('player', { prefix: 'lowblock', start:1, end: 11, zeroPad: 2 }),
              frameRate: 15, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'reverse', 
              frames: this.anims.generateFrameNames('player', { prefix: 'reverse', start:1, end: 7, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'reversesweep', 
              frames: this.anims.generateFrameNames('player', { prefix: 'reversesweep', start:1, end: 16, zeroPad: 1 }),
              frameRate: 10, 
              repeat: 0 
          });

          this.anims.create(
            { key: 'lungepunch', 
              frames: this.anims.generateFrameNames('player', { prefix: 'lungepunch', start:1, end: 11, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          this.anims.create(
            { key: 'flip', 
              frames: this.anims.generateFrameNames('player', { prefix: 'flip', start:1, end: 12, zeroPad: 2 }),
              frameRate: 10, 
              repeat: 0 
          });
  
          //RAGDOLL ANIMATIONS
          this.anims.create(
            { key: 'facepunch', 
              frames: this.anims.generateFrameNames('player', { prefix: 'facepunch', start:1, end: 3, zeroPad: 1 }),
              frameRate: 12, 
              repeat: 0 
          });
          this.anims.create(
            { key: 'gutkick', 
              frames: this.anims.generateFrameNames('player', { prefix: 'gutkick', start:1, end: 3, zeroPad: 1 }),
              frameRate: 12, 
              repeat: 0 
          });
          this.anims.create(
            { key: 'fall', 
              frames: this.anims.generateFrameNames('player', { prefix: 'fall', start:1, end: 3, zeroPad: 1 }),
              frameRate: 12, 
              repeat: 0 
          });
          this.anims.create(
            { key: 'backkicked', 
              frames: this.anims.generateFrameNames('player', { prefix: 'backkicked', start:1, end: 3, zeroPad: 1 }),
              frameRate: 5, 
              repeat: 0
          });

          //MISC
          this.anims.create(
            { key: 'win', 
              frames: this.anims.generateFrameNames('player', { prefix: 'win', start:1, end: 2, zeroPad: 1 }),
              frameRate: 4, 
              repeat: 10
          });
  
          this.anims.create(
            { key: 'happy', 
              frames: this.anims.generateFrameNames('player', { prefix: 'happy', start:1, end: 2, zeroPad: 1 }),
              frameRate: 4, 
              repeat: 10
          });
  
          this.anims.create(
            { key: 'walking', 
              frames: this.anims.generateFrameNames('player', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
              frameRate: 8, 
              repeat: 20
          });  

          this.anims.create(
            { key: 'bow', 
              frames: this.anims.generateFrameNames('player', { prefix: 'bow', start:1, end: 10, zeroPad: 1 }),
              frameRate: 8, 
              repeat: 0
          });

          this.anims.create(
            { key: 'sweat', 
              frames: this.anims.generateFrameNames('player', { prefix: 'sweat', start:1, end: 2, zeroPad: 1 }),
              frameRate: 2, 
              repeat: 20
          });
  
          this.anims.create(
            { key: 'chop', 
              frames: this.anims.generateFrameNames('player', { prefix: 'chop', start:1, end: 2, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
          this.anims.create(
            { key: 'break', 
              frames: this.anims.generateFrameNames('player', { prefix: 'horizontal', start:1, end: 2, zeroPad: 1 }),
              frameRate: 15, 
              repeat: 0
          });
      }
}