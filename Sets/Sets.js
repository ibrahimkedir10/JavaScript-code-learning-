/*
Sets in JavaScript are collections of unique elements, meaning that each element can only occur once in a set. They are similar to arrays but with some differences:

Uniqueness: Sets ensure that each element appears only once, making them suitable for tasks where uniqueness matters.

No Order: Sets don't have an inherent order like arrays. The elements are iterated in insertion order.

Iterability: Sets are iterable, meaning you can easily loop through their elements.


*/
// creating sets:
let set1 = new Set();
let set2 = new Set();

// adding vlaues to sets 
set1.add(1);
set1.add("Bob");
set1.add({name: "Manager", age:33});

set2.add(1);
set2.add(2)
set2.add(3);

// check values
console.log(set1);
//check size
console.log(set1.size);
// check if has
console.log(set1.has("Bob"));
// delete element 
set2.delete(3);
console.log(set2);
// clear all elements
set2.clear();
// iterate over set ** CANT USE NORMAL FOR LOOP, MUST CONVERT TO ARRAY FIRST !
for(let item of set1){
    console.log(item);
}

// convert to array 
let arraySet = Array.from(set1);
console.log(arraySet);


// Set Operations - Union, Intersection, Difference
let set3 = new Set([1, 2, 3]);
let set4 = new Set([3, 4, 5]);

// Union
let unionSet = new Set([...set3, ...set4]);
console.log(unionSet); // Output: Set(5) {1, 2, 3, 4, 5}

// Intersection | regular: let intersectionSet = new Set([...set3].filter(function(x) {return set4.has(x);}));
let intersectionSet = new Set([...set3].filter(x => set4.has(x)));
console.log(intersectionSet); // Output: Set(1) {3}

// Difference | reular: let differenceSet = new Set([...set3].filter(function(x) {return !set4.has(x);}));
let differenceSet = new Set([...set3].filter(x => !set4.has(x)));
console.log(differenceSet); // Output: Set(2) {1, 2}



