function findLongestWordLength(str) {
  let longStr = 0;
  let arr = str.split(" ")
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length >= longStr){
      longStr = arr[i].length;
    }

  }
  return longStr;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));