function largestOfFour(arr) {
  let largeNum = 0;
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j= 0; j < arr[i].length; j++){
      if (arr[i][j] > largeNum) {
        largeNum = arr[i][j]
        if (arr[i].indexOf(largeNum) > -1) {
          arrNew = [...arr[i]];
        } 
      }
    }
  }
  return arrNew;
}

console.log(largestOfFour([[45, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));