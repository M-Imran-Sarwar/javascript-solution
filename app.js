//JavaScript Assignments:


                                   // Chapter # 1  (ALERTS)

    // Task # 1
alert("Hello! Welcome to my website.")

    // Task # 2
document.write("Error! Please enter a valid password.")    

    // Task # 3
document.write("Welcome to JS Land... <br> Happy Coding!")
    
    // Task # 4
alert("Welcome to JS Land....")
document.write('Happy Coding! <br> <input type="checkbox"> Prevent this page from creating additional dialogs')

    // Task # 5
console.log("Hello... I can run JS throug my web browser's console")



                            //    Chapter # 2  (VARIABLES FOR STRINGS)

    // Task # 1                              
var username;

    // Task # 2
var myName = "Muhammad Imran";

    // Task # 3
var message = "Hello World";
alert(message);

    // Task # 4
var name = "Muhammad Hassaan";
alert(name);
var age = "5 Years Old";
alert(age);
var certified = "Certified Mobile Application Development";
alert(certified);

    // Task # 5
var a = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(a);

    // Task # 6
var email = "My email address is";
var address = " imran1pia@gmail.com";
var result = email.concat(address);
alert(result);

    // Task # 7
var book = "I am trying to learn from the Book A smarter way to learn JavaScript";
alert(book);

    // Task # 8
var a = ("Yah! I can write HTML content through JavaScript");
document.write(a);

    // Task # 9
var a = "---------$@$---------";
alert(a);
document.write(a);



                            //    Chapter # 3 (VARIABLES FOR NUMBERS)
    
    // Task # 1
var age = "I am 25 years old";
alert(age);

    // Task # 2
var visit = "You have visited this site 14 times";
alert(visit);

    // Task # 3
var birthYear = "My birth year is 1985 <br> Data type of my declared variable is number";
document.write(birthYear);

    // Task # 4
var visitor = "John Doe ordered 5 T-shirt(s) on XYZ Clothing store";
document.write(visitor);



                         //    Chapter # 4 (VARIABLE NAMES: LEGAL & ILLEGAL)

//     Task # 1
var a, b, c;

    // Task # 2
// Legal 
var a, name, rollNumber, my1stTrip, age;
// Illigal
var Name, 1stMethod, alert, var, mobilenumber;

    // Task # 3
var para = "<h2>Rules for naming JS variables</h2><br> Variable names can only contain number, $, and ______.For example $my_1stVariable <br>Variables must begin with a letter, $ or _____. For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keywords";
document.write(para);



                                //    Chapter # 5 (MATH EXPRESSIONS)

    //Task # 1
var a = 3;
var b = 5;
var c = a+b;
document.write("Sum of 3 and 5 is"+c);

    // Task # 2
var a = 2;
var b = 6;
var c = b-a;
var d = a*b;
var e = b/a;
var f = b%a;
document.write('Subtraction of 2 and 6 is'+ c,"<br>",'Multiplication of 2 and 6 is'+ d,"<br>",'Division of 2 and 6 is'+ e,"<br>",'Modulus of 2 and 6 is'+f)

    // Task # 3
var a;
var b;
var c;
document.write("Value after variable declaration is undefined",'<br>');
a = 5;
document.write("Initial value: 5",'<br>');
a++;
document.write("Value after increment is:"+a,'<br>');
b = a+7;
document.write("Value after addition is:"+b,'<br>');
b--;
document.write("Value after decrement is:"+b,'<br>')
c = b%3;
document.write("The remainder is :"+c)

    // Task # 4
var a = 600;
var b = a*5;
document.write("Total cost to buy 5 tickets to a movie is"+b+"PKR")

    // Task # 5
for(var a = 1; a <= 10; a++){
    document.write("5"+"X"+a+"="+5*a+"<br>")
}

    // Task # 6
var c;
var f = 70;
c = (f-32)*5/9;
document.write(c);

    // Task # 7
