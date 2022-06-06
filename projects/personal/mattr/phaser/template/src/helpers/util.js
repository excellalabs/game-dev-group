

var xbouncespeed = 5;

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * 
   * @param {*} player - matter sprite or image
   * @param {*} distance - vertical distance player can jump
   */
  export function bounce(player){
    if(player.y < player.starty - player.verticaldistance){
      player.direction = 1;
    }
    else if(player.y > player.starty + player.verticaldistance){
      player.direction = -1;
    }
    player.y = player.y + player.yoffset * player.direction;
  
  }

  export function breaking(player){
    var boundary = player.startx + 224;
  
    //adjust for x
    if(player.x <= player.startx)
      player.direction = 1
    if(player.x >= boundary)
      player.direction = -1
    player.x = player.x + xbouncespeed * player.direction;

    //adjust for y
    if(player.x > player.startx && player.x < (player.startx + 112)){
      if(player.direction > 0)
        player.y = player.y - 1
      else
        player.y = player.y + 1
    }
    else{
      if(player.direction > 0)
        player.y = player.y + 1
      else
        player.y = player.y - 1
    }
      
  }

  export const Direction = {
    RIGHT: 1,
    LEFT: 0
  };

  export const GameState = {
    NEW: "New",
    INPROGRESS: "In Progress",
    COMPLETE: "Completed"
  };
  