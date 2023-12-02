//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers

function order(words){
   let arr = words.split(' ')
     let r = []
   
     arr.forEach(word=>{
       let x = word.split('')
       let num = x.find(el=>parseInt(el))
       r.push([word,parseInt(num)]) 
     })
   
     r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
     return r.join(' ')
   }

   //Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

   var uniqueInOrder=function(iterable){
      const result = []
     
     for(let i = 0; i < iterable.length; i++){
       if(iterable[i] !== iterable[i + 1]){
         result.push(iterable[i])
       }
     }
     
     return result
   }

