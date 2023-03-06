function frankenSplice(arr1, arr2, n) {
  let resultArr = [...arr2];
  for (let i=arr1.length -1; i>=0;i--){
    resultArr.splice(n, 0, arr1[i]);
  }
  return resultArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5,6], 1));