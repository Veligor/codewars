//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.

function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
// There is a bus moving in the city which takes and drops some people at each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative. The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

let numberTwo = function (busStops) {
  let totalEntries = 0;
  let totalDowns = 0;

  busStops.map((arr) => {
    totalEntries += arr[0];
    totalDowns += arr[1];
  });

  return totalEntries - totalDowns;
};
let number = function (busStops) {
  let totalEntries = 0;
  let totalDowns = 0;

  for (let i = 0; i < busStops.length; i++) {
    totalEntries += busStops[i][0];
    totalDowns += busStops[i][1];
  }

  return totalEntries - totalDowns;
};


function numberToString(num) {
  return num.toString();
}
// перевод числа в строку

function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    } else {
      0;
    }
  }
  return result;
}
//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  }
}

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let sum = [];
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) <= 4) {
      sum.push("0");
    } else {
      sum.push("1");
    }
  }
  return sum.join("");
}

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers  as input, and return the largest and lowest number in that list, respectively.

let min = function (list) {
  return Math.min(...list);
};

let max = function (list) {
  return Math.max(...list);
};

//Write a function which calculates the average of the numbers in a given list.
//Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let quantity = sum / array.length;

    return quantity;
  }
}

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length;
}
