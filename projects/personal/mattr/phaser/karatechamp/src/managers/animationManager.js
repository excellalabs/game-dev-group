import Phaser from 'phaser';

export default class AnimationManager {
    constructor(anims) {
        this.anims = anims;
    }

    addAnimations(){
      // this.addWhitePlayerAnimations();
      // this.addRedPlayerAnimations();
      // this.addBrickAnimations();
      // this.addBullAnimations();
      // this.addObjectAnimations();
      // this.addBoardAnimations();
      // this.addGirlAnimations();

      // this.anims.create(
      //   { key: 'teacherwalking', 
      //     frames: this.anims.generateFrameNames('teacher', { prefix: 'teacher', start:1, end: 4, zeroPad: 1 }),
      //     frameRate: 5, 
      //     repeat: -1
      // });
    }

    // addGirlAnimations(){
    //   this.anims.create(
    //     { key: 'redgirlwalk', 
    //       frames: this.anims.generateFrameNames('girl', { prefix: 'redgirl', start:1, end: 2, zeroPad: 1 }),
    //       frameRate: 5, 
    //       repeat: -1
    //   });
    // }

    addBoardAnimations(){
      // this.anims.create(
      //   { key: 'shore', 
      //     frames: this.anims.generateFrameNames('shoreline', { prefix: 'shore', start:1, end: 6, zeroPad: 1 }),
      //     frameRate: 1, 
      //     repeat: -1
      // });
    }

    // addBullAnimations(){
    //     this.anims.create(
    //       { key: 'bull', 
    //         frames: this.anims.generateFrameNames('bull', { prefix: 'bull', start:1, end: 8, zeroPad: 2 }),
    //         frameRate: 8, 
    //         repeat: -1
    //     });

    //     this.anims.create(
    //       { key: 'bullfall', 
    //         frames: this.anims.generateFrameNames('bull', { prefix: 'bullfall', start:1, end: 2, zeroPad: 1 }),
    //         frameRate: 1, 
    //         repeat: 0
    //     });
    //   }

      // addBrickAnimations(){
      //   this.anims.create(
      //     { key: 'brick1', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 2, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });

      //   this.anims.create(
      //     { key: 'brick2', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 3, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick3', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 4, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick4', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 5, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick5', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 6, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick6', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 7, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick7', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 8, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick8', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 9, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick9', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 10, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'brick10', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'brick', start:1, end: 11, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });

      //   this.anims.create(
      //     { key: 'horizontalbrick1', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 2, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick2', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 3, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick3', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 4, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick4', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 5, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick5', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 6, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick6', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 7, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick7', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 8, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick8', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 9, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick9', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 10, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      //   this.anims.create(
      //     { key: 'horizontalbrick10', 
      //       frames: this.anims.generateFrameNames('brick', { prefix: 'horizontalbrick', start:1, end: 11, zeroPad: 1 }),
      //       frameRate: 15, 
      //       repeat: 0
      //   });
      // }

      // addWhitePlayerAnimations(){
      //   this.anims.create(
      //     { key: 'frontkick', 
      //       frames: this.anims.generateFrameNames('player', { prefix: 'kick', start:1, end: 12, zeroPad: 2 }),
      //       frameRate: 10, 
      //       repeatDelay: 200,
      //       repeat: 0 
      //   });
  
      //   this.anims.create(
      //       { key: 'roundhousekick', 
      //           frames: this.anims.generateFrameNames('player', { prefix: 'roundhouse', start:1, end: 12, zeroPad: 2 }),
      //           frameRate: 10, 
      //           repeatDelay: 200,
      //           repeat: 0 
      //       });
  
      //   this.anims.create(
      //       { key: 'spinningheal', 
      //           frames: this.anims.generateFrameNames('player', { prefix: 'spinningheal', start:1, end: 11, zeroPad: 2 }),
      //           frameRate: 10, 
      //           repeatDelay: 200,
      //           repeat: 0 
      //       });
  
      //   this.anims.create(
      //       { key: 'forward', 
      //       // frames: this.anims.generateFrameNames('player', { prefix: 'kick', start:1, end: 6, zeroPad: 2 }),
      //         frames: this.anims.generateFrameNames('player', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'teacherwalking', 
      //         frames: this.anims.generateFrameNames('teacher', { prefix: 'teacher', start:1, end: 4, zeroPad: 1 }),
      //         frameRate: 5, 
      //         repeat: -1
      //     });
  
