//Joining & Converting

// concat() method JavaScript मध्ये दोन किंवा जास्त arrays (किंवा values) एकत्र करून नवीन array तयार करते. attach
//🔹 Syntax:
//array1.concat(array2, array3, ...);

//let arr1 = [1, 2];
//let arr2 = [3, 4];

//console.log(arr1.concat(arr2));  
//    O/P = 1,2,3,4


//Join()= → Joins elements into a string.
//join() array मधल्या सर्व elements ना string मध्ये convert करून एकत्र करतो.

//🔹 Syntax:
//array.join(separator);
//separator (optional) → string किंवा character जो elements मध्ये वापरायचा 
// (उदा. " ", "-", "|").
//जर दिला नाही, तर default ","
//Default separator = , (comma).
// मूळ array बदलत नाही, फक्त नवीन string तयार होतो.


Default join (comma ,)
let arr = [1, 2, 3];
console.log(arr.join()); 
// "1,2,3"

 Custom separator (hyphen -)
let arr = ["apple", "banana", "mango"];
console.log(arr.join("-")); 
// "apple-banana-mango"

 Space separator
let arr = ["I", "love", "JS"];
console.log(arr.join(" ")); 
// "I love JS"

 Without separator (empty string "")
let arr = [1, 2, 3];
console.log(arr.join("")); 
// "123"

 Mixing numbers & strings
let arr = [100, "JS", true];
console.log(arr.join(" | ")); 
// "100 | JS | true"


