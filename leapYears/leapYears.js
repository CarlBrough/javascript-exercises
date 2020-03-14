const leapYears = function(testYear) {
    let answer = false;
    if ( testYear % 4 === 0 &&( testYear % 100 !== 0 || testYear % 400 === 0 )){
     answer = true;

}
return answer;
}

module.exports = leapYears
