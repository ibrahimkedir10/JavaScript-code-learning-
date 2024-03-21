// Example of using async...await syntax

// Async function declaration
async function fetchData() {
    try {
        // Pause execution until promise is resolved
        const data1 = await fetch('https://api.example.com/data1');
        const result1 = await data1.json();
        console.log(result1);

        const data2 = await fetch('https://api.example.com/data2');
        const result2 = await data2.json();
        console.log(result2);

        // More asynchronous operations...
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchData();
