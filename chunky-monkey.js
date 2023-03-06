function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i=0; i< arr.length; i+size) {
    newArr.push(arr.splice(0,size))
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));