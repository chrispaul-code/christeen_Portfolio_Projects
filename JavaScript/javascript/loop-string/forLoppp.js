// let sum=0;
// for(let i=1; i<=5 ; i++){
//     sum =sum +i;
// }
// console.log("sum =",sum)

// let i=1;
// while(i<=5) {
//     console.log("i=",i);
//     i++;
// }

// let i=1 ;
// do {
//     console.log("i=",i);
//     i++;
// }while(i<=10);

//for-of Loop
let str = "christeen";
let length = 0
for(let i of str) {
    console.log("i=", i)
    length++;
}
console.log(length);

//for-in Loop

let student = {
 name: "chris",
 age: 20,
 cgpa: 7.5,
 isPass : true, 
};

for(let key in student){
    console.log("key=" , key , " value=",student[key])
}




