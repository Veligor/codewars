// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings

function areYouPlayingBanjo(name) {
  if(name[0].toLowerCase() === "r") {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
 }
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

 let first = Math.min(...numbers)
  numbers.splice(numbers.indexOf(first), 1)
  let second = Math.min(...numbers)
  return first + second

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

  function countSheep (num){
  let ord = "";
  for(let i = 1; i < num; i++) {
    ord += `${i} sheep... `
  }
 return ord
}

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  var result = str.split(' ').map(function (item) {
     return item.split('').reverse().join('');
 }).join(' ');
     return result
 }