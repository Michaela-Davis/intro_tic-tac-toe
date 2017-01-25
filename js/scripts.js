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


/////////////////////FRONT END LOGIC

$(function() {
  $('.space').click(function(event) {
    var selectedSpace = (event.target.id);
    selectedSpaceNum = parseInt(selectedSpace);
    console.log(board[selectedSpaceNum - 1]);
    if (clickcounter % 2 === 0) {
      $('#'+selectedSpace).append("<img src='img/x.jpeg'>");
      clickcounter += 1;
    } else {
      $('#'+selectedSpace).append("<img src='img/o.jpeg'>");
      clickcounter += 1;
    };
  });

  $('#newGame').click(function(event) {
    var currentBoard = new Board();

  });

});
