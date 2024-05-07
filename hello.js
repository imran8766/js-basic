console.log(21);
console.log("Good Morning");
var penpPrice = 20;
console.log(penpPrice);
var appleJuice = 25;
console.log(typeof appleJuice);
var name = "abdul sheikh";
console.log(typeof name);
var cond = true;
console.log(typeof cond);
var err = "My name is sheikh"
console.log(err.toLocaleUpperCase()); //capital or small letter
console.log(err.indexOf('is')); // search korar jonno
console.log(err.split('i'));  //line break or split korar jonno use korte hoi

var number1 = 20;
var number2 = 25.5;
console.log(number1 + number2);

var num1 = 20;
var num2 = '25.5';
console.log(num1 + num2); //string add hoina ,pase bose

var num3 = 20;
var num4 = '25.5';
num4 = parseFloat(num4); // string ta number e convert hoi,parseint o kora jai or +num4 korleo hoi.''+num4 eta korle string e convert hoi
console.log(num3 + num4);


var num5 = 0.7;
var num6 =0.5;
var total = num5 + num6;
total = total.toFixed(5); // decimal er pore koita digit hobe seta fixed korar jonno use korte hoi.
console.log(total);


var price1 = 37;
var price2 = 29;
var total = price1 * price2;
console.log(total);

var name1 = 'Steve';
var name2 = 'Jobs';
var result = name1 + ' ' + name2; // string gulo gap dea dekhate use korte hoi
console.log(result);

var num23 = -76;
var result = Math.abs(num23); // negative hok or positive hok absolute likhle positive show korbe.
console.log(result);