// Write your solution in this file!

let driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {address : value});
};
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
};
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
function deleteFromDriverByKey(driver, key){
  let driverClone = Object.assign({}, driver);
  delete driverClone[key];
  return driverClone;
}
