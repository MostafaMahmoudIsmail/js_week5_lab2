// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var str = "258.90"
var integer = parseInt(str)
var float = parseFloat(str)

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var num = 7.45678
num = num.toFixed(1)
num = +num

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
var string = '123'
console.log(Number.isNaN(string));

if (Number.isNaN(string)) {
	console.log("is nan");
}
else {
    console.log("not a nan");
}

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
var num1 = (0.1 + 0.2)
var num2 = 0.3
console.log(num1);
console.log(num2);
if (num1 == num2){
    console.log("equall");
}
else {
    console.log("not equall");

}
num1 = num1.toFixed(1)
if (num1 == num2){
    console.log("equall");
}
else {
    console.log("not equall");

}

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
var string1 = "123px";
var string2 = "px123";
var res;
if (Number.isNaN(parseInt(string1))){
    res = null
}
else {
    res = parseInt(string1)
}
console.log(Number.isNaN(parseInt(string1)));
console.log(parseInt(string1));
console.log(parseInt(string2));
console.log(res);

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(parm) {
    if(parm !== parm || parm == null || typeof parm === "string")
        return false
    if(parm > Number.MAX_SAFE_INTEGER)
        return false
    return true
}

console.log(isFiniteNumber("123"));
console.log(isFiniteNumber(Infinity));
console.log(isFiniteNumber(null));
console.log(isFiniteNumber(NaN));
console.log(isFiniteNumber(54132));
console.log(isFiniteNumber(1));
console.log(isFiniteNumber(-55));
console.log(isFiniteNumber(3218746547));

// 7. Remove leading and trailing spaces from the string "   hello world  ".
var string = "   hello world  "
console.log(string.trim());

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
var string = "javascript"
console.log(string.slice(4));
console.log(string.substring(4));

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
var string = "Banana Mania",count = 0
for (var idx in string){
    string[idx] = string[idx].toLowerCase()
    if (string[idx] === 'a')count+=1
}
console.log(count);

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
var string = "abc"
function reverseString(s){
    new_str = ""
    for(var idx = s.length - 1 ; idx >= 0; idx--)
        new_str += s[idx]
    return new_str
}
console.log(reverseString(string));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(string) {
  var arr = string.split(" ");
  for (var idx = 0; idx < arr.length; idx++) {
     arr[idx] = arr[idx][0].toUpperCase() + arr[idx].slice(1);
  }
  return arr.join(" ");
}
console.log(capitalizeWords("hello there friend"));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
var string = "https://example.com/path/to/page"
var idx = string.indexOf("example")
var res = string.slice(idx,idx + 11)
console.log(res);

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(small, large){
    for (var idx = 0 ; idx < large.length; idx++){
        var string = large.slice(idx,idx + small.length);
        if (string == small) return idx
    }
    return -1
}
console.log(naiveIndexOf("mohammed", "mostafa mohammed ismail"));

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello';
// we add the () to toUpperCase
// we add the = to make it == equall not assign a value
if (s.toUpperCase() == 'HELLO') {
    console.log('match');
}
else{
    console.log('not match');
}

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr = [1,2,3,4,5]
console.log(arr.push(6));
console.log(arr.unshift(0));
console.log(arr);

// 16. Remove the last element and store it. Remove the first element and store it.
var arr = [1,2,3,4,5]
var last_el = arr.pop()
var first_el = arr.shift()

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var arr = [10,20,30,40,50]
var arr2 = arr.slice(0,3)
console.log(arr2);

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var arr = [1,2,3,4,5]
arr.splice(2,2,'a','b')
console.log(arr);

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr = [1,2,3,4,5]
arr.slice(0,3)
console.log(arr);
arr.splice(0,2)
console.log(arr);

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var arr = []
arr[7] = "mostafa"
console.log(arr.length);

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(arr) {
    new_arr = []
    for(var i = 0 ; i < arr.length ; i++){
        new_arr.push(arr[i])
    }
    return new_arr
}
console.log(deepClone1D([1,2,3,4]));

// 23. Map [1,2,3] to their squares using map.
var arr = [1,2,3]
console.log(
    arr.map(function(num){
    return num * num
    })
);

