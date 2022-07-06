// ------Arrguement & Parameter-------
// let name = "Aun";
// let lname = "Ali";
// let city = "karachi";
// let age = 24;

// function demo(a="UserName"){
// console.log(a);
// }
// demo();

// -------------Rest Operator------------

// function demo(a, ...b){
// console.log(a);
// // console.log(b);
// }
// demo(1,2,3,4);


// function foo(a,...b){//rest operator
// console.log(a);
// console.log(b);
//     // console.log("fname = ",a);
//     // console.log("lname = ",b);
//     // console.log("city is = ",c);
//     // console.log("age = ",d);
//     // console.log(`${a} \n${b} \n${c}\n${d}`);         //templet Literals
// }
// foo(name,lname,city,age,"Demo",43334);

// function abc(a,...b) { //rest operator
//     console.log(a);
//     console.log(b);
// }
// abc(25,51,3,17,41);


// ------Spred Operator -------
// function foo(a,b,c){
// console.log(a);
// console.log(b);
// console.log(c);
// }

// foo(...["Aun Ali",43334,"BS(CS)"]);



// // -----------Array Concate Method is use to Merge two Arrays-----------
// // for Array concatination of 2 Arrays we've to create 3rd Array and store the Elements of 2 Arrays

// let arr1 = [1,2,3,4,5]; 
// let arr2 = [6,7,8,9]; 
// arr1.concat(arr2);
// console.log(arr1);
// console.log(arr1.concat(arr2));


// let arr3 = arr1.concat(arr2);
// console.log(arr3);


// ----------Merge of Two Arrays using Spread operator----------
// let arr1 = ["a","b","c","d","e"];
// let arr2 = [1,2,3,4,5];

// let arr3 = [...arr1, ...arr2]
// console.log(arr3);




// // ----------Merging of Two Objects using spread operator----------
// let obj1 = {
//     name: "Test",
//     age: 21,
// }
// let obj2 = {
//     city: "Karachi",
//     email: "test123@gmail.com"
// }

// or
// console.log({...obj1, ...obj2});
// let obj3 = {...obj1, ...obj2};
// console.log(obj3);

// let std1 = {
//     stdname : "Testuser1",
//     stdage : 22,
// }
// let std2 = {
//     ...std1,
//     name : "Testuser2",
//     age : 23,
// }
// console.log(std2);


