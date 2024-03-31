// ****************** Chap # 17-20******************
// Task 1
// var arr = [std1 , std2 , std3]

//Task 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1] ]

// document.write("<h1>"+ arr[0].join(" ") +"</h1>")
// document.write("<h1>"+ arr[1].join(" ") +"</h1>")
// document.write("<h1>"+ arr[2].join(" ") +"</h1>")

//Task 3

// for(var i = 0; i <= 10; i++){
//         document.write("<li>" + i )
// }

//Task 4 
// var user = prompt("Enter a number to show its multiplicatio table");
// var tblt = prompt("Enter length multiplication table")

// for(var i = 0; i <= tblt; i++){
// document.write(user + 'x' + i + "=" + user*i +"</br>" )
// }

//Task 5

// var arr = ["apple","banana","mango","orange","strawbery"];

// for(var i = 0; i < arr.length; i++){
// document.write("</br>"+ arr[i])
// }

//Task 6
// (a)//
// for(var i =0; i<=15; i++)
// { 
//         document.write(i +"<br>")        
// }

// (b)
// for(var i = 10; i >= 1; i--){
//         document.write(  i +"<br>")
// }

//(c)
// for (var i = 0; i <= 20; i += 2) {
//         document.write(i + "<br>");
//       }

//(d)
// for (var i = 1; i <= 19; i += 2) {
//         document.write(i + "<br>");
//       }

//(e)
// for (let i = 1; i <= 10; i++) {
//        document.write(i * 2 + "k" + "<br>");
//       }

//Task 7

// var foodItems = [  "cake", "apple pie", "pie", "cookie", "chips", "patties", "Burger", "zinger" , "Roll", "kabab" ];
     
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


//Task 8

// var arr = [24,53,78,91,12,118];
// var max = 0;
// for(var i=0; i<arr.length; i++){
//         if(max < arr[i]){
//                 max=arr[i];
//         }
// }

// document.write(max)



//Task 9
// var arr = [24,53,78,91,12,118];
// var min = 0;
// for(var i=0; i < arr.length; i++){
//         if(min < arr[i]){
//                 min =arr[i];
//         }
// }

// document.write(min)


// COPY

// const A = [24,8, 53, 78, 91, 12,9];

// // Initialize the smallest number as the first element in the array
// let smallest = A[0];

// // Loop through the array and compare each element with the current smallest number
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }


// document.write(`The smallest number in the array is: ${smallest}`);

// //Task 10

// for (let i = 1; i <= 20; i++) {
//        document.write(i * 5+ "<br>");
//       }