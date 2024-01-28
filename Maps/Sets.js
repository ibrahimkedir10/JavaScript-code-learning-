function removeDuplicates(array) {
    console.log([...new Set(array)]) ;
    
}

const arrayWithDuplicates = [1, 2, 3, 4, 1, 2, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Adding duplicate value, but it won't be stored

console.log(set.has(2)); // Output: true

