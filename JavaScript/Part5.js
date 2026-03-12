//1.
const diceroll=Math.floor(Math.random()*6)+1;
console.log("Dice rolled and got",diceroll);

//2.
const car={
  name:"Audi",
  model:"R8",
  color:"Red"
};
console.log("Car name is fetched",car.name);


//3.
const person={
  name:"Samrendra",
  age:78,
  city:"Delhi"
};
person.city="New York";
person.country="United States of America";
console.log(person);

const Person={};