const removeFromArray = function(a, b, ...theArgs) {
    let newArray = a;
    for ( i = 0; i < (newArray.length); i++){
        for (t = 1; t < arguments.length; t++)
          if ( newArray[i] == arguments[t]){
            newArray.splice(i,1);
            i--;
            
          }
        }
        return newArray;
}

module.exports = removeFromArray
