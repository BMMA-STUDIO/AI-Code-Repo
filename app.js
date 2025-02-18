const express = require('express');

// Create an express application
const app = express();

// Define the port number local
const port = 3000;

// Create a GET route initials
app.get('/', (req, res) => {
    res.send("<h1>Hello. This is the bmma-app index</h1>");
    console.log("Running Get / Route")
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});