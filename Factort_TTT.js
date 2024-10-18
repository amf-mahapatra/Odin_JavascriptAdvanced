const TicTacToe = (function FactoryTTT(){
  
      function checkWin (WinCombos, MySquares){
        let isWin = false;
        if(MySquares.length < 3){return false;}
        for(combo of WinCombos){
            for(square of combo){ 
                if(!MySquares.includes(square)){
                    isWin = false;
                    break;
                }
                isWin = true;
            }
            if(isWin){return isWin;}
        }
        return isWin;
    }
    
    function getFirst(){
        let turn = prompt('Who starts the game x or o?','x');
        while(!(turn === 'x' || turn === 'o')){
            turn = prompt(`${turn} is not a valid entry, please choose x or o.`,'x');
        }
        console.log(`Ok ${turn} goes first`);
        return turn;
    }

    function printBoard(gameSquares){
        return console.log(gameSquares[0] + '|' 
            + gameSquares[1] + '|'
            + gameSquares[2] + '\n'
            + gameSquares[3] + '|'
            + gameSquares[4] + '|'
            + gameSquares[5] + '\n'
            + gameSquares[6] + '|'
            + gameSquares[7] + '|'
            + gameSquares[8]    
        );
    }

    function assignGameSquare(selection, selectee, gameSquares){
        if(gameSquares.hasOwnProperty(selection) && gameSquares[selection] === '_'){
            gameSquares[selection] = selectee;
            return true;
        }else{return false;}
    }

    function getKeysByValue(obj, value) {
        return Object.keys(obj).filter(key => obj[key] === value).map(Number);
    }

    const playTicTacToe = function playTTT(){
        let turn = getFirst();
        let choice = 9;
        let turnSquares = [];
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
        const gameSquares = {0:'_', 1:'_', 2:'_', 3:'_', 4:'_', 5:'_', 6:'_', 7:'_', 8:'_'}
    
    
        while(Object.values(gameSquares).includes('_')){
            printBoard(gameSquares);
            choice = prompt(`${turn} please select open square 0 to 8`);
            if(assignGameSquare(choice, turn, gameSquares) ){
                turnSquares = getKeysByValue(gameSquares, turn);
                if(checkWin(winningCombinations, turnSquares)){
                    console.log(`${turn} wins!`);
                    printBoard(gameSquares);
                    return[true, turn];
                }
                if(turn === 'x'){
                    turn = 'o';
                }else{turn = 'x';}
    
            }else{console.log('invalid choice');}
    
            if(!(Object.values(gameSquares).includes('_'))){
                console.log('No winners, all squares taken.');
                printBoard(gameSquares);
                return [false, 'n'];
            }  
        }
      };
return {playTicTacToe};
})()