//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b > c && a + c > b && c + b > a) return true;
  else return false;
}

//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let splitStr = string.split("");
  let newStr = string.split("");
  let capStr = string.toUpperCase().split("");
  for (i = splitStr.length - 1; i >= 0; i--) {
    if (splitStr[i] === capStr[i]) {
      newStr.splice(i, 0, ' ');
    }
  }
  return newStr.join("");
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
      return length * width * height
  }
}
