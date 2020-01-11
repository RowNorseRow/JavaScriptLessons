//Intro to Objects
function exerciseOne(){
// Exercise One: In this exercise you will create a variable called 'aboutMe'
// This variable should be assigned a new object
// In this object create three key:value pairs
// The keys should be: 'name', 'city', 'favoriteAnimal'
// The values should be strings associated with the keys.
// return the variable 'aboutMe'
  let aboutMe = {
    name: 'Allen',
    city: 'Fayetteville',
    favoriteAnimal: 'Wolf'
  };
  return aboutMe;
}

function exerciseTwo(animal){
// Exercise Two: In this exercise you will be given an object called 'animal'
// Create a new variable called 'animalName'
// Accessing the animal object, assign the 'animalName' variable to the 'latinName' key on the object.
// return the animalName variable.
  let animalName = animal.latinName;
  return animalName;
}

function exerciseThree(userObject){
// Exercise Three: In this exercise you will be given an object called 'userObject'
// The phonne number for this user is incorrect!
// reassign the 'phoneNumber' key to the value: '(951)867-5309'
// return the userObject
  userObject.phoneNumber = '(951)867-5309';
  return userObject;
}
