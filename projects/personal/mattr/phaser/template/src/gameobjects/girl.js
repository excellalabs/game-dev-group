import GameObject from './gameobject';
import girlPNG from '../assets/girls/girlspritesheet.png';
import girlJSON from '../assets/girls/girls.json';

export default class Girl extends GameObject {
    constructor(scene, x, y) {
        super(scene, x, y, 'girl');
        this.scene = scene;
        this.setCollisionGroup(-1);
        this.active = false;
        this.velocity = -2;
        this.walking = false;
        this.myhero = this.scene.add.image(this.x, this.y, 'myhero');
        this.myhero.visible = false;
        this.setScale(.9);
        // this.create();
      }
      preload(){
        this.scene.load.atlas('girl', girlPNG, girlJSON);
      }
      create(){
        this.addAnimations();
      }
      activate(){this.active = true;}
      deactivate(){this.velocity = 0;}
      walk(){
        this.anims.play('redgirlwalk', true);
      }
      standstill(){
          this.anims.stop('redgirlwalk');
          this.myhero.x = this.x;
          this.myhero.y = this.y-100;
          this.myhero.visible = true;
          this.active = false;
      }
      update(){
        if(this.active){
          if(!this.walking){
            this.walk();
            this.walking = true;
          }
          this.x -= 1;
        }
            
      }
      addAnimations(){
        this.anims.create(
            { key: 'redgirlwalk', 
              frames: this.anims.generateFrameNames('girl', { prefix: 'redgirl', start:1, end: 2, zeroPad: 1 }),
              frameRate: 5, 
              repeat: -1
          });
      }
}