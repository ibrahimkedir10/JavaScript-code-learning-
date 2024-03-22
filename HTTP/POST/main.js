// Information to reach API
const apiKey = '325e01a9a366459885573fbc309a0354';
const url = 'https://api.rebrandly.com/v1/links';

// Elements
const input = document.getElementById("input");
const shortenButton = document.getElementById("shorten");
const responseField = document.getElementById("responseField");

// Asynchronous function to get response
const shortenUrl = async () => {
    const urlString = input.value;
    const data = JSON.stringify({destination: urlString});

    try {
        const res = await fetch(
            url, 
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    'apikey': apiKey
                }
            }
        );

        if (res.ok) {
            const resJson = await res.json();
            displayLink(resJson);
        }
    } catch (error) {
        console.error(error);
    }
};

// Function to display the shortened URL
const displayLink = (data) => {
    responseField.innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
};

// Function to clear previous results and call the API
const displayShortUrl = (event) => {
    event.preventDefault();
    responseField.innerHTML = ''; // Clear previous response
    shortenUrl();
};

// Adding click event listener to the shorten button
shortenButton.addEventListener('click', displayShortUrl);
