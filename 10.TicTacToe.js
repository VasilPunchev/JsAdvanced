function TicTacToe(moves){
 const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = 'X';

  const printBoard = () => {
    board.forEach(row => console.log(row.join('\t')));
    
  };

  const hasWinner = (p) => {
   for(let r = 0; r < 3; r++){
    if (board[r][0] === p && board[r][1] === p && board[r][2] === p) return true;
   }
    for (let c = 0; c < 3; c++) {
      if (board[0][c] === p && board[1][c] === p && board[2][c] === p) return true;
    }
    if (board[0][0] === p && board[1][1] === p && board[2][2] === p) return true;
    if (board[0][2] === p && board[1][1] === p && board[2][0] === p) return true;

    return false;
  
  };
  const hasFree = () => board.some(row => row.some(x => x === false));

  for (let move of moves) {
    let [r, c] = move.split(' ').map(Number);

    if (board[r][c] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue; // същият играч играе пак
    }
     board[r][c] = player;

    if (hasWinner(player)) {
      console.log(`Player ${player} wins!`);
      printBoard();
      return;
    }

    if (!hasFree()) {
      console.log("The game ended! Nobody wins :(");
      printBoard();
      return;
    }

    player = player === 'X' ? 'O' : 'X';

  }


}
TicTacToe(["0 1", 

 "0 0", 

 "0 2", 

 "2 0", 

 "1 0", 

 "1 2", 

 "1 1", 

 "2 1", 

 "2 2", 

 "0 0"]);