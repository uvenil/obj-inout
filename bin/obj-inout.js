#!/usr/bin/env node
// Call: obj-inout --obj {\"id1\":{\"ida\":10}\,\"id2\":{\"ida\":20}}
// doesn work: obj-inout --obj {"id1":{"ida":10}\,"id2":{"ida":20}}

const argv = require('yargs').argv;
const objinout = require('../index.js');

const obj = JSON.parse(argv.obj);
const inout = objinout(typeof obj === 'object' ? obj : undefined)

console.log("object:", obj);
console.log("inout:", inout);

// console.log(`Str inout: ${JSON.stringify(inout)}`);
// console.log( objinout(typeof obj === 'object' ? obj : undefined) );