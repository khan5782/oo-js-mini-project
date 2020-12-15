// Write your classes below this line


class Animal{
  constructor(name, age, sex, isFriendly = true, isAdopted = false){
    this.name =  name;
    this.age = age;
    this.sex = sex;
    this.isFriendly = isFriendly;
    this.isAdopted = isAdopted;
  }
  getAdopted(){
    this.isAdpoted = true;
    console.log(`${this.name} found their forever home!`);
  }
  changeName(newName){
    this.name = newName;
  } 
  getOlder(){
    this.age += 1;
    return `${this.name} is now ${this.age} years old.`;
  }
}

class Dog extends Animal{
  constructor(name, age, sex, isFriendly, isAdopted){
    super(name, age, sex, isFriendly, isAdopted);
    this.numOfTimesTakenOnWalk = 0;
    this.listOfFreinds = [];
    this.commandLearned = [];

  }
  takeOnWalk(){
    this.numOfTimesTakenOnWalk += 1;
    return `You took ${this.name} on a walk.`;
  }
  learnCommand(command){
    this.commandLearned.push(command);
    return `${this.name} learned ${command}.`;
  }
  runAround(){
    return `${this.name} is running all over the place.`;
  }
  madeAFriend(name){
    this.listOfFreinds.push(name);
    return `${this.name} has ${this.listOfFreinds.length} friend(s).`;
  }

}
class Cat extends Animal{
  constructor(name, age, sex, isFriendly, isAdopted){
	  super(name, age, sex, isFriendly, isAdopted);
	  this.kittyKittyFriends = [];
	  this.numOfMiceCaught = 0;
  }
   madeAFriend(name){
    this.kittyKittyFriends.push(name);
    return `${this.name} has ${this.kittyKittyFriends.length} friend(s).`;
  }
  playWithStrings(){
	  return `${this.name} is playing with strings.`;
  }
  groomSelf(){
    return `${this.name} is licking themself.`;
  };
  catchMice(){
    this.numOfMiceCaught += 1;
    return `${this.name} caught ${this.numOfMiceCaught} mice`;
  }
    
}
const sparky = new Dog ("Sparky", 1, "female");
const tom = new Cat ('Tom', 3, 'male');
const kitty = new Cat('Kitty', 4, 'female')






// Write your data (instances and method calls) below this line
console.log("Welcome to <<app name here>>!")
