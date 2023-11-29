//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return(-number);
}

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task Given a year, return the century it is in

function century(year) {
  let centuryCount = 0;
  while (year > 0){
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}

//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('');  
}

//You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  let somme = 0;
  for (i = 0; i<x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}