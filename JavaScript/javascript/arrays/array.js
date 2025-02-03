// //strings as immutable , arrays  are muteable
// marks = [97 ,84,56,78]
//  marks[0] = 66;
//  console.log(marks); //new array is [66,84,56,78] muteable in case of string you cant do that

 //Looping over array
//  marks = [97 ,84,56,78]

// //  for (let i=0; i< marks.length ; i++ ){
// //     console.log(marks[i]);
// //  }

//  //for of loop
//  for(let mark of marks){
//    console.log(mark);
//  }

items  = [250,645,300,900,50]
for (let val of items ){
       offer = val*0.1
       console.log(val - offer)
    }

items.push(90)
items.pop() //last value will be deleted
items.toString() //coverted to string
items1.concat(items2)
items.inshift(230) //like puch
items.shift()        //like pop
items.slice(startIdx,endIdx)
items.splice(startIdx,delCount,newElement) //(add,remove,replace)