#!/usr/local/bin/env node
var fs = require('fs');
var clear = require('clear');
clear();
var board = require('./board.json').board;
var player = require('./board.json').player;
var counter = require('./board.json').counter;

var mark;
if (player === 'player 1') {
  mark = '__x__';
} else {
  mark = '__o__';
}

var newEntry = process.argv.slice(2).join();

if (newEntry === 'newGame') {
  var game = {
    "counter": 0,
    "player": "player1",
    "board":
    [
      ["_____ | _____ | _____"],
      ["_____ | _____ | _____"],
      ["_____ | _____ | _____"]
    ]
  }

  fs.writeFile('./board.json', JSON.stringify(game), (err, data) => {
    clear();
    console.log('Current player', player);
    console.log(board);
  })
}

if (newEntry[0] === 'u') {
  row = board[0][0].split('|');
  if (newEntry[1] === 'l') {
    row[0] = mark;
  } else if (newEntry[1] === 'm') {
    row[1] = mark;
  } else if (newEntry[1] === 'r') {
    row[2] = mark;
  }
  board[0][0] = row.join('|');

  if (player === 'player 1') {
    player = 'player 2';
  } else {
    player = 'player 1';
  }

  game = {
    counter: counter,
    player: player,
    board: board
  }

  fs.writeFile('./board.json', JSON.stringify(game), () => {
    counter++;
    console.log('Current player', player);
    console.log(board);
  });
} else if (newEntry[0] === 'm') {
  row = board[1][0].split('|');
  if (newEntry[1] === 'l') {
    row[0] = mark;
  } else if (newEntry[1] === 'm') {
    row[1] = mark;
  } else if (newEntry[1] === 'r') {
    row[2] = mark;
  }
  board[1][0] = row.join('|');

  if (player === 'player 1') {
    player = 'player 2';
  } else {
    player = 'player 1';
  }

  game = {
    counter: counter,
    player: player,
    board: board
  }

  fs.writeFile('./board.json', JSON.stringify(game), () => {
    counter++;
    console.log('player', player);
    console.log(board);
  });
} else if (newEntry[0] === 'b') {
  row = board[2][0].split('|');
  if (newEntry[1] === 'l') {
    row[0] = mark;
  } else if (newEntry[1] === 'm') {
    row[1] = mark;
  } else if (newEntry[1] === 'r') {
    row[2] = mark;
  }
  board[2][0] = row.join('|');

  if (player === 'player 1') {
    player = 'player 2';
  } else {
    player = 'player 1';
  }

  game = {
    counter: counter,
    player: player,
    board: board
  }

  fs.writeFile('./board.json', JSON.stringify(game), () => {
    counter++;
    console.log('player', player);
    console.log(board);
  });
}
