
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chained  = integers.sort(function (a, b) {  return b - a;  }).filter(function(int) { return int > 19; }).reduce(function(previousValue, currentValue, currentIndex) { if(currentIndex === 1) { previousValue = (previousValue * 1.5) - 1; } currentValue = (currentValue * 1.5) - 1; return previousValue + currentValue; });
console.log(chained);




