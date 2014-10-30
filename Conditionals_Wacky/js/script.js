//Michael Jones
//August 21, 2014
//Assignment: Conditionals - Wacky

//If its between 8am - 12pm, ATM machine greets Good Morning plus your name
//If its after 12am, midday ATM machine greets Good Evening plus your name

var name = prompt("Enter Your first name");
var morning = 12; //time is 12pm
var evening = 13; // time is 1pm
if (morning < evening){
    //print the morning greeting
    greeting = "Good Morning";
    console.log(greeting + name);
}else{
    greeting = "Good evening";
    //print the evening greeting
    console.log(greeting + name);
}