var priceOne = 650;
var priceTwo = 100;
var orderOne = priceOne*3;
var orderTwo = priceTwo*7;
var shipping = 100;
var total = orderOne + orderTwo + shipping
document.write("<h1>Shopping Cart</h1>","<br>","Price of item 1 is 650","<br>","Quantity of item 1 is 3","<br>","Price of item 2 is 100","<br>","Quantity of item 2 is 7","<br>","Shipping charges 100","<br>","<br>","Total cost of your order is"+total);

    // Task # 8
var t = 980;
var o = 804;
var p = (o/t)*100;
document.write("<h1>Marks Sheet</h1>","<br>","Total marks: 980","<br>","Marks obtained: 804","<br>","Percentage:" + p + "%");

    // Task # 9
var doller = 10*104.80;
var reyal = 25*28;
var total = doller + reyal;
document.write("<h1>Currency in PKR</h1>","<br>"+ "Total currency in PKR:"+total);

    // Task # 10
var i = 5;
document.write(((i*5)*10)/2);

    // Task # 11
var cYear = 2020;
var bYear = 1992;
var age = cYear-bYear;
document.write("<h1>Age Calculator<h1>","<br>","Current Year: 2020","<br>","Birth Year: 1892","<br>","Your age is:" + age);



                                //    Chapter # 6-9 (MATH EXPRESSIONS)

    // Task # 1
var a = 10;
document.write(++a,"<br>");
a = 11;
document.write(a+1,"<br>");
a = 12;
document.write(--a,"<br>");
a = 11;
document.write(a-1,"<br>");

    // Task # 2
var a = 2;
var b = 1;
var c = --a - --b + ++b + b--;
document.write(c);

    // Task # 3
var userName = prompt(" ","Enter your name");
document.write("Hello " + userName + " !");

    // Task # 5
var num = prompt("");
if(num >= 2){
    for(var i = 1; i <= 10; i++){
        document.write(num + "X" + i + "=" + num*i + "<br>");
    } 
}
else if (num < 2) {
    for(var i = 1; i <= 10; i++){document.write("5" + "X" + i + "=" + 5*i + "<br>");
 }
}

    // Task # 6
var english = prompt("Obtained marks","English");
var math = prompt("Obtained marks","Math");
var urdu = prompt("Obtained marks","Urdu");

function getMarks() {
    var a = document.getElementById("engm");
    a.innerHTML = english;
    var b = document.getElementById("mathm");
    b.innerHTML = math;
    var c = document.getElementById("urdum");
    c.innerHTML = urdu;
    var engp = document.getElementById("engp");
    var x = english/100 * "100";
    engp.innerHTML = x + "%" ;
    var mathp = document.getElementById("mathp");
    var y = math/100 * "100";
    mathp.innerHTML = y + "%";
    var urdup = document.getElementById("urdup");
    var z = urdu/100 * "100";
    urdup.innerHTML = z + "%";
    var gtn = document.getElementById("gtn");
    var m = (+english) + (+math) + (+urdu);
    gtn.innerHTML = m;
    var gtp = document.getElementById("gtp");
    var n = m/300 * "100";
    gtp.innerHTML = n + "%";
}
getMarks();


     
                          // Chapter # 9-11 (USER INPUT & CONDITIONAL STATEMENT)

    //  Task # 1
var a = prompt(" ","Enter the city name");
if (a === "Karachi") {
    document.write("Welcome to city of lights");
}                   

    // Task # 2
var i = prompt("","Gender");
if ( i === "Male") {
    document.write("Good Morning Sir");
} else if( i === "Female") {
    document.write("Good Morning Ma'am");
}

    // Task # 3
var i = prompt(" ","Enter Signal Color");
if(i==="Red"){
    document.write("Must Stop");
} else if(i==="Yellow"){
    document.write("Ready to move");
}else if(i==="Green"){
    document.write("Move now");
}

    // Task # 4
var i = prompt("","Remaining fuel in liters");
if(i < 0.25){
    document.write("Please refill the fuel in your car");
}

    // Task # 7
var snum = 2;
var i = prompt("","Guess the secret number");
if(i==="2"){
    document.write("Bingo! Correct answer");
}else if(i==="3"){
    document.write("Close enough to the correct answer");
}else if(i<2 || i>3){
    document.write("Your answer is wrong");
}

    // Task # 8
