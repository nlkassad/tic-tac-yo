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

const checkForWin = function (index) {
//  if index is greater than 2
//  if i can find all value of a win condition in the array win is true
//  let array = [0,1,2];
  for (let i=0, max = winArray.length; i < max; i++) {
    let a, b, c;
    const matchIndex = function(arrayName, variable){
      return (arrayName.indexOf(variable) !== -1);
    };
    a = winArray[i][0];
    b = winArray[i][1];
    c = winArray[i][2];
    let checkA = matchIndex(index, a);
    let checkB = matchIndex(index, b);
    let checkC = matchIndex(index, c);

    if(checkA && checkB && checkC){
      return true;
    } else if (i < winArray.length) {
    } else {
    return false;
    }
  }
};


module.exports = {
  indexCells,
  checkForWin,
};
