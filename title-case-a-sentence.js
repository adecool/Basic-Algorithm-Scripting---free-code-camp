function titleCase(str) {
  let arrStr = str.split(" ");
  for (let i =0; i < arrStr.length; i++) {
    arrStr[i] =arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1).toLowerCase();
  }
  return arrStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));