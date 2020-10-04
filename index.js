require('colors');
console.log(
  `>>> App started at ${(new Date()).toTimeString()}`
  .cyan.underline.bold
);
console.log('loading core/web...');
require('./core/web');
console.log('...core/web loaded!');

