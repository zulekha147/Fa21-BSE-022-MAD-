
/*-----------------------Array Methods-----------------------------*/
arr=[1,2,3,4,5,6]
console.log(arr.length);

console.log(arr.sort()); 

console.log(arr.reverse());

console.log(arr.toString());

/**join  method joins element of array in sigle statement */
const array = ["pakitan", "is a", "country"];
console.log(array.join(" "));

/** Removes the last element from an array and returns that element. */
console.log(arr.pop());

/**Adds one or more elements to the end of an array  return new length */
console.log(arr.push(8,9));

/**Removes the first element from an array and returns that element */
console.log(array.shift()); 

/**Adds one or more elements to the beginning of an array */
console.log(arr.unshift(8,9));

/** Combines two or more arrays and returns a new array.*/
const newArray = arr.concat(array);

/** Copies a sequence of array elements within the array */
console.log(array.copyWithin(0, 3));

/** cobine all  elements of sub array in one array*/
let names=["ali","ayesha","Ibrahim",["Abbas","adnan"]];
console.log(names.flat());

/**Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. */
console.log(arr.splice(7, 1));

/** Returns a shallow copy of a portion of an array into a new array object. */
console.log(arr.slice(4));

const colors1 = ["red", "green"];
const colors2 = ["blue", "yellow"];
const combinedColors =console.log(colors1.concat(colors2)) ; 

const letters = ["a", "b", "c", "b", "d"];
const firstBIndex = console.log(letters.indexOf("b"));

const hasMango = console.log(letters.includes("c"));
  
/**----------------------------String  Methods------------------------ */

const country = "pakistan, england";
console.log(country.length); 

/**Returns the character at a specified index in the string. */
console.log(country.charAt(3));

/**Returns the Unicode of the character at a specified index in the string. */
console.log(country.charCodeAt(0));

/**Extracts a section of a string and returns it as a new string. */
console.log(country.slice(6));

/**eturns the characters in a string beginning at the specified location through the specified number of characters. */
console.log(country.substring(6));

/**Extracts characters from a string between two specified indices. */
console.log(country.substring(6, 5));

console.log(country.toUpperCase());

console.log(country.toLowerCase());

let country2=" India "
console.log(country2.concat(country));

/** Removes whitespace from both ends of a string. */
console.log(country2.trim());

console.log(country2.trimStart());

console.log(country2.trimEnd());

const str1 = "05";
console.log(str1.padStart(3, "0")); 

console.log(str1.padEnd(3, "0"));

console.log(str1.repeat(3));

console.log(country.replace("pakistan", "Universe"));

console.log(country.replaceAll("pakistan", "Hi"));

console.log(country2.split(" ")); 

=======
/*-----------------------Array Methods-----------------------------*/
arr=[1,2,3,4,5,6]
console.log(arr.length);

console.log(arr.sort()); 

console.log(arr.reverse());

console.log(arr.toString());

/**join  method joins element of array in sigle statement */
const array = ["pakitan", "is a", "country"];
console.log(array.join(" "));

/** Removes the last element from an array and returns that element. */
console.log(arr.pop());

/**Adds one or more elements to the end of an array  return new length */
console.log(arr.push(8,9));

/**Removes the first element from an array and returns that element */
console.log(array.shift()); 

/**Adds one or more elements to the beginning of an array */
console.log(arr.unshift(8,9));

/** Combines two or more arrays and returns a new array.*/
const newArray = arr.concat(array);

/** Copies a sequence of array elements within the array */
console.log(array.copyWithin(0, 3));

/** cobine all  elements of sub array in one array*/
let names=["ali","ayesha","Ibrahim",["Abbas","adnan"]];
console.log(names.flat());

/**Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. */
console.log(arr.splice(7, 1));

/** Returns a shallow copy of a portion of an array into a new array object. */
console.log(arr.slice(4));

const colors1 = ["red", "green"];
const colors2 = ["blue", "yellow"];
const combinedColors =console.log(colors1.concat(colors2)) ; 

const letters = ["a", "b", "c", "b", "d"];
const firstBIndex = console.log(letters.indexOf("b"));

const hasMango = console.log(letters.includes("c"));
  
/**----------------------------String  Methods------------------------ */

const country = "pakistan, england";
console.log(country.length); 

/**Returns the character at a specified index in the string. */
console.log(country.charAt(3));

/**Returns the Unicode of the character at a specified index in the string. */
console.log(country.charCodeAt(0));

/**Extracts a section of a string and returns it as a new string. */
console.log(country.slice(6));

/**eturns the characters in a string beginning at the specified location through the specified number of characters. */
console.log(country.substring(6));

/**Extracts characters from a string between two specified indices. */
console.log(country.substring(6, 5));

console.log(country.toUpperCase());

console.log(country.toLowerCase());

let country2=" India "
console.log(country2.concat(country));

/** Removes whitespace from both ends of a string. */
console.log(country2.trim());

console.log(country2.trimStart());

console.log(country2.trimEnd());

const str1 = "05";
console.log(str1.padStart(3, "0")); 

console.log(str1.padEnd(3, "0"));

console.log(str1.repeat(3));

console.log(country.replace("pakistan", "Universe"));

console.log(country.replaceAll("pakistan", "Hi"));

console.log(country2.split(" ")); 

>>>>>>> c3dee05ea5698e9089758a6e913435aad0a97aa9
console.log(country.replace("pakistan","india"));