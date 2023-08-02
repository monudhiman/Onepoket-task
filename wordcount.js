const fs = require('fs');

function countWords(fileName) {
  // Read the content of the file
  try {
    const data = fs.readFileSync(fileName, 'utf8');

    // Remove any leading/trailing whitespaces and line breaks
    const trimmedData = data.trim();

    // Split the content into an array of words using whitespace as the separator
    const words = trimmedData.split(/\s+/);

    // Get the total word count
    const wordCount = words.length;

    console.log(`Total word count in ${fileName}: ${wordCount}`);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

// Call the function with the file name
const fileName = 'student-data.txt';
countWords(fileName);
