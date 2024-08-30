var arr = ['This', 'is', 'an', 'example'];
var n = arr.length;

// Bubble sort algorithm 
for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
        if (arr[j].length > arr[j + 1].length) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);
