#!/usr/bin/env node

var program = require('commander');
var random = require('./util/random');

program
  .version('0.0.1')
  .parse(process.argv);

program.prompt('Enter a number: ', Number, function(number){

  var randoms = random.getRandomSeries(number);

  console.log('You\'re Random Numbers Are: %j', randoms);  

  process.stdin.destroy();
});