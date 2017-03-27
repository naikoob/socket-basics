var moment = require('moment');
var now = moment();

//now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a'));  // Mar 27th 2017, 6:45 pm
// console.log(now.format('X'));
// console.log(now.valueOf());

var timestamp = 1490593861524;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));
