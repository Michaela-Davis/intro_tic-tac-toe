/////////////////////BACK END LOGIC
// function Board() {
//   this.one = 'one',
//   this.two = 'two',
//   this.three = 'three',
//   this.four = 'four',
//   this.four = 'four',
//   this.five = 'five',
//   this.six = 'six',
//   this.seven = 'seven',
//   this.eight = 'eight',
//   this.nine = 'nine'
// }
//
// var currentBoard = new Board();

var board = [1,2,3,4,5,6,7,8,9]
clickcounter = 0;
var win = function() {
  if ((board[0] === board[1]) && (board[1] === board[2])) {
    alert(board[0]+" WINS")

  } else if ((board[3] === board[4]) && (board[4] === board[5])) {
    alert(board[3]+" WINS")

  } else if ((board[6] === board[7]) && (board[7] === board[8])) {
    alert(board[6]+" WINS")

  } else if ((board[0] === board[3]) && (board[3] === board[6])) {
    alert(board[0]+" WINS")

  } else if ((board[1] === board[4]) && (board[4] === board[7])) {
    alert(board[1]+" WINS")

  } else if ((board[2] === board[5]) && (board[5] === board[8])) {
    alert(board[2]+" WINS")

  } else if ((board[0] === board[4]) && (board[4] === board[8])) {
    alert(board[0]+" WINS")

  } else if ((board[2] === board[4]) && (board[4] === board[6])) {
    alert(board[2]+" WINS")
  }
}

/////////////////////FRONT END LOGIC

$(function() {
  $('.space').click(function(event) {
    var selectedSpace = (event.target.id);
    selectedSpaceNum = parseInt(selectedSpace);
    if (clickcounter % 2 === 0) {
      $('#'+selectedSpace).append("<img src='img/x.jpeg'>");
      clickcounter += 1;
      board[selectedSpaceNum - 1] = 'x'
    } else {
      $('#'+selectedSpace).append("<img src='img/o.jpeg'>");
      clickcounter += 1;
      board[selectedSpaceNum - 1] = 'o'
    };
    win();
    console.log(board);
  });

  $('#newGame').click(function(event) {
    location.reload();

  });

});
