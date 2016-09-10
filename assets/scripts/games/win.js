'use strict';

const winArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ];

const indexCells = (data, marker) => {
  let indices = [];
  let array = data.cells;
  let element = marker;
  let idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  return indices;
};

const matchIndex = function(arrayName, variable){
  return (arrayName.indexOf(variable) !== -1);
};

const checkForWin = function (index) {
  console.log(index);
  for (let i=0; i < winArray.length; i++) {
    let a, b, c;
    a = index[winArray[i][0]];
    console.log(a);
    let matchA = matchIndex(index, a);
    console.log(matchA);
    b = index[winArray[i][1]];
    let matchB = matchIndex(index, b);
    c = index[winArray[i][2]];
    let matchC = matchIndex(index, c);
    console.log(matchA, matchB, matchC);

    if(matchA && matchB && matchC){
      console.log("win!!!");
      return true;
    } else {
    console.log("keep playing!");
    return false;
  }
}
};

module.exports = {
  indexCells,
  checkForWin,
};
