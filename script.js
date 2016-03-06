
var game = {
  movesX: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
  movesO: ["O", "X", "O", "X", "O", "X", "O", "X", "O"],
  numMoves: 0,
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
  // maybe instead of getting the values when this object is created (page load)
  // you can have your row array reference the above variables, e.g.
  // [this.tile1, this.tile2, etc...]
  row2: [$("#tile4").html(),$("#tile5").html(),$("#tile6").html()],
  row3: [$("#tile7").html(),$("#tile8").html(),$("#tile9").html()]
};

Array.prototype.allValuesSame = function(){
  // consider creating a function instead of modifying prototype of built
  // in data type. reason being... most array elements don't have `.html`
  // method referenced below.
  for(var i = 0; i < this.length; i++){
    if(this[i].html() !== this[0].html())
    return false;
  }return true;
};


// this lets the player make moves

$(".tile.open").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.movesX.shift()); // this is an interesting way to change whose turn it is!
  // maybe instead you could have a `turn` attribute on game object.
  // console.log("Returning this html: " + this.html);
  game.numMoves++;
  // console.log("Number of moves " + game.numMoves);
  return (winsRow() ||  winsCol() || winsDiag()); // nice!
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
