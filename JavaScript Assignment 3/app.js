//***************************** Chapter # 09-11 *************************


//                  Question # 01

 var user = prompt("Enter a city Name");
 if(user === "karachi"){
 alert("Wellcome to city of Lights")
 }
 else{
     alert("karachi ma Aooo pehle!!")
 }


//                  Question # 02

 var user = prompt("Enter your Gender");
 if(user === "male"){
     alert("Good Morning Sir")
 }
 else if(user === "female"){
     alert("Good Morning Mam")
 }else(
     alert("Pehle Gender Sahi Krou")
 )


 //                  Question # 03
 var user = prompt("Enter a Colour of Road Traffic Signal");
 if(user === "red"){
     alert("Must Stop")
 }
 else if(user === "yellow"){
     alert("Ready to Move")
 }
 else if(user === "green"){
     alert("Move Now")
 }else{
     alert("Pehle Colour Sahi kroo")
 }

 //                  Question # 04
 var user = prompt("Enter remaining fuel in car in litres");
 if(user < 0.25){
     alert("Please refill the fuel in your car")
 }else{
     alert("Fuel Full ha chalte rhoo")
 }

 //                  Question # 05
 var a = 4;
 if(++a === 5){
     alert("given condition for variable a is true");
 }

 var b = 82;
 if(b++ === 83){
     alert("given condition for variable b is true")
 }

 var c = 12;
 if(c++ === 13){
 alert("condition 1 is true");
 }

 if(c === 13){
     alert("condition 2 is true")
 }
 if(++c < 14){
     alert("condition 3 is true");
 }
 if(c === 14){
     alert("condition 4 is true");
 }
//                  Question # 06
 var sub1 = +prompt("Enter Chemistry Marks");
 var sub2 = +prompt("Enter Physics Marks");
 var sub3 = +prompt("Enter Biology Marks");
 var sub4 = +prompt("Enter Math Marks");
 var sub5 = +prompt("Enter Computer Marks");
 var obtn =  (sub1 + sub2 + sub3 + sub4 + sub5);
 var totalmarks = +prompt("Enter total Marks");

 var percentage = obtn / totalmarks * 100; 
 var grade = " "

 console.log(percentage)

 if(percentage >= 80){

 var remrks = "Excellent";
   document.write("<h1>"+ "Toral Marks: 500"  + "Obtained Marks:" + obtn +   "Grade: A+"  +"Remarks:" + remrks +"</h1>") 
 document.write("<h1>" + "Percentage:" + percentage + "</h1>")
 }

 else if(percentage >= 70){
   alert("Grade: A")
 }
 else if(percentage >= 60){
   alert("Grade: B")
 }
 else if(percentage >= 50){
   alert("Grade: C")
 }
 else if(percentage >= 40){
   alert("Grade: D")
 }
 else{
   alert("Grade: F")
 }
//                  Question # 07
 var num = [1,2,3,4,5,6,7,8,9.10];
 var user = +prompt("Enter a Secret Number");

 if(user === "1 || 2 || 3 || 4 || 5"  ){
   alert("Bingo! Correct Answer")
 }
 else if (user === 6 || 7 || 8 || 9 || 10){
   alert("Close enough to the correct answer")
 }

 //                  Question # 08
 var user = prompt("Enter Your No");
 if (user === "3"){
   alert("number is divisible by 3.")
 }
 else{
   alert("number is not divisible by 3.")
 }
 //                  Question # 09
 var user = prompt("Enter No")
 if (user === 2 || 4 || 6 || 8){
   alert("Number is even")
 }
 else if(user === "1,3,5,7,9"){
   alert("Number is Odd")
 }else{
   alert("Not even nor odd")
 }
 //                  Question # 10
 var temp = + prompt("Enter a Temperature")
   if(temp > 40){
     alert("It is to Hot Outside")
   }
 else if (temp > 30 ){
   alert("The Weather today is Normal")
 }
 else if (temp > 20){
   alert("TOday's Weather is Cool")
 }
 else if(temp > 10){
   alert("OMG!  Today Weather is cool")
 }
 else{
   alert("Weather sahi kruu")
 }
 //                  Question # 11

 var num1 = Number(prompt("Enter the first number: "));
 var num2 = Number(prompt("Enter the second number: "));
 var operator = prompt("Enter the operator (+, -, *, /, %): ");

 var result;

 if (operator === "+") {
   result = num1 + num2;
 } else if (operator === "-") {
   result = num1 - num2;
 } else if (operator === "*") {
   result = num1 * num2;
 } else if (operator === "/") {
   result = num1 / num2;
 } else if (operator === "%") {
   result = num1 % num2;
 } else {
   document.write("Invalid operator");
 }

 document.write(`Result: ${result}`);



//***************************** Chapter # 12-13 *************************           



//           Question # 01
 var input = prompt("Enter a character: ");

 if (input >= '0' && input <= '9') {
   console.log(`${input} is a number`);
 } else if (input >= 'A' && input <= 'Z') {
   console.log(`${input} is an uppercase varter`);
 } else if (input >= 'a' && input <= 'z') {
   console.log(`${input} is a lowercase varter`);
 } else {
   console.log(`${input} is not a number or varter`);
 }
 //                  Question # 02

 var num1 = Number(prompt("Enter the first integer: "));
 var num2 = Number(prompt("Enter the second integer: "));

 if (num1 > num2) {
   console.log(`${num1} is larger than ${num2}`);
 } else if (num1 < num2) {
   console.log(`${num2} is larger than ${num1}`);
 } else {
   console.log(`${num1} and ${num2} are equal`);
 }

 //                  Question # 03

var num = Number(prompt("Enter a number: "));

if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}

 //                  Question # 04

// var char = prompt("Enter a character: ");

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//   console.log(`${char} is a vowel`);
// } else {
//   console.log(`${char} is not a vowel`);
// }


 //                  Question # 05

// var correctPassword = "password"; // Store the correct password

// var userPassword = prompt("Enter your password:"); // Ask the user to enter their password

// if (userPassword === "") { // Check if the user has entered a password
//   console.log("Please enter your password.");
// } else if (userPassword === correctPassword) { // Check if the user's password matches the correct password
//   console.log("Correct! The password you entered matches the original password.");
// } else { // The user's password does not match the correct password
//   console.log("Incorrect password.");
// }


 //                  Question # 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


 //                  Question # 07

// var time24 = prompt("Enter time in 24-hour clock format (e.g. 1900):"); // Ask the user to enter time in 24-hour clock format

// var time12; // Declare a variable to store the time in 12-hour clock format

// if (time24 >= 0000 && time24 < 1200) { // Check if the time is between 0000 and 1159 (inclusive)
//   time12 = time24 + " = " + time24.slice(0, 2) + "am"; // Convert the time to 12-hour clock format and add the "am" suffix
// } else if (time24 >= 1200 && time24 < 2400) { // Check if the time is between 1200 and 2359 (inclusive)
//   var hour12 = time24.slice(0, 2) - 12; // Subtract 12 from the hour to convert it to 12-hour clock format
//   if (hour12 === 0) { // If the hour is 0, set it to 12
//     hour12 = 12;
//   }
//   var minute12 = time24.slice(2, 4); // Get the minutes from the time
//   time12 = time24 + " = " + hour12 + ":" + minute12 + "pm"; // Convert the time to 12-hour clock format and add the "pm" suffix
// } else { // The time is invalid
//   time12 = "Invalid time format.";
// }

// console.log(time12); // Output the time in 12-hour clock format to the console