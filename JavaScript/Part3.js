//1.
let arr=[1,2,3,4,5,6];
let n=5;
let ans=arr.splice(0,n);
console.log(ans);

//2.
let arr=[1,2,3,4];
let n=3;
let ans=arr.splice(arr.length-n);
console.log(ans);

//3.
let str=prompt("Enter a string");
if(str.length==0){
  console.log("String is empty");
}
else{
  console.log("String is not empty");
}

//4.
//5.
let str=prompt("Enter a string with whitespaces in it.");
console.log(str.trim());
