const repeatString = function(word, repeatValue) {
        if (repeatValue < 0) return "ERROR";
        let newString = "";
        for (let i = 0; i < repeatValue; i++){
          newString = newString + word;
        }
        return newString;
      }


module.exports = repeatString
