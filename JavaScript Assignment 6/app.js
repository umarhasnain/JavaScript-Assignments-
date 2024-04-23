//********************Chap 21-25 *******************/


// ****************    Question # 1

// var user1 = prompt("Enter Your First Name");
// var user2 = prompt("Enter Your Last Name");
// var fullName = user1 +" " + user2;

// document.write("Your Full Name is: "+ fullName)


// ****************    Question # 2

// var user = prompt("Enter Your Favorite Mobile Phone Name");
// var Name = user.length
// document.write("Your Favorite Phone Name is:   "+ user   + " Length of String: " + Name  )

// ****************    Question # 3


// var user = "pakistani"
// document.write("String: " + user + "<br>" +  "Index of 'n': " + (user.indexOf("n") ) ) 


// ****************    Question # 4

// var user = "Hello World";
// document.write("String: " + user + "<br>" +  "Last Index of 'L': " + user.lastIndexOf("l")  )  


// ****************    Question # 5

// var user = "pakistani"
// document.write("String: " + user + "<br>" +  "Index of '3': " + (user.charAt("3") ) ) 



// ****************    Question # 6

// var user1 = prompt("Enter Your First Name");
// var user2 = prompt("Enter Your Last Name");
// // var fullName = user1 +" " + user2;
// document.write("Your Full Name is: "+ fullName )


// ****************    Question # 7

// var city = "Hyderabad";
// var after = city.replace("Hyderabad" , "Islamabad" )
// document.write("City: "+city + "<br>"  +"After Replacement: "+after )


// ****************    Question # 8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var after =  message.replaceAll("and","&");

// document.write("Before Replacement: "+message + "<br>" +"After Replacement: "+ after )



// ****************    Question # 9

// var str = "472";
// var num = Number(str);

// document.write("String Value: " + str + "<br>"+ 
// "String Type: "+ typeof str + "<br>" +
// "Number Value: "+ num + "<br>"+ 
// "Number Type: "+ typeof num + "<br>" )



// ****************    Question # 10


// var user = prompt("Enter a Something");
// document.write("User Input: "+ user + "<br>" + "UpperCase: "+ user.toUpperCase())



// ****************    Question # 11


// var user = prompt("Enter a Something");
// document.write("User Input: "+ user + "<br>" + "Title Case: "+ user.toLocaleUpperCase())




// ****************    Question # 12

// var num = +prompt("Enter a Something");

// // var num = 472;

// var str = num.toString();

// document.write("String Value: " + num + "<br>"+ 
// "String Type: "+ typeof num + "<br>" +
// "Number Value: "+ str + "<br>"+ 
// "Number Type: "+ typeof str + "<br>" )



// ****************    Question # 13

// CHATGPT CODE

// // Regular expression to match special characters @ and ]
// const specialCharsRegex = /[@\]\!\,\.]/;

// // Prompt user for username
// let username = prompt("Please enter your username:");

// // Check if username contains special characters
// while (specialCharsRegex.test(username)) {
//   alert("Invalid username! Please enter a username without @ or ]");
//   username = prompt("Please enter your username:");
// }

// // Print the valid username
// alert("Your username is: " + username);




// ****************    Question # 14

//**********************  SEARCHING PROGRAM   ****************/


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// const userInput = prompt("Enter an item to search for:");

// // Check if the item is in the array (case-insensitive)
// const found = arr.some(item => item.toLowerCase() === userInput.toLowerCase());

// if (found) {
//   alert(`The item "${userInput}" was found in the list!`);
// } else {
//   alert(`The item "${userInput}" was not found in the list.`);
// }


// ******************// Other Code  *****************

// var foodItems = [  "coke", "apple pie", "pie", "cookie", "chips", "patties", "Burger", "zinger" , "Roll", "kabab" ];

//       var search = prompt("Enter food name");

//       var flag = false;

//       for (var i = 0; i < foodItems.length; i++) {
//         if (search === foodItems[i]) {
//           document.write(
//             "<h1>" + (i + 1) + ")" + foodItems[i] + " is available" + "</h1>"
//           );
//           flag = true;
//           break;
//         }
//       }

