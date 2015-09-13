// Generated by CoffeeScript 1.9.2
var Bus, bus;

Bus = require('./bus');

bus = Bus({
  bind: process.argv[2],
  datadir: process.argv[3]
});

setInterval(function() {
  console.log('CLOUDY');
  return bus.publish('weather update', 'CLOUDY');
}, 1000);

process.on('SIGINT', function() {
  bus.close();
  return process.exit(0);
});
