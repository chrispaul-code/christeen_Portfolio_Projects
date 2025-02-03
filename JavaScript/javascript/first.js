const student = {    //student = object
    fullName : "chris", //string
    age: 20,            // number
    cgpa : 7.48,         // number
    isPass : true     //boolean
}; 
console.log(student.cgpa)
console.log(student["cgpa"])

student["fullName"] = "Rahul Sharma";

console.log (student["fullName"])


/*
+ addition
- substracxtion
* numtiplication
/ division
** power
%  remainder

Assignment Operators
=  
+= a+=1 --> a=a+1
*= a*=1 --> a=a*1
%= a%=1 --> a=a%1
**= a**=1 --> a=a**1 (** = power)


== equal to
=== strict equal to
!= not eequal to
!== strictly not wuql to
>
<
>=  greater than eqal to
<=  less than eqal to
i++
i--
++i
--i
&& logical AND both T than T
|| Logical OR   one T then T
! Logical NOT

*/

//Conditional statemnet

//if

// let age =25;

if (age>18){
    console.log("you can vote");
}else{
    console.log("you can vote");
}

//else-if
if(age<18) {
    console.log("junior");
}else if (age>60) {
    console.log("senior")
}else {
    console.log("middle");
}

let age = 25;

let result = age >=18 ? "adult" : "not adult"
