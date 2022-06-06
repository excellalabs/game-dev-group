import Phaser from 'phaser';
import mainmenu from '../assets/backgrounds/start/mainmenu.png';
import testmenu from '../assets/backgrounds/start/testmenu.png';
import hand from '../assets/backgrounds/start/hand.png';
import audio from '../assets/backgrounds/start/audio.png';
import noaudio from '../assets/backgrounds/start/no-audio.png';
import sounds from '../assets/sounds/processed';
import constants from '../config/constants';

var utils = require('../helpers/util');
const settings = require('../config/config.json');

const { WIDTH, HEIGHT, SCALE } = constants;

const center = {
  width: WIDTH * 0.5,
  height: HEIGHT * 0.5
};

const assetScale = SCALE;
const timeBeforeShowingLanding = 1000;

 var cursors;
 var counter = 0;
 var selection = 1;

export default class Start extends Phaser.Scene {
  constructor() {
    super({ key: 'Start' });

    console.log("music = ", settings['music'])
    this.musicplaying = settings["music"];
    this.showleaderboard = false;
    this.selection = 0;
    this.page = 1;
    this.firstpageSelections = 4;
    this.secondpageSelections = 5;
  }

  preloadBackground() {
    this.load.image('testmenu', testmenu);
  }

  createBackground(scale) {
    const center = {
      width: WIDTH * 0.5,
      height: HEIGHT * 0.5
    };
    this.add
      .image(center.width, center.height, 'testmenu')
      .setScale(scale);
  }

  preload() {
    cursors = this.input.keyboard.createCursorKeys();
    this.preloadBackground();
    this.load.image('hand', hand);
    this.load.image('audio', audio);
    this.load.image('noaudio', noaudio);
  }
  create() {
    this.createBackground(assetScale);
    this.addComponents();
    this.makeText();
    this.inputHandler();
    if(this.musicplaying)
      this.playMusic();
  }
  startGame(){
    if((this.selection == 3 && this.page==1) || (this.selection == 5 && this.page==2)){
      this.changePages();
    }else{
      sounds.stop(this.title_track);
      // this.scene.stop('Start');

      if(this.page==1){
        if(this.selection == 0)
          this.scene.start('SinglePlayer');
        else if(this.selection == 1)
          this.scene.start('Multiplayer');
        else if(this.selection == 2)
          this.scene.start('TrainingBoard');
      }
      else{
        this.scene.stop('Start');
        if(this.selection == 0)
          this.scene.start('BrickBoard');
        else if(this.selection == 1)
          this.scene.start('BrickBoard2');
        else if(this.selection == 2)
          this.scene.start('VaseBoard');
        else if(this.selection == 3)
          this.scene.start('BullBoard');
        else if(this.selection == 4){
          this.scene.stop('Start');
          this.scene.start('Start');
          this.selection = 0;
        }
      }
   }
  }
  inputHandler(){
    this.input.on('pointerdown', this.stopMusic, this);
    this.input.on('pointermove', this.resetTimer, this);
    this.input.keyboard.on('keydown-ENTER', this.startGame, this);
  }
  addComponents(){
    var audiox = center.width+300;
    var audioy = center.height-280;
    
    //pointer for choosing 1 or 2 players
    this.hand = this.add.image(center.width-160, center.height+10, 'hand').setScale(assetScale);

    //audio icons
    this.audio = this.add.image(audiox, audioy, 'audio').setScale(assetScale * .8);
    this.audio.visible = true;
    this.noaudio = this.add.image(audiox, audioy, 'noaudio').setScale(assetScale * .8);
    this.noaudio.visible = false;

    this.menuoption1 = this.add.text(center.width-115, center.height-15, 'SINGLE PLAYER', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption1.visible = true;

    this.menuoption2 = this.add.text(center.width-115, center.height+25, 'MULTIPLAYER', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption2.visible = true;

    this.menuoption3 = this.add.text(center.width-115, center.height+65, 'TRAINING', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption3.visible = true;

    this.menuoption4 = this.add.text(center.width-115, center.height+105, 'CHALLENGE BOARDS', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption4.visible = true;

    this.devoption1 = this.add.text(center.width-115, center.height-15, 'VERTICAL BREAKING', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.devoption1.visible = false;

    this.devoption2 = this.add.text(center.width-115, center.height+25, 'HORIZONTAL BREAKING', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.devoption2.visible = false;

    this.devoption3 = this.add.text(center.width-115, center.height+65, 'VASE CHALLENGE', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.devoption3.visible = false;

    this.devoption4 = this.add.text(center.width-115, center.height+105, 'BULL CHALLENGE', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.devoption4.visible = false;

    this.devoption5 = this.add.text(center.width-115, center.height+145, 'MAIN MENU', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.devoption5.visible = false;
  }

  changePages(){
    this.resetTimer();
    this.hand.y = center.height+10;
    this.selection = 0;
    this.page = (this.page==1 ? 2 : 1);

    this.menuoption1.visible = this.page==1;
    this.menuoption2.visible = this.page==1;
    this.menuoption3.visible = this.page==1;
    this.menuoption4.visible = this.page==1;

    this.devoption1.visible = this.page==2;
    this.devoption2.visible = this.page==2;
    this.devoption3.visible = this.page==2;
    this.devoption4.visible = this.page==2;
    this.devoption5.visible = this.page==2;        
  }

  resetTimer(){
    if(this.showleaderboard){
      this.showleaderboard = false;
    }
    counter = 0;
  }
  update() {
    counter++;
    
    //transition to leaderboard if no input detected
    if(counter > timeBeforeShowingLanding){
      this.scene.switch('LeaderBoard');
      this.showleaderboard = true;
      counter = 0;
    }

    //input handling
    if(this.input.keyboard.checkDown(cursors.up, 250))
    {
      if(this.selection > 0){
        this.hand.y = this.hand.y - 40;
        this.selection--;
      }
    }
    if(this.input.keyboard.checkDown(cursors.down, 250))
    {
      var maxSelections = (this.page==2 ? this.secondpageSelections : this.firstpageSelections);
      if(this.selection < maxSelections-1){
        this.hand.y = this.hand.y + 40;
        this.selection++;
      }
    }
  }
  render() {}

  playMusic = () => {
    this.backgroundMusic = sounds.play('Main_Menu');
    sounds.loop(true, this.backgroundMusic);
    sounds.volume(0.6, this.backgroundMusic);
  };

  stopMusic() {
    if(!this.musicplaying){
      sounds.volume(0, this.backgroundMusic);
      this.audio.visible = false;
      this.noaudio.visible = true;
    }
    else{
      console.log("playing")
      sounds.volume(0.6, this.backgroundMusic);
      this.audio.visible = true;
      this.noaudio.visible = false;
    }
    this.musicplaying = !this.musicplaying;
  }

  makeText() {
    this.titleText = this.add
      .text(center.width, center.height * 0.20, 'Choose 1 or 2 players', {
        fill: '#ffffff',
        font: `${20 * SCALE}px Rajdhani`
      })
      .setOrigin(0.5, 0.5)
      .setAlpha(0);

    this.textTween = this.tweens.add({
      targets: this.titleText,
      alpha: {
        value: 1,
        delay: 2000,
        duration: 5000
      }
    });

    this.textTween = this.tweens.add({
      targets: [this.startText],
      alpha: {
        value: 1,
        delay: 7000,
        duration: 5000
      }
    });
  }
}
