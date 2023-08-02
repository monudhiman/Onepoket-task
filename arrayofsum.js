const readline = require('readline');

function sumArrayIntegers() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter array of integers: ', (input) => {
    // Split the input string into an array of integers
    const numbers = input.trim().split(/\s+/).map(Number);

    // Calculate the sum
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log('Sum:', sum);

    rl.close();
  });
}

// Call the function to get input and calculate the sum
sumArrayIntegers();
 