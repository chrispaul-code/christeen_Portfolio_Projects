console.log("hello world!")

// let teaFlavors = [ "green tea" , "black tea" , "oolong tea"];
// let firstTea=teaFlavors[0]
// console.log(firstTea);


// let teaTypes = ["herbel tea", "white tea", "masala chai"];
// teaTypes[1]= "jasmine tea";
// console.log(teaTypes);

// Using direct assignment to change an array element

// let colors = ["red", "green", "blue"];
// colors[1] = "yellow";
// console.log(colors);

// let arr1=[];
// let i=5;
// while (i>0) {
//     arr1.push(i);
//     i--; 
// }
// console.log(arr1);

// let total=0
// let k=1;
// do {
//     total+=k;
//     k++;

// } while (k<=3);
// console.log(total);


// let arr=[2,4,6]
// let multipliedNumbers=[];
// for (let index = 0; index < arr.length; index++) {
//     let  new1 = arr[index]*2;
//     multipliedNumbers.push(new1);
    
// }
// console.log(multipliedNumbers);

// arr=["green tea", "black tea", "chai" , "oolong tea"];
// selectedTeas=[];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i]=="chai") {
//        break 
//     } 
//     selectedTeas.push(arr[i])
    
// }
// console.log(selectedTeas);


arr=[2,5,7,9];
doubledNum=[];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]==7) {
        continue
    }
    doubledNum.push(arr[i]*2)
       
}
console.log(doubledNum);










 