var i = prompt("","Enter a number");
if( i % 3 === 0 && i>0){
    document.write("Your Number is divided by 3");
}else if(i % 3 !==0 && i>0){
    document.write("Your Number is not divided by 3");
}

    // Task # 9
var i = prompt("","Enter a number");
if(i % 2 === 0 && i > 0){
    document.write("Even Number");
}else if(i % 2 !== 0 && i >0){
    document.write("Odd Number");
}

    // Task # 10
var t = prompt("","Enter Temperature Value");
if(t > 40){
    document.write("It is too hot outside.");
}else if(t > 30){
    document.write("The Weather today is Normal.");
}else if(t > 20){
    document.write("Today’s Weather is cool.");
}else if(t > 10){
    document.write("OMG! Today’s weather is so Cool.");
}

    // Task # 11
var v1 = prompt("","Enter the 1st value");
var v2 = prompt("","Enter the 2nd value");
var sign = prompt("","enter required sign");
if(sign === "+"){
    document.write((+v1) + (+v2));
}else if(sign === "*"){
    document.write(v1 * v2);
}else if(sign === "/"){
    document.write(v1 / v2);
}else if(sign === "%"){
    document.write(v1 / v2 * "100" + "%");
}


    
                  // Chapter # 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

    // Task # 1
var a = prompt("","Enter a character");
if (/[A-Z]/.test(a)) {
    document.write ("It's a upper case letter.")
}else if (/[a-z]/.test(a)) {
        document.write ("It's a lower case letter.")
} else {
        document.write ("It's a number.")
}

    // Task # 2
var a = prompt("","Enter 1st Integer");
var b = prompt("","Enter 2nd Integer");
if(a > b){
    alert(a);
}else if(a < b){
    alert(b);
}else if(a === b){
    alert("Both values are equal");
}

    // Task # 3
var a = prompt("","Enter a number");
if(a > 0){
    alert("Positive");
}else if(a=== "0"){
    alert("Zero");
} else if(a < 0){
    alert("Negative");
}

    // Task = 4
var a = prompt("","Enter vowel");
if(a === "a" || a==="e" || a==="i" || a==="o" || a==="u" && a.length===1 ){
    alert("True");
}else {
    alert("false");
}
  
    // Task # 5
var a = "123456";
var b = prompt("","Enter your Password");
if(b==="" || b==="Enter your Password"){
    alert("Please enter your password");
}else if(b==="123456"){
    alert("Correct! The password you entered matches the original password");
}else if(b>0 && b!=="123456"){
    alert("Incorrect password");
}

    // Task # 6
var greeting; 
var hour = 13 
if (hour < 18) {alert(greeting = "Good day");
} else {
    alert(greeting = "Good evening"); 
}

    // Task # 7
var time = prompt("","Enter time");
if(time >= 0000 && time < 1200){
    alert("Good morning!");
}else if(time >= 1200 && time < 1700){
    alert("Good afternoon!");
}else if(time >= 1700 && time < 2100){
    alert("Good evening!");
}else if(time >= 2100 && time <= 2359){
    alert("Good night!");
}   



                                      // Chapter # 14-16 (ARRAYS)

    // Task # 1
var names = [];

    // Task # 3
var stringArray = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday"];
alert(stringArray);

    // Task # 4
var numberArray = [1,2,3,4,5];
alert(numberArray);

    // Task # 5
var booleanArray = [true,false,false,true];
alert(booleanArray);

    // Task # 6
var mixArray = ["Imran",7,"Three",true,9,"Hassaan"];
alert(mixArray);

    // Task # 7
var a = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification</h1>","<br>")
for(var i=0; i < a.length; i++){
    document.write(a[i],"<br>")
}

    // Task # 9
var colors = ["White","Black","Red","Blue"];

var a = prompt("","Enter color name")

a.
colors.unshift(a);
document.write(colors);

b.
colors.push(a);
document.write(colors);

c.
colors.unshift("Golden","Silver");
document.write(colors);

d.
colors.shift();
document.write(colors);

e.
colors.pop();
document.write(colors);

    // Task # 10
