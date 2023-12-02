//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  var newString = "";
  for( i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}
//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
    array.reverse()
  return array
};
//You will be given a number and you will need to return it as a string in Expanded Form. 
function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1){
    var remainder = num%multiple;
    if(remainder >0){
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}