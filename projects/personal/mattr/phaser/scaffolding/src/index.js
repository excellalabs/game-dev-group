import './index.css';
import './font-loader';

import Phaser from 'phaser';

import constants from './config/constants';
import PreBoot from './scenes/preboot';
import MainMenu from './scenes/mainmenu';

window.Phaser = Phaser;

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  input: {
    gamepad: true
  },
  physics: {
    default: 'matter'
  //   matter: {
  //     debug: true
  // }
},
  scene: [PreBoot, 
    MainMenu
    // Board1,
    // Board2,
    // Board3,
  ],
  pixelArt: true,
  antialias: false
};

const game = new Phaser.Game(config);

window.game = game;
