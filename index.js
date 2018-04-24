var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  //return object with original key value pairs and new key value pair
  //doesn't modify original object
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates object w key and value --- destructive
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
