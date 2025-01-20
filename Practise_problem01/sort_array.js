let arr = [10, 15, 11, 16,12, 17, 13, 18, 14, 19, 1, 20, 2, 9, 3, 8, 4, 7, 5, 6]

// for(var i =0; i<arr.length-1; i++)
// {
//     for(var j = 0; j<arr.length-1-i; j++)
//     {
//         if (arr[i]>arr[j+1])
//         {
//            var temp = arr[j]
//            arr[j] = arr[j+1]
//            arr[j+1] = temp;
//         }
//     }
// }
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

for(var i = 0; i<arr.length; i++)
{
    console.log(arr[i]);
}