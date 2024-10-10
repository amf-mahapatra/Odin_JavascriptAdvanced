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

/*//call this for each combination
function checkCombo(checkSquares, combo){
    for(square of combo){
        if(!checkSquares.includes(square)){
            return false;
        }
    }
    return true;
}
//This is a prelim function for testing
function checkForWin2(checkSquares, winningCombos){
    for(combo of winningCombos){
        if(checkCombo(checkSquares, combo)){
            return true;
        }
    }
    return false
}*/

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

function testCkWin(WinCombos, MySquares, strSquares, expectation){
    let result = false;
    let testStatus = false;
    for(i=0; i<MySquares.length; i++){
        result = checkWin (WinCombos, MySquares[i]);
        testStatus =(expectation === result);
        console.log('Testing ' + strSquares[i] + ' returns: ' + result + ' expected result?: ' + testStatus);        
    }
    return 'Test Complete'
}

const winners = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],[3, 2, 9, 4, 5], [7,0, 3, 6], [6, 7, 5, 4, 8]];
const strWinners = ['[0, 1, 2]','[3, 4, 5]','[6, 7, 8]','[0, 3, 6]','[1, 4, 7]','[2, 5, 8]','[0, 4, 8]','[2, 4, 6]','[3, 2, 9, 4, 5]', '[7,0, 3, 6]', '[6, 7, 5, 4, 8]'];
const losers = [[6,2,0],[6,5,1],[0,1],[0,2],[1,2],[0,1,8],[0,1,7],[3,4,2],[7,8,0],[0,6,8,2],[0,1,3,4],[1,4,5,8],[0,6,1,7,5]];
const strLosers = ['[6,2,0]','[6,5,1]','[0,1]','[0,2]','[1,2]','[0,1,8]','[0,1,7]','[3,4,2]','[7,8,0]','[0,6,8,2]','[0,1,3,4]','[1,4,5,8]','[0,6,1,7,5]'];

testCkWin(winningCombinations, winners, strWinners, true);
testCkWin(winningCombinations, losers, strLosers, false);

const gameSquares = {0:'_', 1:'_', 2:'_', 3:'_', 4:'_', 5:'_', 6:'_', 7:'_', 8:'_'}

// check if value is in object (check if 'C' is in squares) = Object.values(squares).includes('C')

//gets who takes the first move
function getFirst(){
    let turn = prompt('Who starts the game x or o?','x');
    while(!(turn === 'x' || turn === 'o')){
        turn = prompt(`${turn} is not a valid entry, please choose x or o.`,'x');
    }
    console.log(`Ok ${turn} goes first`);
    return turn;
}