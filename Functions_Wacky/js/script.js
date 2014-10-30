//Michael Jones
//August 21, 2014
//Assignment: Conditionals - Personal


//testcode, window alert
var a = 1, b = 2, c = 3;
function testcode() {
  var d;
  a = 7;
}
testcode(9);
alert(a);
console.log(a); //results

//True or False statement about AC Temperature Difference.
function HVACtech(){
    var temp = 87; //Outside Temperature
    var ACtemp = 65; //Temperature from the Air Condition
    console.log("Mike the HVAC Tech said my Air Condition TD was " + "temp" > "ACtemp")
}
HVACtech();

//Apple product cost
function Apple(){
    var macbook = 2900; 
    var macbookAir = 2100;
    var ipad = 500;
    console.log("The Cost of a 2 macbook air is $" + macbookAir * 2) //cost of purchasing 2 Macbook Air
    console.log("The Cost of a 3 macbook is $" + macbook * 3) //cost of purchasing 3 Macbook
    
Apple()}

macbook = 2900;
macbookAir = 2100;
ipad = 500;

if (macbook < macbookAir) {
    console.log("print MacbookAir");
} else if (macbook < ipad) {
        console.log("print macbook");
} else {
console.log("print macbook");
}     