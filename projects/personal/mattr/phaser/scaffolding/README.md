# Phaser Scaffolding Project

## Description

Scaffolding project used to scaffold new Phaser Games using Matter.js

# Features

-   TypeScript
-   Webpack 4
-   babel 7 +
-   Es6 support
-   Webpack bundle analyzer
-   Browsersync
-   Project Complexity analysis `yarn complexity-report`
-   Tilemap processing (extrusion and minification and more)
-   Image processing (moving and compression with pngquant)
-   Audio processing (Audiosprite Creation)

# Installation

1.  Clone the repo
2.  `npm install`
3.  `npm start`

## Project Layout

- package.json: Contains all of the packages you need in the project
- .gitignore: tells git not to use source control on certain files/folders
- /src: Folder containing your game logic
- /src/assets:  Contains all of the images and sounds for your game
- /src/config:  Game configuration specifics
- /src/gameobjects:  Extends the physics sprite class for your game objects
- /src/gameobjects/player.js:  The main character in your game
- /src/gameobjects/gameobject.js:  Extend this class for you game objects
- /src/helpers: Utility functions and other helpers
- /src/scenes:  Your phaser scenes (logic behind each board)
- /src/services: Service classes the handle game object interaction
