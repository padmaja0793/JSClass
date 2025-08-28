//Array is collection of data.


 var student = ["a","b","c"];  
 console.log(student[0]);
 console.log(student[1]);
 console.log(student[2]);

 console.log(student[3]); undefined
 console.log(student[4]);  undefined

//There are methods

//Push = Push is method which can be add new one last element//    //Arraychya end la new element add krto//    APPEND(ADD) SAME
let num = [1,2,3,4,5];
console.log(num);
console.log(num.push(6,7));
console.log(num);

//Pop = pop is remove the last element from the given array.
let nums =  [0,7,9,3];
console.log(nums);
console.log(nums.pop(3));
console.log(nums);

//Shift = Shift is remove the first element of an array . 
// 2] It also returns the removed element.     तसेच, तो काढलेला element return करतो
// 3] The length of the array decreases by 1 after using shift().      shift() वापरल्यानंतर array ची लांबी (length) 1 ने कमी होते.
let fruits = ["Apple","Banana","Mango"];
 fruits.shift();
console.log(fruits);

//Unshift = It will add the element of start of array. 
// 2]  It returns the new length of the array.

let numbers = [2,3,4,5];
numbers.unshift(1);
console.log(numbers);



 








