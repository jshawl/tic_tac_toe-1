
var game = {
  movesX: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
  movesO: ["O", "X", "O", "X", "O", "X", "O", "X", "O"],
  numMoves: 0,
  rows: [[$("#tile1").html(),$("#tile2").html(),$("#tile3").html()],[$("#tile4").html(),$("#tile5").html(),$("#tile6").html()],[$("#tile7").html(),$("#tile8").html(),$("#tile9").html()]],
  cols: [[$("#tile1"),$("#tile4"),$("#tile7")],[$("#tile2"),$("#tile5"),$("#tile8")],[$("#tile3"),$("#tile6"),$("#tile9")]],
  diags: [[$("#tile1"),$("#tile5"),$("#tile9")],[$("#tile3"),$("#tile5"),$("#tile7")]],
  tile1: $("#tile1"),
  tile2: $("#tile2"),
  tile3: $("#tile3"),
  tile4: $("#tile4"),
  tile5: $("#tile5"),
  tile6: $("#tile6"),
  tile7: $("#tile7"),
  tile8: $("#tile8"),
  tile9: $("#tile9"),
  row1: [$("#tile1").html(),$("#tile2").html(),$("#tile3").html()],
  row2: [$("#tile4").html(),$("#tile5").html(),$("#tile6").html()],
  row3: [$("#tile7").html(),$("#tile8").html(),$("#tile9").html()]
};

Array.prototype.allValuesSame = function(){
  for(var i = 0; i < this.length; i++){
    if(this[i].html() !== this[0].html())
    return false;
  }return true;
};


// this lets the player make moves

$(".tile.open").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.movesX.shift());
  // console.log("Returning this html: " + this.html);
  game.numMoves++;
  // console.log("Number of moves " + game.numMoves);
  return (winsRow() ||  winsCol() || winsDiag());
}
);

// this clears the board and starts a new game

$(".startBtn").on("click", clearBoard);

function clearBoard(){
  for(var i = 0; i <= 9; i++){
    $(".taken").removeClass("taken").addClass("open");
    $("div.open").html("");
    game.movesX = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    game.movesO = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
    numMoves = 0;
  }
}


// ((game.rows[0][0].html() !== "") (game.rows[0][1].html() !== "") && (game.rows[0][2].html() !== "") && (game.rows[0][0].html() === game.rows[0][1].html()) && (game.rows[0][1].html() === game.rows[0][2].html()))

function winsRow(){
  if((game.tile1.html() !== "") && (game.tile2.html() !== "") && (game.tile3.html() !== "") && game.tile1.html() == game.tile2.html() && game.tile2.html() == game.tile3.html()){
    alert(game.tile1.html() + " is the winner!");
    return game.tile1.html();
  }else if((game.tile4.html() !== "") && (game.tile5.html() !== "") && (game.tile6.html() !== "") && game.tile4.html() == game.tile5.html() && game.tile5.html() == game.tile6.html()){
    alert(game.tile4.html() + " is the winner!");
    return game.tile4.html();
  }else if((game.tile7.html() !== "") && (game.tile8.html() !== "") && (game.tile9.html() !== "") && game.tile7.html() == game.tile8.html() && game.tile8.html() == game.tile9.html()){
    alert(game.tile7.html() + " is the winner!");
    return game.tile7.html();
  }
}

function winsCol(){
  if((game.tile1.html() !== "") && (game.tile4.html() !== "") && (game.tile7.html() !== "") && game.tile1.html() == game.tile4.html() && game.tile4.html() == game.tile7.html()){
    alert(game.tile1.html() + " is the winner!");
    return game.tile1.html();
  }else if((game.tile2.html() !== "") && (game.tile5.html() !== "") && (game.tile8.html() !== "") && game.tile2.html() == game.tile5.html() && game.tile5.html() == game.tile8.html()){
    alert(game.tile2.html() + " is the winner!");
    return game.tile2.html();
  }else if((game.tile3.html() !== "") && (game.tile6.html() !== "") && (game.tile9.html() !== "") && game.tile3.html() == game.tile6.html() && game.tile6.html() == game.tile9.html()){
    alert(game.tile3.html() + " is the winner!");
    return game.tile3.html();
  }
}

function winsDiag(){
  if((game.tile1.html() !== "") && (game.tile5.html() !== "") && (game.tile9.html() !== "") && game.tile1.html() == game.tile5.html() && game.tile5.html() == game.tile9.html()){
    alert(game.tile1.html() + " is the winner!");
    return game.tile1.html();
  }else if((game.tile3.html() !== "") && (game.tile5.html() !== "") && (game.tile7.html() !== "") && game.tile3.html() == game.tile5.html() && game.tile5.html() == game.tile7.html()){
    alert(game.tile3.html() + " is the winner!");
    return game.tile3.html();
  }
}
// if(game.rows.forEach(allValuesSame) == true){
//   console.log("There is a winner!");
// }
// if((game.rows[0][0].html() === game.rows[0][1].html()) && (game.rows[0][1].html() === game.rows[0][2].html()) !== ""){
//   console.log(game.rows[0][0].html() + " is the winner!");
// }else if((game.tile4.html() !== null) && (game.tile5.html() !== null) && (game.tile6.html() !== null) && (game.tile4.html() === game.tile5.html()) && (game.tile5.html() === game.tile6.html())){
//   console.log(game.rows[1][0].html() + " is the winner!");
// }else if((game.tile8 !== null) && (game.tile9 !== null) && (game.tile7.html() === game.tile8.html()) && (game.tile8.html() === game.tile9.html()) && (game.tile7.html() !== null)){
//   console.log(game.rows[2][0].html() + " is the winner!");
// }



function loopRows(){
  for(var i = 0; i < game.rows.length; i++){
    var row = game.rows[i];
    for (var j = 0; j < row.length; j++){
      var self = this;
      if(game.rows[i][0].html() != self[j][0].html());
      console.log("No winners here");
      return false;
    }console.log("Winner winner chicken dinner");
    return true;
  }
}




// add an option to play as Xs or Os
// add players
// add class color change for taken
