var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  //return object with original key value pairs and new key value pair 
  return Object.assign({}, object, {[key]: value})
  
  
}