// Write your solution in this file!
const driver =  {


};

//  The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.

// returns an driver with the original key value pairs and the new key value pair

function updateDriverWithKeyAndValue(driver, key, value){


  return Object.assign({}, driver, { [key]: value });


  // driver.assign( key,...driver);
}
//
// but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

  driver[key] = value;
  return driver;

}

function deleteFromDriverByKey(driver, key){
const newDriver = { ...driver};

  delete newDriver[key];
  return newDriver;

}


function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver[key];
  return driver;
}
