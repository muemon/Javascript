var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNumbers = numbers.filter(function(num, index, self) {
    return self.indexOf(num) === self.lastIndexOf(num); 
});

console.log(uniqueNumbers);