var score = [320,230,480,120];
score.sort(function(a, b){return a - b});
document.write(score);

    // Task # 11
var cityNames = ["Karachi","Lahore","Faisalabad","Islamabad","Quetta"];
var newCityNames = cityNames.slice(2,4);
document.write(newCityNames);

    // Task # 12
var arr = ["This", "is", "my", "cat"];
var a = arr.toString();
document.write(a);

    // Task # 13
var a = ["Keyboard","Mouse","Printer","Monitor"];
for(var i=0; i<a.length; i++){
    document.write(a[i] + "<br>");
}



                                      // Chapter # 17-20 (ARRAYS AND LOOP)

    // Task # 1
var arr = [
    ["", , ""],
    ["", , ""],
];

    // Task # 3
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

    //Task # 4
var number = prompt("Enter a number");
var length = prompt("Enter length of table");
for(var i = 1; i<=length; i++){
    document.write(number + "X" + i + "=" + number*i + "<br>");
}

    // Task # 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
} document.write("<br>" + "<br>"+ "Element at index 0 is"+" "+ fruits[0] +"<br>"+ "Element at index 1 is"+" "+ fruits[1] + "<br>"+ "Element at index 2 is"+" "+ fruits[2] + "<br>"+ "Element at index 3 is"+" "+ fruits[3] + "<br>"+ "Element at index 4 is"+" "+ fruits[4]);

    // Task # 6
document.write("<h3>Counting</h3>");
for(var i = 1; i <= 15; i++){
    document.write(i + ",");
}

document.write("<br>", "<h3>Reverse Counting</h3>");
for(var i = 10; i >= 1; i--){
    document.write(i + ",");
}

document.write("<br>", "<h3>Even</h3>");
for(var i = 0; i <= 20; i++){
     if(i % 2 === 0){
          document.write(i + ",");
 }
}

document.write("<br>", "<h3>Odd</h3>");
for(var i = 0; i <= 20; i++){
     if(i % 2 !== 0){
          document.write(i + ",");
 }
}

document.write("<br>", "<h3>Series</h3>");
for(var i = 1; i <= 20; i++){
     if(i % 2 === 0){
          document.write(i + "K" + ",");
 }
}

    // Task # 7
var a = prompt("Enter your required item");
var b = ["cake","apple pie","cookies","chips","patties"];
for(var i = 0; i < b.length; i++){
    if(a === b[i]){
        document.write(a + " " + "is available in our backery"); break
    } else if(a !== b[i]){ 
        document.write("We are sorry" + " " + a + " " + "is not available in our backery"); break
    }
}

    //Task # 8
var arr = [24, 53, 78, 91, 252, 12, 133];
var largest = 0;
for (var i=0; i<arr.length; i++){
     if (arr[i]>largest) {
          var largest=arr[i];   
 }
} document.write(largest);

    // Task # 9
var arr = [24, 53, 78, 91, 15, 252, 12, 133];
var smallest = arr[0];
for (var i=0; i<arr.length; i++){
     if (arr[i]<smallest) {
          var smallest=arr[i];   
 }
} document.write(smallest);

    //Task # 10
for(var i = 1; i<=100; i++){
     if(i % 5 === 0){
         document.write(i + ",");
     }
}



                                       // Chapter # 21-25 (STRING METHODS)

    //Task # 1
var a = prompt("Enter your first name");
var b = prompt("Enter your last name");
var fullName = a + " " + b;
document.write("Hello" + " " + fullName + "!");

    // Task # 2
var a = prompt("Write your mobile model");
document.write(a.length);

    // Task # 3
var a = "Pakistani";
document.write(a.indexOf("n"));

    // Task # 4
var a = "Hello World";
document.write(a.lastIndexOf("l"));

    // Task # 5
var a = "Pakistani";
document.write(a[3]);    

    // Task # 6
var a = prompt("Enter your first name");
var b = prompt("Enter your last name");
var fullName = a.concat(b);
document.write("Hello" + " " + fullName + "!");

    // Task # 7
var city = "Hyderabad";
var newWord = city.replace("Hyder","Islam");
document.write(newWord);

    // Task # 8
