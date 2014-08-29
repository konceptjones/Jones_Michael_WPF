//Michael Jones
//August 21, 2014
//Assignment: Conditionals - Personal


//If you purchase iPhone at store cost $199.99, otherwise if purchase online 199.99 plus $10 shipping.
var iphone;
iPhone = 199.99; //cost of iPhone
var shipping;
shipping = 10; //shipping cost
var online = shipping + iphone;
var instore;

//Purchasing the iphone instore to avoid shipping
instore = (iphone = 199.99); "Cost of phone 199.99";
console.log(instore);

//Purchasing the iphone online with shipping cost.
if(online = iphone + shipping){
    console.log(online);
}