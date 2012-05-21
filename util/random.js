/*
* Exposed function
*/
function getRandomSeries (number){
  var holding = [];
  var randoms = [];

  if (number < 0) {
    for (var i = -1; i >= number; i--){
      holding.push(i);
    }
  }
  else {
    for (var i = 1; i <= number; i++){
      holding.push(i);
    }
  }

  while (holding.length !== 0){
    var index = Math.floor(Math.random() * holding.length);
    
    randoms.push(holding[index]);
    holding.splice(index, 1);
  }

  return randoms;
}

/*
* 'Private' function
*/
function sayHi () {
  console.log('hi');
}

module.exports = {
  getRandomSeries: getRandomSeries
}