var a = "Ali and Sami are best friends.";
var b = a.replace("and","&");
document.write(b);

    // Task # 9
var a = "472";
var b = Number(a);
document.write(b);

    // Task # 10
var a = prompt("Enter your name");
var b = a.toUpperCase();
document.write(b);

    // Task # 11
var a = prompt("Enter your name");
var b = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
document.write(b);

    // Task # 12
var a = 35.36;
var b = a * 100
var c = b.toString();
document.write(c);

    // Task # 14
var a = prompt("Enter your required item").toLowerCase();
var b = ["cake","apple pie","cookies","chips","patties"];
for(var i = 0; i < b.length; i++){
    if(a === b[i]){
        document.write(a + " " + "is available in our backery"); break
    } else if(a !== b){ 
        document.write("We are sorry" + " " + a + " " + "is not available in our backery"); break
    }
}

    // Task # 15
var a = prompt("","Enter your password");
if (/[A-Z]/.test(a) && a.length===6 || /[a-z]/.test(a) && a.length===6 || /[0-9]/.test(a) && a.length===6) {
    document.write ("Password is correct")
} else {
    document.write ("Invalid Password")
}

    // Task # 16
var a = "University of Karachi";
var b = a.split(" ");
document.write("U","<br>","n","<br>","i","<br>","v","<br>","e","<br>","r","<br>","s","<br>","i","<br>","t","<br>","y","<br>","<br>","o","<br>","f","<br>","<br>","K","<br>","a","<br>","r","<br>","a","<br>","c","<br>","h","<br>","i");
 
    // Task # 17
var a = prompt("Write a word");
var b = a[a.length - 1];
document.write(b);



                                      // Chapter # 26-30 (MATH METHODS) 
                                      
    // Task # 1
var a = prompt("Enter a Number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number:"+" "+a+"<br>"+"Round off value:"+" "+b+"<br>"+"Floor value:"+" "+c+"<br>"+"Ceil value:"+" "+d);

    // Task # 2
var a = prompt("Enter a Number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number:"+" "+a+"<br>"+"Round off value:"+" "+b+"<br>"+"Floor value:"+" "+c+"<br>"+"Ceil value:"+" "+d);

    // Task # 3
var a = prompt("Enter a Number");
var b = Math.abs(a);
document.write(b);

    // Task # 5
var headusername = prompt("Enter Head user name");
var tailusername = prompt("Enter Tailuser name");
var toss = Math.random()*2;
var result = Math.floor(toss);
if ( result === 1 ){
    document.write(result+"<br>"+"Random coin value is"+" "+"head"+"<br>"+"The winner is"+" "+headusername);
} else{
    document.write(result+"<br>"+"Random coin value is"+" "+"tail"+"<br>"+"The winner is"+" "+tailusername);
}

    // Task # 6
var a = prompt("Enter minimum number");
var b = prompt("Enter maximum number");
var randomNum = Math.random() * 100;
var c = Math.floor(randomNum);
document.write("Random number between 1 & 100 is:"+" "+c);

    // Task # 7
var a = prompt("Enter your weight in kilograms");
document.write(a);

    // Task # 8
var a = prompt("Enter a number between 1 & 10");
var b = Math.random() * 10;
var c = Math.floor(b);
if( a === c ){
    document.write("Congratulations, your number correct.");
}else if( a !== c ){
    document.write(c+"<br>"+"Try again!");
}



                                     // Chapter # 31-34 (DATE METHODS)  
                                     
    // Task # 1
var currentDate = new Date();
document.write(currentDate);

    // Task # 2
var a = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentMonth = new Date();
var b = currentMonth.getMonth();
var c = a[b];
document.write("Current Month:"+" "+c);

    // Task # 3
var a = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var b = new Date();
var c = b.getDay();
var d = a[c];
document.write("Today is"+" "+d);

    // Task # 4
var a = prompt("Enter name of the day");
var b = a.toLowerCase();
if( b === "saturday" || b === "sunday" ){
    document.write("It's Fun Day !");
}

    // Task # 5
