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
// win numbers
// 0 => 1 => 2, 3 => 6, 4 =>8
// 1 => 4 => 7
// 2 => 4 => 6, 5 => 8
// 3 => 4 => 5
// 6 => 7 => 8


const indexCells = (data, marker) => {
  let indices = [];
  let array = data.cells;
  console.log(data.cells);
  let element = marker;
  console.log(element);
  let idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  return indices;
};
// test
// var arr = [
//     ["202",27,44],
//     ["202",194,35],
//     ["200",233,344],
//     ["190",333,444],
// ];

// function myFilter(query) {
//   return arr.filter(function(item){
//     return query.indexOf(item[0]) >= 0;
//   })
// }

// var q = [["190",222],["200",344]];
// var keys = q.map(function(inner){
//   return inner[0];
// });

//alert(myFilter(keys));
// end test
const matchIndex = function(arrayName, variable){
  return (arrayName.indexOf(variable) !== -1); 
};

const checkForWin = function (index) {
//  if index is greater than 2
//  if i can find all value of a win condition in the array win is true
//  let array = [0,1,2];
  console.log(index);
  for (let i=0; i < winArray.length; i++) {
    let a, b, c;
    //these varaibles become what the board is holding 'x', 'o', or 0
    a = index[winArray[i][0]];
    console.log(a);
    b = index[winArray[i][1]];
    c = index[winArray[i][2]];

    if(matchIndex(index, a) && matchIndex(index, b) && matchIndex(index, b)){
      console.log("win!!!");
    } else {
    console.log("keep playing!");
  }
}
//  arr.filter(function(item){return ["190","200"].indexOf(item[0])>=0})


  // index.forEach(function (item, index) {
  //   console.log(item, index);
  // });
  // for(let i = 0, max = array.length; i < max; i++) {
  //   if($.inArray(array[i], index) === -1)  {
  //     console.log("continue");
  //   } else {
  //     console.log("win");
  //   }
  // }
};

// function containsAll(needles, haystack){
//   for(var i = 0 , len = needles.length; i < len; i++){
//      if($.inArray(needles[i], haystack) == -1) return false;
//   }
//   return true;
// }


module.exports = {
  indexCells,
  checkForWin,
};


// const testWinning = (board){
//   for(var i=0 max=board.length; i < max; i++){
//     var a, b, c;
//     //these varaibles become what the board is holding 'x', 'o', or 0
//     a = board[wins[i][0]];
//     b = board[wins[i][1]];
//     c = board[wins[i][2]];
//
//     if(a == b && a == c && a != 0){
//       return a;
//     }
//   }
//   return false;
// }
