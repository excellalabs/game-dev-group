/**
 * Manages awarding points to players
 * Displaying and updating the score on the scoreboard
 * Updating the hit indicators
 */
/*
  frontkick = 200
  flyingsidekick = 500
  roundhouse = 400
  spinning heal kick = 1000
  frontsweep = 200
  squatpunch = 500
  lowkick = 100
  lunchpunch = 500
  backkick = 300
  reversesweep = 400
 */
export default class ScoringManager{
    constructor(scene) {
        this.scene = scene;
    }

    addScoreBoard(numberlives, currentScore, scoreboard){
        this.highScoreText = this.scene.add
        .text(scoreboard.x+120, scoreboard.y-320, '99999', {
          fill: '#ffffff',
          font: `${20 * scoreboard.scale}pt Silom`
        });

        this.numberLivesText = this.scene.add
        .text(scoreboard.x+75, scoreboard.y-290, numberlives+" UP", {
          fill: '#ffffff',
          font: `${20 * scoreboard.scale}pt Silom`
        });

        this.currentScoreText = this.scene.add
        .text(scoreboard.x+120, scoreboard.y-260, currentScore, {
          fill: '#ffffff',
          font: `${20 * scoreboard.scale}pt Silom`
        });

        this.flashCurrentScore();
    }

    flashCurrentScore(){
        this.numberLivesText.visible = !this.numberLivesText.visible;
        this.scene.time.delayedCall(1000, this.flashCurrentScore, [], this);
    }

    awardPoints(player){
        var animation = player.anims.currentAnim.key;
        player.score += 200;
        this.currentScoreText.text = player.score;
        this.displayNumberScore(player.x-50, player.y-100)

        console.log("awarding points for ",animation);
        switch(animation){
            case "frontkick":
                break
            case "flyingsidekick":
                break
            case "roundhouse":
                break
            case "spinninghealkick":
                break
            case "frontsweep":
                break
            case "squatpunch":
                break
            case "lowkick":
                break
            case "lungepunch":
                break
            case "backkick":
                break
            case "reversesweep":
                break
        }
    }

    displayNumberScore(x, y){
        this.awardPointsText = this.scene.add
        .text(x, y, 200, {
          fill: '#ffffff',
          font: `${18}pt Silom`
        });
        this.scene.time.delayedCall(3000, this.hideDisplay, [], this);
    }

    hideDisplay(){
        this.awardPointsText.visible = false;

    }

    highlightIndicator(){

    }

    updatePlayerScore(){

    }

}