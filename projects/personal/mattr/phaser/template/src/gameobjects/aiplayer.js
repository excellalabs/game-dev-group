import BehaviorManager from '../managers/behaviorManager';
import GameObject from './gameobject';
var utils = require('../helpers/util');

export default class AIPlayer extends GameObject {
    constructor(scene, startx, starty, readyx) {
        super(scene, startx, starty, 'aiplayer');
        
        this.readyx = readyx;
        this.scene = scene;

        this.setCollisionGroup(-1);
        this.startwalking = false;
        this.walking = false;
        this.startbowing = false;
        this.bowing = false;
        this.ready = false;
        this.opponentx = 0;

        this.kickonce = false;

        this.direction = utils.Direction.LEFT;

        this.create();
      }
      preload(){}
      create(){
        this.behavior = new BehaviorManager(this);
        this.addAnimations();
      }
      win(){
        this.inputmanager.win()
      }
      entrance(){
        if(this.startwalking){
            this.play('red-walking', true);
            this.startwalking = false;
            this.walking = true;
        }
        if(this.walking){
            this.x -= 1;
            if(this.x <= this.readyx){
                this.walking = false;
                this.startbowing = true;
            }
        }
        if(this.startbowing){
            this.play('red-bow', true);
            this.startbowing = false;
            this.scene.time.delayedCall(2000, this.setPlayerReady, [], this);
        }
      }

      setPlayerReady(){
          this.ready = true;
          this.behavior.forward();
      }


      update(){
        if(!this.ready)
          this.entrance();
        else{
          this.behavior.update(); 
        }
      }

      addAnimations(){
        this.anims.create(
          { key: 'red-walking', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
            frameRate: 8, 
            repeat: 20
        });

        this.anims.create(
          { key: 'red-bow', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'bow', start:1, end: 10, zeroPad: 1 }),
            frameRate: 8, 
            repeat: 0
        });

        this.anims.create(
          { key: 'red-frontkick', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'kick', start:1, end: 12, zeroPad: 2 }),
            frameRate: 10, 
            repeatDelay: 200,
            repeat: 1
        });

        this.anims.create(
          { key: 'red-forward', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
            frameRate: 12, 
            repeat: -1
        });

        this.anims.create(
          { key: 'red-backward', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
            frameRate: 10, 
            repeat: -1
        });

        this.anims.create(
          { key: 'red-jump', 
            frames: this.anims.generateFrameNames('aiplayer', { prefix: 'jump', start:1, end: 15, zeroPad: 2 }),
            frameRate: 15, 
            repeat: 0 
        });

        // this.anims.create(
        //   { key: 'squat', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'squat', start:1, end: 5, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'standup', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'standup', start:1, end: 4, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'lowkick', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'lowkick', start:1, end: 9, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'flyingside', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'flyingside', start:1, end: 13, zeroPad: 2 }),
        //     frameRate: 12, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'backflip', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'backflip', start:1, end: 10, zeroPad: 2 }),
        //     frameRate: 8, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'frontsweep', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'frontsweep', start:1, end: 9, zeroPad: 2 }),
        //     frameRate: 8, 
        //     repeat: 0 
        // });
        
        // this.anims.create(
        //   { key: 'backkick', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'backkick', start:1, end: 10, zeroPad: 2 }),
        //     frameRate: 8, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'highblock', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'highblock', start:1, end: 9, zeroPad: 2 }),
        //     frameRate: 15, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'middleblock', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'middleblock', start:1, end: 9, zeroPad: 2 }),
        //     frameRate: 15, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'lowblock', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'lowblock', start:1, end: 11, zeroPad: 2 }),
        //     frameRate: 15, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'reverse', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'reverse', start:1, end: 7, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'reversesweep', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'reversesweep', start:1, end: 16, zeroPad: 1 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'lungepunch', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'lungepunch', start:1, end: 11, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // this.anims.create(
        //   { key: 'flip', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'flip', start:1, end: 12, zeroPad: 2 }),
        //     frameRate: 10, 
        //     repeat: 0 
        // });

        // //RAGDOLL ANIMATIONS
        // this.anims.create(
        //   { key: 'facepunch', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'facepunch', start:1, end: 3, zeroPad: 1 }),
        //     frameRate: 12, 
        //     repeat: 0 
        // });
        // this.anims.create(
        //   { key: 'gutkick', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'gutkick', start:1, end: 3, zeroPad: 1 }),
        //     frameRate: 12, 
        //     repeat: 0 
        // });
        // this.anims.create(
        //   { key: 'fall', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'fall', start:1, end: 3, zeroPad: 1 }),
        //     frameRate: 12, 
        //     repeat: 0 
        // });

        // //MISC
        // this.anims.create(
        //   { key: 'win', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'win', start:1, end: 2, zeroPad: 1 }),
        //     frameRate: 4, 
        //     repeat: 10
        // });

        // this.anims.create(
        //   { key: 'happy', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'happy', start:1, end: 2, zeroPad: 1 }),
        //     frameRate: 4, 
        //     repeat: 10
        // });

        // this.anims.create(
        //   { key: 'walking', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
        //     frameRate: 8, 
        //     repeat: 20
        // });  

        // this.anims.create(
        //   { key: 'bow', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'bow', start:1, end: 10, zeroPad: 1 }),
        //     frameRate: 8, 
        //     repeat: 0
        // });

        // this.anims.create(
        //   { key: 'sweat', 
        //     frames: this.anims.generateFrameNames('player', { prefix: 'sweat', start:1, end: 2, zeroPad: 1 }),
        //     frameRate: 2, 
        //     repeat: 20
        // });

      }
}