// 24. Filter [5,10,15,20] to keep values >= 12.
var arr = [5,10,15,20]
var arr2 = arr.filter(function(num){
    return num >= 12
})
console.log(arr2);

// 25. Reduce [2,4,6] to product.
var arr = [2,4,6]
var arr2 = arr.reduce(
    function(acc, num){
        return acc * num
    },1
)
console.log(arr2);

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
var arr = [1,2,3]
var result1 = arr.reduce(
    function(acc,num){
        return acc + num
    },0
)
function arraySumLoop(local_arr) {
    var res = 0
    for(var i = 0 ; i < local_arr.length; i++)
        res += local_arr[i]
    return res
}
var result2 = arraySumLoop(arr)
if (result1 == result2)
    console.log("equall");
else
    console.log("not equall");

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
var arr = ['Ali','Sara','Kareem']
for(var i = 0 ; i < arr.length; i++){
    arr[i] = arr[i][0]
}
console.log(arr);

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(arr) {
    arr = arr.sort()
    var new_arr = []
    new_arr.push(arr[0])
    for(var i = 1 ; i < arr.length; i++){
        if(arr[i] !== arr[i-1])
            new_arr.push(arr[i])
    }
    return new_arr
}

console.log(
    unique([1,2,3,1,2,3])
);

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
var arr1 = [1,[2,3],[4],5]
function flatten1(arr){
    var new_arr = []
    for(var i = 0 ; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            new_arr.push(arr[i]);
            continue;
        }
        for(var j = 0; j < arr[i].length; j++){
            new_arr.push(arr[i][j]);
        }
    }
    return new_arr
}

console.log(flatten1(arr1));

// 31. Create object person with name and age; add a new property city after creation.
person = {
    "name" : "mostafa",
    "age" : 25
}
console.log(person);

// 32. Access a property via bracket notation with a dynamic key variable.
person = {
    "name" : "mostafa",
    "age" : 25
}
var user_name = "name"
console.log(person[user_name]);

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
person = {
    "name" : "mostafa",
    "age" : 25
}
for(key in person){
    console.log("the key is : ", key , " and the value is : ", person[key]);
}

// 39. List (as comments) 5 different values that coerce to false in ES5.
// 0
// NaN
// undefined
// null
// ""

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v){
    var valid = [true,'true',1,'1']
    if (valid.includes(v))
        return true
    else
        return false
}

console.log(
    safeToBoolean(true)
);
console.log(
    safeToBoolean('true')
);
console.log(
    safeToBoolean(1)
);
console.log(
    safeToBoolean('1')
);

// 41. Create a Date for Jan 1, 2025 00:00 local.
var d = new Date("Jan 1, 2025 00:00");
console.log(d);

// 42. Get the current year from new Date().
var curr = new Date()
console.log(curr.getFullYear());

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
  const diff = Math.abs(d2 - d1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
const d1 = new Date("2023-01-01");
const d2 = new Date("2023-04-27");
console.log(daysBetween(d1, d2));

// 44. Generate a random integer 1..100.
var rand = Math.random();
rand = rand * 100 + 1;
console.log(rand.toFixed());

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
var num = 4.567
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
  var arr = [];
  while (arr.length < n) {
    const temp = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(temp);
  }
  return arr
}

console.log(randomIntArray(5,45,50));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
var str = "Apple:2.50;Orange:1.75;Banana:3"
function parsePriceList(str){
    var opj = {}
    var arr = str.split(";")
    for(var i = 0 ; i < arr.length; i++){
        var arr2 = arr[i].split(":")
        opj[arr2[0]] = arr2[1]
    }
    return opj
}
console.log(parsePriceList(str));

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray){
    new_arr = []
    for(var i = 0 ; i < mixedArray.length; i++){
        if(mixedArray[i] === mixedArray[i] && typeof mixedArray[i] != "string")
            new_arr.push(mixedArray[i])
    }

    new_arr = new_arr.sort()
    return new_arr
}
console.log(filterAndSortNumbers([12,"dasd",5345,"sd"]));
