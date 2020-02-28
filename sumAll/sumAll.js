const sumAll = function(firstNumber, secondNumber) {
    let total = 0;
    let problem = "ERROR";
    if (firstNumber < 0 || secondNumber < 0 || 
    typeof firstNumber === "string" || typeof secondNumber === "string" || 
    Array.isArray(firstNumber) || Array.isArray(secondNumber) ){
      
      return(problem);
    }
    if (firstNumber < secondNumber){
      for (i = firstNumber; i <= secondNumber; i++ ) {
        total = total + i;
      }
    }
    else {
      for (i = secondNumber; i <= firstNumber; i++ ){
        total = total + i;
      }

      }
      return(total);
}

module.exports = sumAll