//       if(flag === false){
//           document.write("<h1>" + search + " is not available" + "</h1>");
//       }




// ****************    Question # 15

//************************  PASSWORD REGIX  *****************/

// const passwordRegex = /^(?![0-9])[a-zA-Z0-9]{6,}$/;

// let password = prompt("Please enter your password:");

// while (!passwordRegex.test(password)) {
//   alert("Invalid password! Please enter a password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number.");
//   password = prompt("Please enter your password:");
// }


// alert("Your password is: " + password);




// ****************    Question # 16


// var name = "University of Karachi";
// var uni = name.split('');
// console.log(uni)





// ****************    Question # 17

// var name = "Pakistan";
// var user = name.charAt(7)
// console.log(user)



// ****************    Question # 18

// var str = "the quick the fox jumps the over the lazy dog the";
// var word = "the";
// var count = 0;

// for(var i = 0; i < str.length; i++){
//     if(str.slice(i, i + word.length).toLowerCase() === word){
//         count++
//     }
// }

// console.log(count)

// var str = "the quick";

// console.log(str.slice(4,9));


//Extra Code
// console.log(str.split("the").join("ghous"));
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//   if(str.slice(i, i + 3) === "the"){
//     count++
//   }
// }

// console.log(count)



//*************************Chap 26-30 *******************/




// ****************    Question # 1


// var user = prompt("Enter Your Positive Integar");
// var num = Number(user);
// var rndOf = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);


//  document.write("Number: "+ num + "<br>" + "Round off value: "+ rndOf + 
//  "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil )




// ****************    Question # 2

// var user = prompt("Enter Your Positive Integar");
// var num = Number(user);
// var rndOf = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);


//  document.write("Number: "+ num + "<br>" + "Round off value: "+ rndOf + 
//  "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil )

//  Math.abs()



// ****************    Question # 3

// var user = prompt("Enter a Absoute value");
// var name = Math.abs(user);
// console.log(name)




// ****************    Question # 4

// var value = "321456";
// var name = Math.random(value);
// var imprNum = (name * 6) + 1;
// var num = Math.floor(imprNum)

// document.write("Random Dice Value is: " + num)




// ****************    Question # 5

// var name = Math.random();
// var num = (name * 2) +1 ;
// var impNum = Math.floor(num);
// if(impNum === 1){
//     document.write(impNum + "<br>");
//     document.write("Random Coin Value: " , "Heads")
// }
// else if(impNum === 2){
//     document.write(impNum + "<br>");
//     document.write("Random Coin Value: " , "Tails")

// }

// document.write(impNum);


// ****************    Question # 6

// var value = Math.random();
// var num = (value * 100) +1;
// var valueNum = Math.floor(num);
// document.write("Random Number Between 1 to 100: "+valueNum)


// ****************    Question # 7

// var Age = prompt("Enter your Weight in kilograms");
// // var num = parseFloat(Age) + 8;
// console.log(num)



// ****************    Question # 8

// var value = "2,4,6,8";
// var user = prompt("Enter a Number At a Range of 1 To 10 ");
// if (user === "2"){
//     alert("Congratulation")
// }else if(user !== "2" ){
//     alert("Sorry! Try again!")
// }else{
//     alert("Thnks")
// }

// console.log(user)


//*************************Chap 31-34 *******************


// ****************    Question # 1

// var date = new Date();
// console.log(date)



// ****************    Question # 2

// var MonthNames = ["Jan","Feb","Mar","Apr","May","June" ,"July","Aug","Sept","Oct","Nov","Dec" ]
// var date = new Date();
// var now = date.getMonth();
// var nameofToday = MonthNames[now];
// alert(nameofToday)



// ****************    Question # 3

// var TheDay = ["Sunday","Monday" , "Tuesday" , "Wednesday" , "Tharsday" , "Friday" , "Saturday"];
// var date = new Date();
// var newDate = date.getDay();
// var nameofToday = TheDay[newDate];
// var newOne = nameofToday;
// console.log(newOne)


