class Shelter{
  constructor(animalsInShelter = [],petsAdopted, catFood = 100, dogFood = 100, person = [], employee = []){
    this.animalsInShelter = animalsInShelter;
    this.petsAdopted = petsAdopted;
    this.catFood = catFood;
    this.dogFood = dogFood;
    this.person = person;
    this.employee = employee; 

  }
  countCatFood(num){
    this.catFood -= num;
    return `The amount of cat food that is left is: ${this.catFood}`;
  }
  countDogFood(num){
    this.dogFood -= num;
    return `The amount of cat food that is left is: ${this.dogFood}`;
  }
  petsIsAdopted(){
    if(this.isAdopted === true){
      return `${this.name} is already adopted.`;
    }
    else {
      return `${this.name} has not been adopted yet. Would you like to adopted ${this.name}?`;
    }
  }
}


class Animal extends Shelter{
  constructor(petName, age, sex, isFriendly = true, isAdopted = false, friendsList = [], animalsInShelter = [],petsAdopted, catFood = 100, dogFood = 100, person = [], employee = []){
    super(animalsInShelter = [],petsAdopted, catFood = 100, dogFood = 100, person = [], employee = [])
    this.petName =  petName;
    this.age = age;
    this.sex = sex;
    this.isFriendly = isFriendly;
    this.friendsList = friendsList
    this.isAdopted = isAdopted;
  }
  getAdopted(){
    this.isAdpoted = true;
    console.log(`${this.petName} found their forever home!`);
  }
  changeName(newName){
    this.petName = newName;
  } 
  getOlder(){
    this.age += 1;
    return `${this.petName} is now ${this.age} years old.`;
  }
   madeAFriend(petName){
    this.friendsList.push(petName);
    return `${this.petName} has ${this.friendsList.length} friend(s).`;
  }
  // add a method to add animals to the shelter
  addAnimals(str){
    return this.animalsInShelter.push(str); 
  }
}

class Dog extends Animal{
  constructor(petName, age, sex, isFriendly, isAdopted){
    super(petName, age, sex, isFriendly, isAdopted);
    this.numOfTimesTakenOnWalk = 0;
    this.commandLearned = [];

  }
  takeOnWalk(){
    this.numOfTimesTakenOnWalk += 1;
    return `You took ${this.petName} on a walk.`;
  }
  learnCommand(command){
    this.commandLearned.push(command);
    return `${this.petName} learned ${command}.`;
  }
  runAround(){
    return `${this.petName} is running all over the place.`;
  }

}
class Cat extends Animal{
  constructor(petName, age, sex, isFriendly, isAdopted){
	  super(petName, age, sex, isFriendly, isAdopted);
	  this.numOfMiceCaught = 0;
  }
  playWithStrings(){
	  return `${this.petName} is playing with strings.`;
  }
  groomSelf(){
    return `${this.petName} is licking themself.`;
  };
  catchMice(){
    this.numOfMiceCaught += 1;
    return `${this.petName} caught ${this.numOfMiceCaught} mice`;
  }
    
}

class Person extends Shelter{
  constructor(name, isEmployee, isVoulenteer){
    this.name = name;
    this.isEmployee = isEmployee;
    this.isVoulenteer = isVoulenteer; 
  }
  employed(name){
    if (this.isEmployee === true){
      this.employee.push(name)
      return`${this.name} is a full time worker.`
    } else if (this.isVoulenteer === true) {
      return`${this.name} is a voulenterr.`
    } else {
      return `${this.name} is a visitor.`
    }
    }
  decidedToVolunteer(){
    this.isVoulenteer = true;
    return `${this.name} has decided to volunteer.`
  }
  }

// Write your data (instances and method calls) below this line
console.log("Welcome to <<app name here>>!")
let cat = new Person ("Catalina", true, false)
let asif = new Person ("Asif", false, false)
let rabia = new Person ("Rabia", false, true)


const sparky = new Dog ("Sparky", 1, "female");
const tom = new Cat ('Tom', 3, 'male');
const kitty = new Cat('Kitty', 4, 'female');

console.log(kitty.addAnimals("kitty"));
