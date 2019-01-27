// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, k, v) {
  const newObj = { ...obj };
  newObj[k] = v;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
}

function deleteFromDriverByKey(obj, k) {
  const newObj = { ...obj };
  delete newObj[k];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, k) {
  delete obj[k];
  return obj;
}
