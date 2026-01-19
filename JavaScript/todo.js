let todo=[]
let request=prompt("Enter your request.");

while(true){
  if(request==="quit"){
    console.log("quitting app");
    break;
  }
  if(request==="list"){
    console.log("------------------");
    for(task of todo){
      console.log(task);
    }
    console.log("-------------------");
  }else if(request==="add"){
    let task=prompt("please enter your task.");
    todo.push(task);
    console.log(task);
  }
}