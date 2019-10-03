const toRegexRange = require('to-regex-range');
var postcodesList = require('./postcodes.js');
var postcodes = postcodesList.postcodes()

for (var n in postcodes) {
  var low = postcodes[n][0];
  var high = postcodes[n][1];
  var regex = toRegexRange(low, high);
  console.log(regex)
}
