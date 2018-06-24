# obj-inout Module

const objinout = require('obj-inout');

Exchanges the keys between the inner and outer object.

Example: 
'{ "id1": { "ida": 10 }, "id2": { "ida": 20 } }  <->  { "ida": { "id1": 10, "id2": 20 } }'