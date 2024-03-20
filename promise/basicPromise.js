// Example demonstrating asynchronous operation using Promises

// Function that returns a Promise which resolves after a specified delay
function delayedGreeting(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve("Hello, " + name + "!");
            } else {
                reject("No name provided!");
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the Promise with .then() and .catch() for handling success and failure respectively
delayedGreeting("Alice")
    .then((greeting) => {
        console.log(greeting); // Output: Hello, Alice!
    })
    .catch((error) => {
        console.error(error); // Output: No name provided!
    });

// Example of Promise composition with chaining
delayedGreeting("Bob")
    .then((greeting) => {
        console.log(greeting); // Output: Hello, Bob!
        return "How are you doing?";
    })
    .then((message) => {
        console.log(message); // Output: How are you doing?
    })
    .catch((error) => {
        console.error(error); // This won't be executed as there's no error in this chain
    });

// Example of Promise.all() to concurrently handle multiple promises
const promise1 = delayedGreeting("Charlie");
const promise2 = delayedGreeting("David");

Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results); // Output: ["Hello, Charlie!", "Hello, David!"]
    })
    .catch((error) => {
        console.error(error); // This won't be executed as there's no error in this Promise.all() call
    });
