var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest value is: " + largest);
