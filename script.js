var game = {
  moves: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
  numMoves: 0,
  tiles: ["#tile1","#tile2","#tile3","#tile4","#tile5","#tile6","#tile7","#tile8","#tile9"]
};

$('document').ready(function(){

  $("#tile1").on("click", function(){
    $(this).removeClass("open").addClass("taken");
    $(this).html(game.moves.shift());
    console.log("This: " + this);
    console.log(game.moves.shift);
    game.numMoves++;
    console.log(game.numMoves);
  }
);

$("#tile2").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile3").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile4").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile5").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile6").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile7").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile8").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#tile9").on("click", function(){
  $(this).removeClass("open").addClass("taken");
  $(this).html(game.moves.shift());
  console.log(this);
}
);

$("#startBtn").on("click", clearBoard);

function clearBoard(){
  for(var i = 0; i <= game.tiles.length; i++){
    $(".taken").removeClass("taken").addClass("open");
    $("div.open").html("");
    game.moves = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  }
}

});

// var tile = $('<div></div>')
// .hide()
// .append($('<table></table>')
//     .attr({ cellSpacing : 0 })
//     .addClass("text")

// this makes sure the completed grid is removed at the end of a game
// function buildGrid(){
//     var parentDiv = $("#grid");
//     for (var i = 0; i <= 9; i++){
//       var tile = $("#grid").append($("<div></div>")).addClass("open");
//       tile.id = "tile" + i;
//       $("#grid").append(tile);
//     }
//   }