// ****************    Question # 4

// var Date = new Date();
// var newin = Date.getDay();
// var newin = prompt("Enter your Day")
// if(newin === "saturday"){
//     alert("It’s Fun day")
// }else if (newin === "sunday"){
//     alert("It’s Fun day")
// }else{
//     alert("It's a Normal Day")
// }



// ****************    Question # 5

// var day = prompt("Enter Your Day");
// if(day < 16 ){
//     alert("First fifteen Days of Month")
// }else{
//     alert("Last Days of Month")
// }


// ****************    Question # 6

// var date = new Date();
// var newdate = date.getMilliseconds()
// var newdate1 = date.getMinutes()
// // var newdate = date
// // var date = new Date();
// // var Date("Jan. 1, 1970").getMinutes
// // // var one = date.getMinutes();
// console.log(newdate)
// console.log(newdate1)


// ****************    Question # 7

// var date = new Date("09/3/2002");
// var newdate = date.getHours()
// console.log(newdate)

// var user = prompt("Enter AM or PM")
// if(user === "AM"){
//     alert("It's AM")
// }else if(user === "PM"){
//     alert("It's PM")
// }
// else{
//     alert("It's Weather")
// }


// ****************    Question # 8

// var date = new Date("Dec 31,2022");
// var newone = ["sun","mon","tues","wed","thrs","fri","sat"]
// console.log(newone[date.getDay()])


// ****************    Question # 9

// var date = new Date("Aug 14, 2022");
// var str = date.indexOf("date");
// console.log(str)

// For Days

// var abc = document.getElementById("day1");
// var today = new Date().getTime();
// var date = new Date("July 10, 2022").getTime();
// var diff = date - today;
// abc.innerHTML = Math.round(diff / (1000 * 60 * 60 * 24)) + " Days," + "<br>"; 

// // For Hours
// var abc = document.getElementById("day2")
// var today = new Date().getTime();
// var date = new Date("10 july 2022").getTime();
// var diff = date - today;
// abc.innerHTML = Math.round(diff / (1000 * 60 * 60)) + " Hours &" + "<br>"; 

// // Minutes
// var abc = document.getElementById("day3")
// var today = new Date().getTime();
// var date = new Date("10 july 2022").getTime();
// var diff = date - today;
// abc.innerHTML = Math.round(diff / (1000 * 60)) + " Minutes Left" + "<br>"; 



// ****************    Question # 10

// var date = new Date();
// var str = date.getTime();
// console.log(str)


// ****************    Question # 11

// var date = new Date();
// var str = date.getHours();
// console.log(str)



// ****************    Question # 12

// var date = new Date("june 15,1995");
// alert(date)
// var date = new Date(); 
// alert(date)


// ****************    Question # 13

// function ageCalculator() {  
//     var userinput = document.getElementById("DOB").value;  
//     var dob = new Date(userinput);  
//     if(userinput==null || userinput=='') {  
//       document.getElementById("message").innerHTML = "**Choose a date please!";    
//       return false;   
//     } else {  

//     //calculate month difference from current date in time  
//     var month_diff = Date.now() - dob.getTime();  

//     //convert the calculated difference in date format  
//     var age_dt = new Date(month_diff);   

//     //extract year from date      
//     var year = age_dt.getUTCFullYear();  

//     //now calculate the age of the user  
//     var age = Math.abs(year - 1970);  

//     //display the calculated age  
//     return document.getElementById("result").innerHTML =    
//              "Age is: " + age + " years. ";  
//     }  
// }  


// ****************    Question # 14

// var username = prompt("Enter your Name");
// var user = prompt("Enter Month");
// var name = prompt("Enter Number of Units");
// var userchrges = prompt("Enter Charges per Unit");
// document.write(username + " " + user + " " + name + " " + userchrges)

// // Net Amount Payable (within Due Date) = Number of units * Charges per unit
// // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var no = name * userchrges;
// var after =  no + name
// document.write(no + " " + after)