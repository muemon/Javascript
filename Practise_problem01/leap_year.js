const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input) {
    let number = parseInt(input);

        if (number % 4 == 0) {
            console.log(number + " is a leap year.");
        } else {
            console.log(number + " is not a leap year.");
        }

    rl.close();
});
