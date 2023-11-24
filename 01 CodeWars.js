string_to_array = function (str) {
  return str.trim().split(" ");
};
// Перевод строки в массив

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

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// Это работает, потому что использует математическую формулу, которую придумал Карл Фридрих Гаусс . (у этого отличное изображение).
// По сути, всякий раз, когда вы складываете сумму n чисел, в последовательности будут пары. Итак, Гаусс понял, что вам не нужно перебирать каждую пару и складывать их, вместо этого вам просто нужно добавить среднюю пару и умножить эту сумму на общее количество пар. Это очень хорошо работает для программирования, потому что они не перебирают каждое число, которое при программировании съедает ваши ресурсы.
// Вы можете найти количество пар, разделив n/2, и это также даст вам среднее число, после которого вы просто прибавите 1, чтобы найти его пару.
// Допустим, вы получаете сумму от 1 до 100. Применяя подход Гаусса, вы хотите, чтобы 50 (101) = 5050. 50 — это количество пар, а в коде оно представлено как n *и 101 — это сложение средней пары (50+51) или в коде (n+1), затем, наконец, мы делим на 2 среднее число.

let summation = function (num) {
  return (res = (num * (num + 1)) / 2);
};
