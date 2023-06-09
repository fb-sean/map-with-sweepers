"use strict";
const { AbstractMap } = require('../index');
const map = new AbstractMap({
    sweepInterval: 1000,
    sweepFilter: (key, value) => {
        return value !== 'bar';
    }
});
console.log('Adding 3 entries to the map');
map.set('foo', 'bar');
map.set('bar', 'baz');
map.set('baz', 'foo');
console.log(map.toString()); // foo,bar, bar,baz, baz,foo
setTimeout(() => {
    console.log('Deleting all entries where the key isn\'t "bar"');
    console.log(map.toString()); // foo,bar
    console.log('Testing done killing process.');
    process.exit(0);
}, 2000);
