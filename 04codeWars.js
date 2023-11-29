//  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}

//There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  var classAvg = 0;
for (var i = 0; i < classPoints.length; i++){
  classAvg += classPoints[i]; 
}
classAvg = classAvg/classPoints.length; 
return yourPoints > classAvg;
}


//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number * (number % 2 > 0 ? 9 : 8)
  //return n % 2 == 0 ? n * 8 : n * 9
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
  return words.join(" ")
};

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {
	return n * n * n;
}