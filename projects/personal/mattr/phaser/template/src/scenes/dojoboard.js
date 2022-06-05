import Phaser from 'phaser';

import dojoboard from '../assets/backgrounds/start/dojoboard.png';
import sounds from '../assets/sounds/processed';
import constants from '../config/constants';
import man from '../assets/walkingtodojo.png';
import border from '../assets/backgrounds/start/dojo-border.png';
import ground from '../assets/backgrounds/start/dojo-ground.png';

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.5
  };

  const assetScale = SCALE;

export default class DojoBoard extends Phaser.Scene {
  

  constructor() {
    super({ key: 'DojoBoard' });
  }

  preloadBackground() {
    this.load.image('dojoboard', dojoboard);
  }

  createBackground() {
    const center = {
      width: WIDTH * 0.5,
      height: HEIGHT * 0.5
    };
    this.add
      .image(center.width, center.height, 'dojoboard')
      .setScale(1);
    this.createBorder();
  }

  preload() {
      this.preloadBackground();
      this.load.spritesheet('man',
      man,
      { frameWidth: 90, frameHeight: 122 }
      );
      this.load.image('ground', ground);
      this.load.image('leftborder', border);
      this.load.image('rightborder', border);
  }

  create() {
    this.matter.world.setBounds(0, 0, WIDTH, center.height+300);

    this.createBackground();
    this.addAnimations();
    this.createBorder(assetScale);

    const RIGHTEDGE = center.width+400;
    const LEFTEDGE = center.width-400;
    this.add.image(LEFTEDGE, center.height, 'leftborder').setScale(1);
    this.add.image(RIGHTEDGE, center.height, 'rightborder').setScale(1);
    this.playMusic();
  }

  playMusic = () => {
    this.backgroundMusic = sounds.play('Dojo_Music');
    sounds.loop(false, this.backgroundMusic);
    sounds.volume(0.6, this.backgroundMusic);
  };

  update() {
    this.man.setVelocityX(1.2);

    if(this.man.x >= center.width+200){
        sounds.stop(this.backgroundMusic);
        this.scene.stop('DojoBoard');
        // this.scene.start('GameBoard');
    }
  }
  render() {}
  addAnimations(){
    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('man', { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 6,
        repeat: -1
    });

    this.man = this.matter.add.sprite(center.width-310, center.height+300, 'man');
    this.man.play('walk');
  }
  createBorder(scale){
    const RIGHTEDGE = center.width+464;
    const LEFTEDGE = center.width-464;

    this.load.image('leftborder', border);
    this.load.image('rightborder', border);
  }
}
