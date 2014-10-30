//Michael Jones
//August 28, 2014
//Assignment: Functions_Industry


console.log ("CAR SALES MEN EVALUATION")
//Car Sales Man evaluation.
var salesMan1 = "Carlos"
var salesMan2 = "Marvin"
var salesMan3 = "Mike"
var salesMan4 = "George"

var TopSales = salesMan4; //Top salesman for the last 2 years
console.log("The top salesman working for CarMax in 2013 is " +  TopSales);

//Top Salesman for last 6 months
Nissan = ("The top sales man for nissan in the last six months is " + salesMan1);
console.log(Nissan);

//Car sales per quarter
var quarterA = 8;
var quarterB = 10;
var quarterC = 12;

if (quarterA < quarterB){
    console.log("Sales Men Needs to get creative"); //Message to sales man if the fail to meet expectations 
}else{
    console.log("10% bonus for all the salesmen"); // Message if the pass expectations. 
}
 var YearSales = function(quarterA, quarterB, quarterC){
     var sales = quarterA + quarterB + quarterC;
     return sales;
}
 //Car annual Sales
 var annualSales = YearSales(8,20,12);
console.log(annualSales);

var topSales = salesmen(20, 8);
function salesmen(salesMan1, salesMan2){
    return salesMan1 + salesMan2;} //The two top sales men
    console.log("Carlos and Marvin Sold " + topSales + " for the last quarter of the year");