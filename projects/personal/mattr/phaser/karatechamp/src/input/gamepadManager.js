import Phaser from 'phaser';
import sounds from '../assets/sounds/processed';
import InputManager from './inputManager';

export default class GamepadManager extends InputManager {
    constructor(scene) {
        super(scene);
        this.scene = scene;
    }

    init(player){
        super.init(player);
        this.input = this.scene.input;
        this.anims = this.scene.anims;
        this.player = player;

        this.registerInputHandlers();
    }

    registerInputHandlers(){
        this.LS = this.input.gamepad.leftStick;
        this.RS = this.input.gamepad.rightStick;
        this.L1 = this.input.gamepad.L1;
        this.R1 = this.input.gamepad.R1;
        this.L2 = this.input.gamepad.L2;
        this.R2 = this.input.gamepad.R2;
        this.X = this.input.gamepad.X;
        this.A = this.input.gamepad.A;
        this.B = this.input.gamepad.B;
        this.Y = this.input.gamepad.Y;
    }

    initStates(){
        super.initStates();
    }

    checkForInput(){
        this.player.x -= (this.isBackFlipping && this.player.anims.currentFrame.index > 1 && this.player.anims.currentFrame.index < 10) ? 3 : 0;
        this.player.x += (this.isFlipping && this.player.anims.currentFrame.index > 1 && this.player.anims.currentFrame.index < 10) ? 3 : 0;
    
        //HIGH BLOCK
        if(this.Y)this.highBlock();
        //MIDDLE BLOCK
        else if(this.B)this.middleBlock();
        //LOW BLOCK
        else if(this.A && !this.isFlipping)this.lowBlock();

        //LUNGE PUNCH
        else if(this.LS.x > 0.4 && this.RS.x > 0.4)this.lungePunch();

        //KICKS
        //SPINNING HEAL KICK
        else if(this.LS.x < -0.2 && this.RS.x > 0.2)this.spinningHealKick();
        //BACK FLIP
        else if(this.LS.y > 0.4 && this.RS.y < -0.4)this.backFlipping();
        //FRONT FLIP
        else if(this.LS.y < -0.4 && this.RS.y > 0.4)this.flipping();
        //FRONT LEG SWEEP
        else if(this.LS.y > 0.4 && this.RS.x > 0.4)this.frontLegSweep();
        //FLYING SIDE KICK
        else if(this.LS.y < -0.4 && this.RS.x > 0.4)this.flyingSideKick();
        //FRONT KICK
        else if(this.RS.x > 0.4 && !this.isFlyingSideKick && !this.isFrontSweep && !this.isLungePunching && !this.isSpinningHealKick)this.frontKick();
        //ROUND HOUSE KICK
        else if(this.RS.y < -0.4 && !this.isBackFlipping)this.roundHouseKick();
        //BACK KICK
        else if(this.RS.x < -0.4)this.backKick();
        //LOW KICK
        else if(this.RS.y > 0.4 && !this.isBackKick && !this.isFlipping && !this.isBackFlipping)this.lowKick();
        //FORWARD
        else if(this.LS.x > 0.4 && !this.isFlipping && !this.isLungePunching)this.forward();
        //BACKWARD
        else if(this.LS.x < -0.4)this.backward();
        //JUMP
        else if(this.LS.y < -0.4 & !this.isFlyingSideKick && !this.isFlipping)this.jump();
        //SQUAT
        else if(this.LS.y > 0.4 && !this.isSquating && !this.isFrontSweep && !this.isBackFlipping)this.squat();
        //STANDUP
        else if(this.LS.y > 0 && this.LS.y < 0.4 && this.isSquating)this.standup();
      }
}