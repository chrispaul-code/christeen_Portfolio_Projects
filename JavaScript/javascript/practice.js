grade = prompt("enter your grade");

if(grade >=90 && grade <=100){
    console.log(grade , "A")
}else if (grade >=70 && grade <=89){
    console.log(grade , "B")
}else if (grade >=60 && grade <=69){
    console.log(grade , "C")
}else if (grade >=50 && grade <=59){
    console.log(grade , "D")
}else{
    console.log(grade , "Fail")
}