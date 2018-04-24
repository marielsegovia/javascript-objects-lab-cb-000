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

function deleteFromObjectByKey(object, key){
  //deletes key from a clone of object and returns the new object
  //non-destructively--- doesn't modify original
  var newObject = Object.assign({}, object)
  newObject
  delete newObject.key
  newObject
}
