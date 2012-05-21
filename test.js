var assert = require('assert');
var random = require('./util/random');

var series = random.getRandomSeries(5);
var negativeSeries = random.getRandomSeries(-5);

// Should pass, assert that there are n elements in returned array
assert.equal(5, series.length);
console.log('\u2714 Passed Length Test');

// Should pass, assert that the integers 1..5 are in the array
assert.ok(series.indexOf(1) !== -1);
assert.ok(series.indexOf(2) !== -1);
assert.ok(series.indexOf(3) !== -1);
assert.ok(series.indexOf(4) !== -1);
assert.ok(series.indexOf(5) !== -1);
console.log('\u2714 Passed Element Test');

// Should pass, assert that the integers -1..-5 are in the array
assert.ok(negativeSeries.indexOf(-1) !== -1);
assert.ok(negativeSeries.indexOf(-2) !== -1);
assert.ok(negativeSeries.indexOf(-3) !== -1);
assert.ok(negativeSeries.indexOf(-4) !== -1);
assert.ok(negativeSeries.indexOf(-5) !== -1);
console.log('\u2714 Passed Negative Element Test');