var a = prompt("Enter the date");
if( a < 16 ) {
    document.write("First fifteen days of the month.");
}else{
    document.write("Last days of the months");
}

    // Task # 6
var a = new Date();
var millisec = a.getTime();
var min = millisec / 1000 / 60; 
document.write("Current date:"+" "+a+"<br>"+"Elapsed millisecinds since January 1, 1970:"+" "+millisec+"<br>"+"Elapsed minutes since January 1, 1970:"+" "+min);

    // Task # 7
var a = prompt("Enter time in 24 hours");
if( a < 13 ){
    document.write("It's AM");
}else{
    document.write("It's PM");
}

    // Task # 8
var a = new Date("December 31,2020");
document.write("Later date:"+" "+a);

    // Task # 9
var a = new Date();
var b = new Date("April 24,2020");
var c = a.getTime();
var d = b.getTime();
var diff = d - c;
var dayDiff = diff / (1000 * 60 * 60 * 24);
var i = Math.floor(dayDiff);
document.write(i+" "+"days have passed since 1st Ramzan, 2020.");

// In Short //
// var a = new Date("April 24,2020").getTime() - new Date().getTime();
// var b = Math.floor(a / (1000 * 60 * 60 * 24));
// document.write(b+" "+"days have passed since 1st Ramzan, 2020.");

    // Task # 10
var a = new Date();
var b = new Date("January 1,2015");
var c = a.getTime();
var d = b.getTime();
var diff = c - d;
var secDiff = diff / (1000 * 60);
var i = Math.floor(secDiff);
document.write("On"+" "+a+","+"<br>"+i+" "+"seconds had passed since beginning of 2015.");

    // Task # 11
var a = new Date("July 23,2020 06:00:00");
var b = new Date("July 23,2020 05:00:00");
document.write("Current date is:"+" "+a+"<br>"+"One hour ago it was:"+" "+b);

    // Task # 12
var a = new Date("July 23,2020");
var b = new Date("July 23,1920");
document.write("Current date is:"+" "+a+"<br>"+"Hundred years back it was:"+" "+b);

    // Task # 13
var a = prompt("Enter your age");
var b = 2020-a;
document.write("Your age is:"+" "+a+"<br>"+"Your birth year is:"+" "+b);

    // Task # 14
var a = prompt("Customer name");
var b = prompt("Current month");
var c = prompt("Number of units");
var d = prompt("Charges per unit");
var netAmount = c * d;
var lateFee = 230;
var grossAmount = netAmount + lateFee;
document.write("<h1>K-Electric Bill</h1>"+"<br>"+"Customer Name:"+" "+a+"<br>"+"Current Month:"+" "+b+"<br>"+"Number of Units:"+" "+c+"<br>"+"Charges per unit:"+" "+d+"<br>"+"<br>"+"Net Amount Payable(within due date):"+" "+netAmount+"<br>"+"Gross Amount Payable(after due date):"+" "+grossAmount);



                                      // Chapter # 35-38 (FUNCTION)

    // Task # 1
function getDate(){
var a = new Date();
document.write(a);
} getDate();

    // Task # 2
function greeting(){
var a = prompt("Enter your first name");
var b = prompt("Enter yaour lst name");
document.write("Hello"+" "+a+" "+b+" "+"!");
} greeting();

    // Task # 3
function getSum(){
var a = prompt("Enter first number");
var b = prompt("Enter second number");
document.write((+a)+(+b));
} getSum();

    // Task # 4
function calculate(){
var a = prompt("Enter first value");
var b = prompt("Enter second value");
var c = prompt("Enter operator sign");
if(c==="+"){alert((+a)+(+b))}
else if(c==="*"){alert(a*b)}
else if(c==="/"){alert(a/b)}
else if(c==="%"){alert(b/a*100+"%")}
} calculate();

    // Task # 5
function getSqure(){
var a = prompt("Enter a number");
var b = a*a;
alert(b);
} getSqure();

    // Task # 7
function getCounting(){
var a = prompt("Enter first number");
var b = prompt("Enter last number");
for(var i = a; i<=b; i++){
    document.write(i + "<br>");
  }
} getCounting();

    // Task # 9
