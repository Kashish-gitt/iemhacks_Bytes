import axios from 'axios'; // Import Axios library
const apiKey = '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'; // Replace with your actual API key

// Define the API endpoint and request data
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // Replace with the actual API endpoint
const requestData = {
    prompt: 'Your prompt goes here', // Customize this with your text
    max_tokens: 1000, // You can customize this to limit the response length
};

// Set up the request headers with your API key
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
};

// Make the POST request
axios.post(apiUrl, requestData, { headers })
    .then(response => {
        // Handle the API response here
        console.log(response.data);
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });
