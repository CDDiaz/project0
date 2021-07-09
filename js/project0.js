$(document).ready(function() {

$('#light-css').on('click', function(){
  $('#styles').attr("href", "css/light.css");
});
$('#dark-css').on('click', function(){
  $('#styles').attr("href", "css/style.css");
});

  let gameStatus = 0;
  let gameRecord = 0;
  let playerOneRecord = 0;
  let playerTwoRecord = 0;
  let drawRecord = 0;

  let playerOne = "X";
  let playerTwo = "O";
  let playerOneName = "";
  let playerTwoName = "";

  let currentSelector = "";
  let currentPlayer = Math.floor((Math.random()*2)+1);

  const playerCheck = function(){
    if (currentPlayer === 1) {
      currentSelector = playerOne;
      $('#oneTurn').removeClass('red');
      $('#twoTurn').removeClass('green');
      $('#oneTurn').addClass('green');
      $('#twoTurn').addClass('red');
    } else if (currentPlayer === 2){
      currentSelector = playerTwo;
      $('#oneTurn').removeClass('green');
      $('#twoTurn').removeClass('red');
      $('#oneTurn').addClass('red');
      $('#twoTurn').addClass('green');
    };
  };

  const tictac = {
    a: ["","",""],
    b: ["","",""],
    c: ["","",""]
  };

  const reset = function() {
    tictac.a = ["","",""];
    tictac.b = ["","",""];
    tictac.c = ["","",""];

    $('#a0').text("");
    $('#a1').text("");
    $('#a2').text("");
    $('#b0').text("");
    $('#b1').text("");
    $('#b2').text("");
    $('#c0').text("");
    $('#c1').text("");
    $('#c2').text("");
  };

  $('#startQuick').on('click', function() {
    if (gameStatus === 0) {
      gameStatus = 1;
      playerCheck();
      reset();
      $('#winner').addClass('none');
    }
  });

  $('#startCustom').on('click', function() {
    if (gameStatus === 0) {
      gameStatus = 1;
      playerOne = $('#playerOneCharacter').val().charAt(0);
      playerTwo = $('#playerTwoCharacter').val().charAt(0);
      playerOneName = $('#playerOneNickname').val();
      playerTwoName = $('#playerTwoNickname').val();
      playerCheck();
      $('#startCustom').addClass('hidden');
    }
  });

  $('#a0').on('click', function() {
    if (tictac.a[0] === "" && gameStatus === 1) {
      $('#a0').text(currentSelector);
      tictac.a[0] = $('#a0').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#a1').on('click', function() {
    if (tictac.a[1] === "" && gameStatus === 1) {
      $('#a1').text(currentSelector);
      tictac.a[1] = $('#a1').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#a2').on('click', function() {
    if (tictac.a[2] === "" && gameStatus === 1) {
      $('#a2').text(currentSelector);
      tictac.a[2] = $('#a2').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#b0').on('click', function() {
    if (tictac.b[0] === "" && gameStatus === 1) {
      $('#b0').text(currentSelector);
      tictac.b[0] = $('#b0').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#b1').on('click', function() {
    if (tictac.b[1] === "" && gameStatus === 1) {
      $('#b1').text(currentSelector);
      tictac.b[1] = $('#b1').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#b2').on('click', function() {
    if (tictac.b[2] === "" && gameStatus === 1) {
      $('#b2').text(currentSelector);
      tictac.b[2] = $('#b2').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#c0').on('click', function() {
    if (tictac.c[0] === "" && gameStatus === 1) {
      $('#c0').text(currentSelector);
      tictac.c[0] = $('#c0').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#c1').on('click', function() {
    if (tictac.c[1] === "" && gameStatus === 1) {
      $('#c1').text(currentSelector);
      tictac.c[1] = $('#c1').text();
      gameCheck(tictac);
      playerChange();
    };
  });
  $('#c2').on('click', function() {
    if (tictac.c[2] === "" && gameStatus === 1) {
      $('#c2').text(currentSelector);
      tictac.c[2] = $('#c2').text();
      gameCheck(tictac);
      playerChange();
    };
  });

  const gameCheck = function() {
    const a = tictac.a;
    const b = tictac.b;
    const c = tictac.c;

    if (a[0] === a[1] && a[1] === a[2] && a[0]){
        winner();
    } else if (b[0] === b[1] && b[1] === b[2] && b[0]){
        winner();
    } else if (c[0] === c[1] && c[1] === c[2] && c[0]){
        winner();
    } else if (a[0] === b[1] && b[1] === c[2] && a[0]){
        winner();
    } else if (c[0] === b[1] && b[1] === a[2] && c[0]){
        winner();
    } else if (a[0] === b[0] && b[0] === c[0] && a[0]){
        winner();
    } else if (a[1] === b[1] && b[1] === c[1] && a[1]){
        winner();
    } else if (a[2] === b[2] && b[2] === c[2] && a[2]){
        winner();
    } else if (a[0] && a[1] && a[2] && b[0] && b[1] && b[2] && c[0] && c[1] && c[2]) {
      draw();
    }
  };

  const playerChange = function() {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else if (currentPlayer === 2) {
      currentPlayer = 1;
    }
    playerCheck();
    console.log("Player's " + currentPlayer + " turn.");
  };

  const winner = function() {
    gameStatus = 0;
    gameRecord ++;
    if (currentPlayer === 1) {
      playerOneRecord ++;
      $('#one-won').text(playerOneRecord);
      $('#winner').text('Player 1 / ' + playerOneName + ' has won!');
    } else if (currentPlayer === 2) {
      playerTwoRecord ++;
      $('#two-won').text(playerTwoRecord);
      $('#winner').text('Player 2 / ' + playerTwoName + ' has won!');
    }
    $('#played').text(gameRecord);
    $('#winner').removeClass('none');
  };

  const draw = function() {
    gameStatus = 0;
    gameRecord ++;
    drawRecord ++;
    $('#played').text(gameRecord);
    $('#draws').text(drawRecord);
    $('#winner').text("Cat's Game / Draw");
    $('#winner').removeClass('none');
  };
});