      //   this.anims.create(
      //       { key: 'backward', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'forward', start:1, end: 3, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'jump', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'jump', start:1, end: 11, zeroPad: 2 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'squat', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'squat', start:1, end: 5, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'standup', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'standup', start:1, end: 4, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'lowkick', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'lowkick', start:1, end: 9, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'flyingside', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'flyingside', start:1, end: 13, zeroPad: 2 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'backflip', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'backflip', start:1, end: 10, zeroPad: 2 }),
      //         frameRate: 8, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'frontsweep', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'frontsweep', start:1, end: 9, zeroPad: 2 }),
      //         frameRate: 8, 
      //         repeat: 0 
      //     });
          
      //     this.anims.create(
      //       { key: 'backkick', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'backkick', start:1, end: 10, zeroPad: 2 }),
      //         frameRate: 8, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'highblock', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'highblock', start:1, end: 9, zeroPad: 2 }),
      //         frameRate: 15, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'middleblock', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'middleblock', start:1, end: 9, zeroPad: 2 }),
      //         frameRate: 15, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'lowblock', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'lowblock', start:1, end: 11, zeroPad: 2 }),
      //         frameRate: 15, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'reverse', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'reverse', start:1, end: 7, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'reversesweep', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'reversesweep', start:1, end: 16, zeroPad: 1 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });

      //     this.anims.create(
      //       { key: 'lungepunch', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'lungepunch', start:1, end: 11, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     this.anims.create(
      //       { key: 'flip', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'flip', start:1, end: 12, zeroPad: 2 }),
      //         frameRate: 10, 
      //         repeat: 0 
      //     });
  
      //     //RAGDOLL ANIMATIONS
      //     this.anims.create(
      //       { key: 'facepunch', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'facepunch', start:1, end: 3, zeroPad: 1 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
      //     this.anims.create(
      //       { key: 'gutkick', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'gutkick', start:1, end: 3, zeroPad: 1 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
      //     this.anims.create(
      //       { key: 'fall', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'fall', start:1, end: 3, zeroPad: 1 }),
      //         frameRate: 12, 
      //         repeat: 0 
      //     });
  
      //     //MISC
      //     this.anims.create(
      //       { key: 'win', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'win', start:1, end: 2, zeroPad: 1 }),
      //         frameRate: 4, 
      //         repeat: 10
      //     });
  
      //     this.anims.create(
      //       { key: 'happy', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'happy', start:1, end: 2, zeroPad: 1 }),
      //         frameRate: 4, 
      //         repeat: 10
      //     });
  
      //     this.anims.create(
      //       { key: 'walking', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
      //         frameRate: 8, 
      //         repeat: 20
      //     });  

      //     this.anims.create(
      //       { key: 'bow', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'bow', start:1, end: 10, zeroPad: 1 }),
      //         frameRate: 8, 
      //         repeat: 0
      //     });

      //     this.anims.create(
      //       { key: 'sweat', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'sweat', start:1, end: 2, zeroPad: 1 }),
      //         frameRate: 2, 
      //         repeat: 20
      //     });
  
      //     this.anims.create(
      //       { key: 'chop', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'chop', start:1, end: 2, zeroPad: 1 }),
      //         frameRate: 15, 
      //         repeat: 0
      //     });
      //     this.anims.create(
      //       { key: 'break', 
      //         frames: this.anims.generateFrameNames('player', { prefix: 'horizontal', start:1, end: 2, zeroPad: 1 }),
      //         frameRate: 15, 
      //         repeat: 0
      //     });
      // }

      // addRedPlayerAnimations(){
      //   this.anims.create(
      //     { key: 'red-walking', 
      //       frames: this.anims.generateFrameNames('aiplayer', { prefix: 'walking', start:1, end: 4, zeroPad: 1 }),
      //       frameRate: 8, 
      //       repeat: 20
      //   });

      //   this.anims.create(
      //     { key: 'red-bow', 
      //       frames: this.anims.generateFrameNames('aiplayer', { prefix: 'bow', start:1, end: 10, zeroPad: 1 }),
      //       frameRate: 8, 
      //       repeat: 0
      //   });

      //   this.anims.create(
      //     { key: 'red-frontkick', 
      //       frames: this.anims.generateFrameNames('aiplayer', { prefix: 'kick', start:1, end: 12, zeroPad: 2 }),
      //       frameRate: 10, 
      //       repeatDelay: 200,
      //       repeat: 1
      //   });
      // }
  
}