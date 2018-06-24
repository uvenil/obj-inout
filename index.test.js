const objinout = require('./index.js');

console.log('Starting tests');

const obj = {
  "id1": { "ida": 10 }, "id2": { "ida": 20 }
};
const erg = {
  "ida": { "id1": 10, "id2": 20 }
};

console.log(`obj: ${JSON.stringify(obj)}`);

const resOne = objinout(obj);
if (JSON.stringify(resOne) !== JSON.stringify(erg)) {
  throw new Error('obj-inout funktioniert nicht mit Objekt!');
} else {
  console.log('obj-inout mit Objekt ok');
};

console.log('End tests');
