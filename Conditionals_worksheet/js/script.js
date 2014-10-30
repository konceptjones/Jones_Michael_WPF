//Michael Jones
//August 21, 2014
//Assignment: Conditional_worksheet


//Strawberry Festival's Pie Eating Contest Requirement.
var Maxweight = 250; 
var MinWeight = 249; 

//must meet heavy weight requirement to enter the competition then print to console "weight approved!"
//if under at the minimum weight or under print to console "Qualification denied weight not met!"
if(Maxweight > MinWeight){
    //weight approved!
    console.log("Weight approved!");
}else{
   console.log("Qualification denied weight not met!");
}


//Last Chance for Gas!

var CarEfficiency = 21; //MPG for the Car
var gaugeReading = 60;  // Gas Tank reading for the Car
var gasTank = 20;  // Gas Tank capacity for the Car
var GasStation  = 200; //Next gas station stop

if(gaugeReading < GasStation && gasTank===5){
    //Yes, you can make it without stopping for gas!” 
    console.log("Yes you can make it without stopping for gas!");
}else{
   console.log("you only have 50 gallons in your tank");
}



//Grade Letter Calculator

//Student passing grade for Mobile design is B, which 80-84, otherwise student fails is grade is lower
 var passGrade = 84;
 var failGrade = 78;
if(passGrade > failGrade){
//print to console "You have 84, You have earned a B"
    console.log("You have earned 84%, You earned a B");
}else{
    console.log("You have failed the course");
}


//Movie Ticket Price
var customerAge = 55; //Senior citzen 55 and older
var movieTime = 3-5;  // Movie time that price is discounted for all movie goers.
var Ticketprice = 7; //Discounted price for the tickets of senior citizen or childern under 10
if(customerAge && Ticketprice ===7){
    //Then print discounted movie ticket price
    console.log("Ticketprice is $7")
}

