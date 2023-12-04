//Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
   let positiveNums = 0;
     let negativeNums = 0;
     if (input === null || input.length === 0) {
       return [];
     } else {
       input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
     }
     return [positiveNums , negativeNums];
 }

 //Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

 function getGrade (s1, s2, s3) {
  var score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
      return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70&& score < 80) {
    return 'C';
  } else if (score >= 60  && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  if (strarr.length==0 || k>strarr.length || k<=0){
 return "";
}else{
   var list =[];
   for (var i=0;i<strarr.length-k+1;i++)
     {
       list[i]=strarr.slice(i,k+i).join('');
      }

   var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
   return longest;
}
}