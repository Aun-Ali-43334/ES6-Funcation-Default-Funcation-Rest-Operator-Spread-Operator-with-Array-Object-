// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// console.log(arr1);
// for (var i = 0; i < arr1.length; i++) {
//     arr1[i].institue = "Demo";
// }
// console.log(arr1);


// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//     arr2.push({
//         name: arr1[i].name,
//         institue: "Demo"
//     })
// }

// console.log(arr1);
// console.log(arr2);

// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//     arr2.push({
//         ...arr1[i],
//         institute: "Demo",
//     })
// }

// console.log(arr1);
// console.log(arr2);

// ------------Map------------//
// ------------Map is same as a For-Loop but it returns a New Array------------//
// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = arr1.map(function (v, i) {
//     console.log(v);
// });
// console.log(arr2);

// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = arr1.map(function (v, i) {
//     return v;
// });
// console.log(arr2);


// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = arr1.map(function (v, i) {
//     return{
//         ...v,
//         institute : "Demo",
//     };
// });
// console.log(arr2);

// -----------for-each-------------
// -----------for-each it don't return anything-------------
// -----------for-each works like For-Loop but it don't check the length condition-------------

// let arr1 = [{ name: "Aun Ali" }, { name: "Ghous" }, { name: "Talha" }];
// let arr2 = arr1.forEach(function (v, i) {
//     console.log(v);
// });
// console.log(arr2);




// -------------filter-------------
// -------------if filter returns is equal to true then it'll copy elements & create new Array & vise versa-------------
// -------------filter work like Map , it also return new Array -------------
// -------------but in filter we can also apply Filter-------------

// let arr1 = [
//     { name: "Aun Ali", age: 24, city: "karachi" },
//     { name: "Ghous", age: 23, city: "Lahore" },
//     { name: "Talha", age: 15, city: "karachi" }]

// let arr2 = arr1.filter(function (v, i) {
//     return false;
// })
// // console.log(arr2);


// let arr1 = [
//     { name: "Aun Ali", age: 24, city: "karachi" },
//     { name: "Ghous", age: 23, city: "Lahore" },
//     { name: "Talha", age: 15, city: "karachi" }]

// let arr2 = arr1.filter(function (v, i) {
//     return true;
// })
// console.log(arr2);


// let arr1 = [
//     { name: "Aun Ali", age: 24, city: "karachi" },
//     { name: "Ghous", age: 18, city: "Lahore" },
//     { name: "Talha", age: 15, city: "karachi" }]

// let arr2 = arr1.filter(function (v, i) {
//     return v.age <= 18;
// })
// console.log(arr2);


// let arr1 = [
//     { name: "Aun Ali", age: 24, city: "karachi" },
//     { name: "Ghous", age: 18, city: "Lahore" },
//     { name: "Talha", age: 15, city: "karachi" }]

// let arr2 = arr1.filter(function (v, i) {
//     return (v.age = 20,
//         city = "karachi");
// })
// console.log(arr2);

// let arr1 = [
//     { name: "Aun Ali", age: 24, city: "karachi" },
//     { name: "Ghous", age: 23, city: "Lahore" },
//     { name: "Talha", age: 15, city: "karachi" }]
// let arr2 = [];

// let returnVal = arr1.filter(function (v, i) {

// return (v.age < 18);
// return (v.city === "lahore");
// return (v.age = 24); //assigning age = 24 in every object

//     return ( // //assigning age = 24 & city = "Multan" in every object
//         v.age =  24,
//         v.city = "Multan")




// })
// console.log(returnVal);


// ---------------sorting---------------
// let arr1 = [3, 13, 2, 54, 67, 16];
// console.log(arr1.sort());

// let arr2 = arr1.sort(function (a, b) {
//     console.log(a,b);
// })
// console.log(arr2);

// let arr1 = [1, 13, 8, 14, 9];
// let arr2 = arr1.sort(function (a, b) {
//     return b-a;
//     // return b-a; //for reverse order
// })
// console.log(arr2);


// let arr1 = [
//     { name: "Aun Ali", age: 13 , date : "3 july 2022",},
//     { name: "Talha", age: 24 , date : "15 july 2022",},
//     { name: "Ghous", age: 18 , date : "13 july 2022",},
// ];
// let arr2 = arr1.sort(function (a, b) {
//     // return  a.age - b.age; //it will sort according to age in asscending order
//     return new Date(b.date) - new Date(a.date); //it will sort according to age in desscending order
// })

// console.log(arr2);

// let arr1 = [2, 7, 6, 31, 8, 14];
// let odd = [];
// let even = [];

// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 == 0) {
//         even.push(arr1[i])
//     }
//     else {
//         odd.push(arr1[i])
//     }
// }
// console.log("Original Array = ", arr1);
// console.log("Odd Array = ", odd);
// console.log("Even Array = ", even);
