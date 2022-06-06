const moves = require('../config/moves.json');

/**
 * BehaviorManager
 * Moves the ai player based on a behavior model defined within this class
 */
export default class BehaviorManager{
    constructor(player) {
        this.player = player;
        this.direction = 1;
    }
    forward(){
        this.player.play("red-forward", true);
    }
    backward(){
        this.player.play("red-backward", true);
    }
    jump(){
        this.player.play('red-jump', true);
    }
    update(){
        
        
        if(this.direction==1 && this.player.x <= 600){
            this.direction = 0;
            this.jump();
        }else if(this.direction == -1 && this.player.x >= 800){
            this.direction = 1;
            this.forward();
        }
        // else{
        //     this.direction = 1;
        //     this.forward();
        // }

        // if(this.player.x >= 900){
        //     this.direction = 1;
        //     this.forward();
        // }
        // if(this.player.x <= 200){
        //     this.backward();
        //     this.direction = -1;
        // }
            
        
        this.player.x -= 0.75*this.direction
    }
}