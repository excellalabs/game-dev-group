# Karate Champ Phaser 3

![Screenshot](karate_champ.png)

## Description

Phaser 3 version of the Arcade Game "Karate Champ"

# Features

-   Webpack 4
-   babel 7 +
-   Es6 support
-   Prettier Style
-   Easy deployment to gh-pages
-   Webpack bundle analyzer
-   Howler 2 for Audio
-   Browsersync
-   Project Complexity analysis `yarn complexity-report`
-   Tilemap processing (extrusion and minification and more)
-   Image processing (moving and compression with pngquant)
-   Audio processing (Audiosprite Creation)

# Installation

1.  Clone the repo
2.  `yarn install`
3.  `yarn start`

## Game Play

Practice Board

- Use this board to practice moves (no direction or guidance provided)

Training Boaard

- Use this board for guided training and to increase belt ranking

Challenge Board

- Boards provided during gameplay between matches to test your skill

Game Board

- Either single or multi-player matches (location will radomly change)


### Player Movement

_x__ back kick = right stick left
_X__ round kick = right stik up
_X__ front kick = right stick right
_X__ low kick = right stick down
_X__ front leg sweep = left stick down, right stick right
___ back leg sweep = left stick down, right stick left
_X__ spinning heal kick = left stick right, right stick left
_X__ flying side kick = left stick up, right stick right

_x__ front flip = left stick up, right stick down
_X__ back flip = left stick down, right stick up

_X__ move forward = left stick right
_X__ move backward = left stick left
_X__ jump = left stick up
_X__ squat = left stick down

___ reverse punch = left shoulder + right stick right
___ squating reverse punch = left shoulder + right stick down
_x__ thrust punch = left stick right + right stick right
___ (new) back fist = left shoulder + right stick right
___ (new) spinning back fist = left shoulder + left stick left + right stick right

_x__ high block = left shoulder + left stick up
_x__ middle block = left shoulder + left stick back
_x__ low block = left shoulder + left stick down

_x__ change direction = right shoulder