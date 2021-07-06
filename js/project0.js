


$(document).ready(function() {






});

let currentPlayer = 1;

// Maybe an object for 2 players and their selected symbols?

const tictac = {
  a: ["x","",""],
  b: ["","x",""],
  c: ["x","x",""]
};

const game = function() {
  const a = tictac.a;
  const b = tictac.b;
  const c = tictac.c;

  // horizontal
  // if a[0] = a[1] = a[2] WIN
  // if b[0] = b[1] = b[2] WIN
  // if c[0] = c[1] = c[2] WIN
  if (a[0] === a[1] && a[1] === a[2] && a[0]){
    winner();
  }
  if (b[0] === b[1] && b[1] === b[2] && b[0]){
    winner();
  }
  if (c[0] === c[1] && c[1] === c[2] && c[0]){
    winner();
  }
  // diagonal
  // if a[0] = b[1] = c[2] WIN
  // if c[0] = b[1] = a[2] WIN
  if (a[0] === b[1] && b[1] === c[2] && a[0]){
    winner();
  }
  if (c[0] === b[1] && b[1] === a[2] && c[0]){
    winner();
  }
  // vertical
  // if a[0] = b[0] = c[0] WIN
  // if a[1] = b[1] = c[1] WIN
  // if a[2] = b[2] = c[2] WIN
  if (a[0] === b[0] && b[0] === c[0] && a[0]){
      winner();
  }
  if (a[1] === b[1] && b[1] === c[1] && a[1]){
      winner();
  }
  if (a[2] === b[2] && b[2] === c[2] && a[2]){
      winner();
  }

}




const winner = function() {
  console.log("Player " + currentPlayer + " is the winner!")
};


// console.log(tictac.a[1]);
game();
