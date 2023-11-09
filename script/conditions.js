let yourName
if(confirm("Are you " + yourName + "?")){
	console.log("Hello " + yourName);
}else{
	console.log("Then what is your name?");
}

let number = 99;
if(number == 99){
    console.log("let nujmer is correct")
}else{
    console.log("The number is not correct?")
}


//Simulation: password stored on DB
// let password="Test1234"

//user input
let password= "Test1234";

let userInput=prompt("enter the passwrod:)");

if(password==userInput){
    console.log("Welcome to the system");
}else{
    console.log("invalad credentials");
}