function getArea(){
var a = prompt("Enter width in meter");
var b = prompt("Enter height in meter");
var area = a*b;
document.write(area+" "+"m^2");
} getArea();

    // Task # 10
function checkWord(){
var a = prompt("Enter your word");
var check = "";
for( var i=a.length -1; i >= 0; i--){
       check += a[i]
} if (a === check){
    document.write(a +" "+"is palindrom word.");}
} checkWord();

    // Task # 11
function capitalize_Words(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
    document.write(capitalize_Words("the quick brown fox"));

    // Task # 12
function longestWord(string) {
var str = string.split(" ");
var longest = 0;
var word = null;
str.forEach(function(str) {
    if (longest < str.length) {
        longest = str.length;
        word = str;
            }
    });
        return word;
}
    document.write(longestWord("Web Development Tutorial"));
    



                   // Chapter # 38-42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS)  
                   
    // Task # 1
function getPower(){
var a = prompt("Enter first number");
var b = prompt("Enter second number");
var c = Math.pow(a,b);
document.write(c);
} getPower();

    // Task # 2
var a = prompt("Enter year");
function leapYear(){
if(a % 4 === 0){
    document.write("Leap year.");
}else{document.write("Not a leap year.")};
} leapYear();

    // Task # 5
function getIndex(){
var a = "Pakistan is a beautiful country, the biggest city is karachi";
var b = a.indexOf("karachi");
alert(b);
} getIndex();

    // Task # 6
function disemvowel(str) {             
var newString = " ";                            
    for (var i = 0; i < str.length; i++){           
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u"){           
           newString += str[i];};   
    };   
        return newString;   
};  
      document.write(disemvowel('I am imran, my city is karachi.')); 

    // Task # 7
function findOccurrences() {
var str = "Pleases read this application and give me gratuity";
var res = str.match(/[aeiou]{2}/g);
        return res ? res.length : 0;
}
    var found = findOccurrences();
      document.write(found);

    // Task # 8
var a = prompt("Enter distance between two cites in km");
function getMeters(){
    var b = a * 1000;
    document.write(b+" "+"m" +"<br>");
} getMeters();

function getFeet(){
    var c = a * 3280.84;
    document.write(c+" "+"feet"+"<br>");
} getFeet();

function getInches(){
    var d = a * 39370.1;
    document.write(d+" "+"inch"+"<br>");
} getInches();

function getcm(){
    var e = a * 100000;
    document.write(e+" "+"cm");
} getcm();


    // Task # 9
function getOvertime(){
var a = prompt("Enter your overtime in hours");
var b = a*12;
document.write("Hourly rate is: 12 Rs."+"<br>"+"Total amount of over time is:"+" "+b+" "+"Rs.");
} getOvertime();

    // Task # 10
function getCurrency(){
var a = prompt("Enter your amount");
var b = Math.floor(a/100);
var c = Math.floor(a % 100 / 50);
var d = Math.floor(a % 100 % 50 /10);
document.write("You will have"+" "+b+" "+"hundred notes,"+" "+c+" "+"fifty notes,"+" "+d+" "+"ten notes.");
} getCurrency();



                                       // Chapter # 43-48 (EVENTS)

    // Task # 1
// (Link is written in HTML file)
function greeting(){
    alert("Hello!");
}

    // Task # 2
function purchase(){
    alert("Thanks for purchasing a mobile from us.")
}

    // Task # 3
function getDelete(){
var td = event.target.parentNode;
var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

    // Task # 4
function swapPic(){
var pic = document.getElementById("swap");
pic.src = "Mobile 4.jpg";
}
function restore(){
var pic = document.getElementById("swap");
pic.src = "Mobile 3.jpg";
}

    // Task # 5
var screen = "";
var a = document.getElementById("screen");
var interval;
function countfwd(){
           screen++
     a.innerHTML = screen
}

function increment(){
    interval = setInterval (countfwd,1000);
}

function pause(){
    clearInterval(interval);
}

function countrvs(){
    screen--
a.innerHTML = screen
}

function decrement(){
    interval = setInterval (countrvs,1000);
}