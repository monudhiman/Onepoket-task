// Importing required modules
const express = require('express');

// Creating an instance of the express application
const app = express();

// Define a route to handle all incoming HTTP requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
