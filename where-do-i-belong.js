function getIndexToIns(arr, num) {
  let newArr = arr.sort(function(a, b){return a - b})
  let i;
  for (i= 0; i <newArr.length; i++){
    if(newArr[i] >= num) {
      return i
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));