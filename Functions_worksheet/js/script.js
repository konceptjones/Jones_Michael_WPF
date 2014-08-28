//Michael Jones
//August 28, 2014
//Assignment: Functions_worksheet


//Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the Rectangle is " + area);

function calculateArea(w, h)
{
     return w *h;
}



//Calculate the circumference of a circle
var d = 20; //diameter of the cirle
var s = 3.14; //set calculating value used within equation
var x = circumAREA(d,s);
console.log("The Circumference of the circle " + x);

function circumAREA(d,s)
{
    return d*s;
}



//Stung
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
function beeStings(){
    var dogWeight = 45; // dog weight in lbs
    var beeSting = dogWeight * 8.67
    console.log("It Takes " + beeSting + " bee sting to Kill a Dog at 45lbs");
    
}
beeStings();

