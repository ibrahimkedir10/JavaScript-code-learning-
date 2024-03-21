// elements:

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const response = document.getElementById("responseField");
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Asynchronous function

const getSuggestions = async () => {
    // combine string for API search:
    const wordTyped = input.value;
    const endpoint = `${dataMuseUrl}${queryParams}${wordTyped}`;

  
    try {
        const res = await fetch(endpoint);

        if (res.ok) {
            const jsonRes = await res.json();
            displaySuggestions(jsonRes);
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display suggestions in the responseField
const displaySuggestions = (suggestions) => {
    response.innerHTML = ''; // Clear previous results
    suggestions.forEach(suggestion => {
        const p = document.createElement('p');
        p.textContent = suggestion.word;
        response.appendChild(p);
    });
}

// Add event listener to submit button
submit.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    getSuggestions(); // Call the async function to fetch suggestions
});
