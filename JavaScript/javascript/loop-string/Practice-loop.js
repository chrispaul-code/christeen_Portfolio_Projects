// for(i=0;i<=100;i++){
//    if (i%2 === 0){
//     console.log(i)  
//    }

// }

// gameNum = 25

// userNum = prompt("enter a number : ")

// if (gameNum == userNum){
//     console.log("you won !")
// }else{
//     console.log("try again")
// }

// let i=1;
// while(i<=5) {
//     console.log("i=",i);
//     i++;
// }

let gameNum =25;
let userNum = prompt("enter a number : ");

while(userNum != gameNum) {
    userNum = prompt("guess again :")
}

console.log("you won !")
