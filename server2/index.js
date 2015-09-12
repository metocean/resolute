// Generated by CoffeeScript 1.9.2
var cuid, out, publish;

cuid = require('cuid');

publish = require('../src/publish');

out = publish();

out.connect('one', ['tcp://127.0.0.1:12345']);

out.connect('two', ['tcp://127.0.0.1:12346']);

out.publish(cuid(), 'Hello 1', ['one']);

out.publish(cuid(), 'Hello 2', ['one', 'two']);

out.publish(cuid(), 'Hello 3', ['two']);