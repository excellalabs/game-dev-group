import Phaser from 'phaser';
import mainmenu from '../assets/boards/mainmenu/mainmenu.png';
import hand from '../assets/boards/mainmenu/hand.png';
import audio from '../assets/boards/mainmenu/audio.png';
import noaudio from '../assets/boards/mainmenu/no-audio.png';
import sounds from '../assets/sounds/processed';
import constants from '../config/constants';

// var utils = require('../helpers/util');
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

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });

    console.log("music = ", settings['music'])
    this.musicplaying = settings["music"];
    this.showSplashScreen = false;   //determines if you want to show a splash screen after a certain amount of time
    this.selection = 0;       //your current menu option selection
    this.numberEntries = 3;   //number of main menu options
  }

  /**
   * Preload the main menu board
   */
  preloadBackground() {
    this.load.image('mainmenu', mainmenu);
  }

  /**
   * Add the main menu board
   */
  createBackground(scale) {
    // const center = {
    //   width: WIDTH * 0.5,
    //   height: HEIGHT * 0.5
    // };
    this.add
      .image(center.width, center.height, 'mainmenu')
      .setScale(scale);
  }

  /**
   * Preload the assets
   */
  preload() {
    cursors = this.input.keyboard.createCursorKeys();
    this.preloadBackground();
    this.load.image('hand', hand);
    this.load.image('audio', audio);
    this.load.image('noaudio', noaudio);
  }

  /**
   * Add the components and register the input handler
   */
  create() {
    this.createBackground(assetScale);
    this.addComponents();
    this.makeText();
    this.inputHandler();
    if(this.musicplaying)
      this.playMusic();
  }

  /**
   * Starts the game and starts the scene based on the users current selection
   */
  startGame(){
    if(this.selection == 0)
      this.scene.start('Board 1');  //this might be 'Single Player'
    else if(this.selection == 1)
      this.scene.start('Board 2');  //this might be 'Multi Player'
    else if(this.selection == 2)
      this.scene.start('Board 3');  //etc...
  }

  /**
   * Register the input events
   */
  inputHandler(){
    this.input.on('pointerdown', this.toggleMusic, this);
    this.input.on('pointermove', this.resetTimer, this);
    this.input.keyboard.on('keydown-ENTER', this.startGame, this);
  }


  /**
   * Create the assets
   */
  addComponents(){
    var audiox = center.width+300;
    var audioy = center.height-280;
    
    //add pointer to select options
    this.hand = this.add.image(center.width-160, center.height+10, 'hand').setScale(assetScale);

    //audio icons
    this.audio = this.add.image(audiox, audioy, 'audio').setScale(assetScale * .8);
    this.audio.visible = true;
    this.noaudio = this.add.image(audiox, audioy, 'noaudio').setScale(assetScale * .8);
    this.noaudio.visible = false;

    //text for main menu
    //SINGLE PLAYER?
    this.menuoption1 = this.add.text(center.width-115, center.height-15, 'BOARD 1', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption1.visible = true;

    //MULTIPLAYER?
    this.menuoption2 = this.add.text(center.width-115, center.height+25, 'BOARD 2', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption2.visible = true;

    //ETC...
    this.menuoption3 = this.add.text(center.width-115, center.height+65, 'BOARD 3', {
      fill: '#FFFFFF',
      font: `${20 * SCALE}pt Silom`
    });
    this.menuoption3.visible = true;
  }


  /**
   * Resets the splash screen after timer event expired
   */
  resetTimer(){
    if(this.showSplashScreen){
      this.showSplashScreen = false;
    }
    counter = 0;
  }

  /**
   * Game loop
   */
  update() {
    counter++;
    this.transitionToSpashScreen(counter);
    this.moveCursor(counter);
  }

  //transition to spash screen if no input detected
  transitionToSpashScreen(counter){
    if(counter > timeBeforeShowingLanding){
      this.scene.switch('LeaderBoard');
      this.showleaderboard = true;
      counter = 0;
    }
  }

  //check for cursor movements
  moveCursor(){
    if(this.input.keyboard.checkDown(cursors.up, 250))
    {
      counter = 0;
      if(this.selection > 0){
        this.hand.y = this.hand.y - 40;
        this.selection--;
      }
    }
    if(this.input.keyboard.checkDown(cursors.down, 250))
    {
      counter = 0;
      if(this.selection < this.numberEntries-1){
        this.hand.y = this.hand.y + 40;
        this.selection++;
      }
    }
  }

  render() {}

  /**
   * Play background music
   */
  playMusic = () => {
    this.backgroundMusic = sounds.play('Main_Menu');
    sounds.loop(true, this.backgroundMusic);
    sounds.volume(0.6, this.backgroundMusic);
  };

  /**
   * Toggles the background music on/off
   */
  toggleMusic() {
    if(!this.musicplaying){
      sounds.volume(0, this.backgroundMusic);
      this.audio.visible = false;
      this.noaudio.visible = true;
    }
    else{
      sounds.volume(0.6, this.backgroundMusic);
      this.audio.visible = true;
      this.noaudio.visible = false;
    }
    this.musicplaying = !this.musicplaying;
  }

  /**
   * Generates the text on the main menu
   */
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
