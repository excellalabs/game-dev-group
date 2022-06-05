import Phaser from 'phaser';
import sounds from '../assets/sounds/processed';
var utils = require('../helpers/util');

export default class InputManager {
    constructor(scene) {
        this.scene = scene;
    }

    init(player){
        this.input = this.scene.input;
        this.anims = this.scene.anims;
        this.player = player;

        this.player.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
            if(this.isLowKick)this.isLowKick = false;
            if(this.isKicking)this.isKicking = false;
            if(this.isRoundHouseKicking)this.isRoundHouseKicking = false;
            if(this.isBackFlipping)this.isBackFlipping = false;
            if(this.isFlyingSideKick)this.isFlyingSideKick = false;
            if(this.isFrontSweep)this.isFrontSweep = false;
            if(this.isBackSweep)this.isBackSweep = false;
            if(this.isBackKick)this.isBackKick = false;
            if(this.isSpinningHealKick)this.isSpinningHealKick = false;
            if(this.isJumpingForward)this.isJumpingForward = false;
            if(this.isFlipping)this.isFlipping = false;
            if(this.isJumpingBackKick)this.isJumpingBackKick = false;
            if(this.isLungePunching)this.isLungePunching = false;
            if(this.isHighBlocking)this.isHighBlocking = false;
            if(this.isMiddleBlocking)this.isMiddleBlocking = false;
            if(this.isLowBlocking)this.isLowBlocking = false;
            if(this.isSquatPunching)this.isSquatPunching = false;
            this.pause = false;
        }, this);
    }

    initStates(){
        this.isSquating = false;
        this.isBackFlipping = false;
        this.isKicking = false;
        this.isRoundHouseKicking = false;
        this.isFlyingSideKick = false;
        this.isLowKick = false;
        this.isFrontSweep = false;
        this.isBackSweep = false;
        this.isJumping = false;
        this.isSpinningHealKick = false;
        this.isFlipping = false;
        this.isJumpingBackKick = false;
        this.changingDirection = false;
        this.isHighBlocking = false;
        this.isLowBlocking = false;
        this.isMiddleBlocking = false;
        this.isLungePunching = false;
        this.isSquatPunching = false;
    }

    flipping(){
        this.player.play('flip', true); 
        this.isFlipping = true;
    }
    backFlipping(){
        this.player.play('backflip', true); 
        this.isBackFlipping = true;
    }
    spinningHealKick(){                                                     
        if(!this.isSpinningHealKick){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.player.play('spinningheal', true); 
        this.isSpinningHealKick = true;
        this.pause = true;
    }
    frontLegSweep(){
        if(!this.isFrontSweep){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isFrontSweep = true;
        this.player.play('frontsweep', true);
        this.pause = true; 
    }
    reverseSweep(){
        if(!this.isBackSweep){
            // var frontkick = sounds.play('Front_Kick', false);
            // sounds.volume(0.3, frontkick);
        }
        this.isBackSweep = true;
        this.player.play('reversesweep', true); 
        this.pause = true;
    }
    flyingSideKick(){
        if(!this.isFlyingSideKick){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isFlyingSideKick = true;
        this.player.play('flyingside', true); 
        this.pause = true;
        this.player.x += 40;
    }
    frontKick(){
        if(!this.isKicking){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isKicking = true;
        this.player.play('frontkick', true); 
        this.player.x += 1;
        this.pause = true;
    }
    roundHouseKick(){
        if(!this.isRoundHouseKicking){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isRoundHouseKicking = true;
        this.player.play('roundhousekick', true); 
        this.pause = true;
    }
    backKick(){
        if(!this.isBackKick){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isBackKick = true;
        this.player.play('backkick', true); 
        this.pause = true;
    }
    lowKick(){
        if(!this.isLowKick){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.isLowKick = true;
        this.player.play('lowkick', true); 
        this.pause = true;
    }
    forward(){
        this.player.play('forward', true);
        if(this.player.canMoveForward())
            this.player.x += 10;
        this.pause = true;
    }
    backward(){
        this.player.play('backward', true);
        if(this.player.canMoveBackward())
            this.player.x -= 20;
        this.pause = true;
    }
    jump(){
        this.player.play('jump', true); 
        this.isJumping = true;
        this.pause = true;
    }
    squat(){
        this.player.play('squat', true); 
        this.isSquating = true;
        this.pause = true;
    }
    squatPunch(){
        if(!this.isSquatPunching){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
        this.player.play('squatpunch', true);
        //play squatplunch animation
        this.isSquating = true;
        this.isSquatPunching = true;
    }
    standup(){
        this.player.play('standup', true); 
        this.isSquating = false;
    }
    jumpingBackKick(){

    }
    changeDirection(){
        if(this.changingDirection)
            return;
        this.changingDirection = true;
        this.scene.time.delayedCall(1000, this.finishChangeDirection, [], this);
        
        if(this.player.direction == utils.Direction.RIGHT){
            this.player.direction = utils.Direction.LEFT;
            this.player.setFlipX(true)
        }
        else{
            this.player.direction = utils.Direction.RIGHT;
            this.player.setFlipX(false)
        }
        console.log("direction = ",this.player.direction);
        
    }
    finishChangeDirection(){
        this.changingDirection = false;
    }
    highBlock(){
        this.player.play('highblock', true);
        this.isHighBlocking = true;
        this.pause = true;
    }
    middleBlock(){
        this.player.play('middleblock', true);
        this.isMiddleBlocking = true;
        this.pause = true;
    }
    lowBlock(){
        this.player.play('lowblock', true);
        this.isLowBlocking = true;
        this.pause = true;
    }
    lungePunch(){
        if(!this.isLungePunching){
            var frontkick = sounds.play('Front_Kick', false);
            sounds.volume(0.3, frontkick);
        }
      this.player.play('lungepunch', true); 
      this.isLungePunching = true;
      if(this.player.direction == utils.Direction.LEFT)
        this.player.x -= 1;
      else
        this.player.x += 1;
    this.pause = true;
    }
    backToMainMenu(currentscene){
        this.scene.stop(currentscene);
        this.scene.start('Start');
    }

    win(){
        this.player.play('win', true);
        this.pause = true;
    }
    sweat(){
        this.player.play('sweat', true);
        this.pause = true;
    }
    //RAGDOLL
    /**
     * round house kick, flying side kick, lunge punch
     */
    facePunch(){
        this.player.play('facepunch', true);
        this.pause = true;
        // this.scene.time.delayedCall(4000, this.forward, [], this);
    }
    /**
     * front kick, reverse punch
     */
    gutKick(){
        this.player.play('gutkick', true);
        this.pause = true;
        // this.scene.time.delayedCall(4000, this.forward, [], this);
    }
    /**
     * any action to the back
     */
    fallForward(){

    }

    chop(){
        //play chop animation
        this.player.chopped = true;
        this.player.play('chop', true);
    }
    break(){
        //play chop animation
        this.player.broke = true;
        this.player.play('break', true);
    }
    sendVaseFlying(){
        
    }
   
}