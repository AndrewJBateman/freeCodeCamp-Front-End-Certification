/*Algorithm challenge: Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not necessarily be 
in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
that is evenly divisible by all numbers between 1 and 3.*/

// noprotect
function smallestCommons(arr) {
  //get min and max values from array
  //initialise Smallest Common Multiple SCM and condition
  //increment SCM and keep iterating, breaking after each array value condition satisfied
  //Once found exit loop and return SCM
  var min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]),
      range = [],
      SCM = 0, //SCM = Smallest Common Multiple
      cond = true; 
  
  for (var i= min; i<=max; i++){ //place in ascending size order 
    range.push(i); 
  }
    
  while (cond){
    SCM++;
    for (var j=min; j<=max; j++){
      if (SCM % j !== 0){ //goes through all numbers from min to max and breaks
        //console.log(SCM); //as soon as SCM reaches a value where it leaves a remainder
        break;            
      }
      else if (j === max){
        cond = false;
      } // end of else
    } // end of for
  } // end of while
  return SCM;
} // end of function

//check solution:
var result = smallestCommons([1,5]);
console.log(result); //returns 60
var result = smallestCommons([5, 1]);
console.log(result); //returns 60
var result = smallestCommons([1, 13]);
console.log(result); //returns 360360
var result = smallestCommons([23, 18]);
console.log(result); //returns 6056820