function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i")
  let result =  re.test(str);
  return result;
}
console.log(confirmEnding("Bastian", "n"));