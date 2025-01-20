var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var largestName = friends[0]; 

for (var i = 1; i < friends.length; i++) {
    if (friends[i].length > largestName.length) {
        largestName = friends[i]; 
    }
}

console.log("The largest name is: " + largestName);
