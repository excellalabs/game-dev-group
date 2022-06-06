import Phaser, { RIGHT } from 'phaser';
import person from '../assets/backgrounds/start/person2.png';
import platform from '../assets/backgrounds/start/platform.png';
import bull from '../assets/backgrounds/start/bull-sprites.png';
import border from '../assets/backgrounds/start/border.png';
import leaderboard from '../assets/backgrounds/start/leaderboard.png';
import sounds from '../assets/sounds/processed';
import constants from '../config/constants';
import { linearScale } from '../utils';

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;
 var cursors;

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoard' });
  }

  createBackground(scale) {
    const center = { width: WIDTH * 0.5, height: HEIGHT * 0.5 };
    this.add.image(center.width, center.height, 'leaderboard').setScale(scale);
  }
  createBorder(scale){
    const RIGHTEDGE = center.width+400;
    const LEFTEDGE = center.width-400;
    this.add.image(LEFTEDGE-12, center.height-240, 'leftborder').setScale(scale);
    this.add.image(RIGHTEDGE+12, center.height-240, 'rightborder').setScale(scale);
  }

  preload() {
    cursors = this.input.keyboard.createCursorKeys();
    this.load.image('person-1', person);
    this.load.image('person-2', person);
    this.load.image('platform', platform);
    this.load.spritesheet('bull', bull, { frameWidth: 177, frameHeight: 120 });
    this.load.image('leftborder', border);
    this.load.image('rightborder', border);
    this.load.image('leaderboard', leaderboard);
  }

  create() {
    this.createBackground(assetScale);
    this.input.on('pointermove', this.activateMainMenu, this);
    this.addAnimations();
    this.createBorder(assetScale);
  }
  activateMainMenu(){
    this.scene.switch('Start');
    sounds.stop('Main_Menu');
  }
  update() {
    //animations (player and bull jumps around)
    const RIGHTEDGE = center.width+400;
    const LEFTEDGE = center.width-400;
    this.bounce();
    
    this.bull.setVelocityX(-3);

    //edge detection
    if (this.bull.x < LEFTEDGE) {
      this.bull.x = RIGHTEDGE;
    }

  }
  render() {}

  bounce(){
    var scaleSpeed = linearScale([1, 100], [0, 1]);
    var gravity = 4;
    const RIGHTEDGE = center.width+360;
    const LEFTEDGE = center.width-360;
    const TOP = center.height-260;
    const BOTTOM = center.height-157;

    this.people.forEach(( person ) => {    
      //EDGE DETECTION
      person.x = (person.x < LEFTEDGE) ? RIGHTEDGE : person.x - person.speed;

      //BOUNCE FACTOR
      person.accelaration = (person.direction == 1 ) ? BOTTOM - person.y : person.y - BOTTOM; 
      person.y = person.y + person.direction * (gravity*(1-Math.abs(scaleSpeed(person.accelaration))));

      if(person.y > BOTTOM){
          person.y = BOTTOM;
          person.direction = -1;
      }      
      if(person.y < TOP+10){
          person.y = TOP+10;
          person.direction = 1;
      } 
    });
  }

  addAnimations(){
      this.people = [];

      var person = this.add.image(center.width + 80,center.height - 300,'person-1').setScale(assetScale);

      person.speed = 1.8;
      person.direction = 1;
      person.accelaration = 1;
      this.people.push(person);

      var person = this.add.image(center.width - 80,center.height-220,'person-2').setScale(assetScale);

      person.speed = 1.4;
      person.direction = 1;
      person.accelaration = 1;
    
      this.people.push(person);

      this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('bull', { frames: [ 0, 1 ] }),
        frameRate: 10,
        repeat: -1
    });

    this.bull = this.matter.add.sprite(center.width+375, center.height-190, 'bull');
    this.matter.world.setBounds(0,0,WIDTH, center.height-115);
    this.bull.play('run');
  }
}
