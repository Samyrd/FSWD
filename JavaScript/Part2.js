/*
//1.
let num=123;
if(num%10==0){
  console.log("Number is divisible by 10.");
}
else{
  console.log("Number is not divisible by 10.");
}

*/

/*
//2.
let name=prompt("Enter your your name");
let age =prompt("Enter your age");
let message=`${name} is ${age}+ years old.`;
alert(message);
*/

/*
//3.
let quarter=1;

switch(quarter){
  case 1: console.log("Jan,Feb,March");
    break;
  case 2: console.log("April,May,June");
    break;
  case 3: console.log("July,August,September");
    break;
  case 4: console.log("October,November,December");
    break;
  default:
    console.log("This is not present in the quarter of an year.");

}

*/

 


/*
//4. 
if((string[0]==='A' || string[0]==='a') && (string.length>5)){
  console.log("String is a Golden String.");
}
else{
  console.log("Not a golden string.");
}

*/


/*
//5.
let a=5;
let b=10;
let c=12;

if(a>b){
  if(a>c){
    console.log("a is the largest of all.");
  }
  else{
    console.log("c is the largest.");
  }
}
else{
  if(b>c){
    console.log("b is the largest.");
  }
  else{
    console.log("C is the largest.");
  }

}

*/

//6.
let num1=prompt("Enter num1");
let num2=prompt("Enter num2");

if(num1%10===2 && num2%10===2){
  console.log("Both number ends with digit 2.");
}
else{
  console.log("Both number don't have last digit as 2.");
}