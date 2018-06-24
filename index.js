'use strict'

const isObject = (testObj) => {
  return (typeof testObj === "object" && !Array.isArray(testObj) && !!Object.keys(testObj)[0]);
};
const objinout = (objekt) => {
  if (!isObject(objekt)) return objekt;
  let inoutObj = {};
  let obj = JSON.parse(JSON.stringify(objekt));
  let outKeys = Object.getOwnPropertyNames(obj);  // besser als Object.keys (enthielt früher z.B. Object.isObject)
  let inKeys;
  outKeys.forEach(outKey => {
    if (!isObject(obj[outKey]) && !Array.isArray(obj[outKey])) {  // primitiver Wert
      inoutObj[String(obj[outKey])] = outKey;
      return;
    }
    inKeys = Object.getOwnPropertyNames(obj[outKey]);
    inKeys.forEach(inKey => {
      inoutObj[inKey] = inoutObj[inKey] || {};
      if (obj[outKey][inKey] !== undefined) {
        inoutObj[inKey][outKey] = obj[outKey][inKey];
      }
    });
  });
  return inoutObj;
};
module.exports = objinout;