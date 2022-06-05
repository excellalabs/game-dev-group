/**
 * Manages game state and timers
 * Game start, in progress, stopped
 * Timers
 * Who wins
 * Scoring system (updating score board)
 */
const GameState = {
    NEW: "New",
    INPROGRESS: "In Progress",
    COMPLETE: "Completed"
};

export default class SessionManager{
    constructor(scene) {
        this.scene = scene;
        this.useTimer = false;

        //set by board config
        this.timerAmount = 0;
        this.timerstarted = false;
        this.timerOffset = {"x": 0, "y": 0};

        this.gameState = GameState.NEW
        this.sessionActive = false;
        this.sceneCallback = null;

        this.numberlives = 3;

        //game objects
        this.teacher = null;
        this.whiteplayer = null;
        this.redplayer = null;
    }

    getNumberLivesLeft(){
        return this.numberlives;
    }
    
    setGameObjects(teacher, whiteplayer, redplayer){
        this.teacher = teacher;
        this.whiteplayer = whiteplayer;
        this.redplayer = redplayer;
    }
    getCurrentState(){
        return this.gameState;
    }
    setState(newstate){
        this.gameState = newstate;
    }

    setCallbackOnComplete(callback){
        this.sceneCallback = callback;
    }
    setTimerLocation(offset){
        this.timerOffset = offset;
    }

    sessionComplete(){
        this.sessionActive = false;
    }
    createTimer(x, y, SCALE){
        this.timerText = this.scene.add.text(x+parseInt(this.timerOffset.x), y+parseInt(this.timerOffset.y), this.timerAmount.toString(), {fill: '#ffffff',font: `${16 * SCALE}pt Silom`});
        this.sessionActive = true;
    }
    startTimer(){
        if(this.sessionActive){
        if(this.timerAmount == 0){
            this.gameState = GameState.COMPLETE;
            this.sceneCallback(this.teacher, this.whiteplayer);
        }else{
          this.timerAmount -= 1;
          if(this.timerAmount < 20)
            this.timerText.style.color = 'red'
          this.timerText.setText(this.timerAmount);
          this.scene.time.delayedCall(1000, this.startTimer, [], this);
        }
    }
    }
}