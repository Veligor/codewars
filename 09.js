//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = [];
  let o = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x.push(str[i]);
    } else if (str[i].toLowerCase() === "o") {
      o.push(str[i]);
    }
  }

  if (x.length == o.length) {
    return true;
  } else {
    return false;
  }
}
//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
   return [Math.min(...arr), Math.max(...arr)];
  }