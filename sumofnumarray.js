var array1 = ["5", 5, 2, 0, "0", 56, 10, 1];
var array2 = [4, "Sohan", "Mohan", 5, "Ram", "6"];

var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < array1.length; i++) {
    var item = array1[i];

    if (typeof item === 'number') {
        sum1 += item; 
    }
}


for (var j = 0; j < array2.length; j++) {
    var item = array2[j];

    if (typeof item === 'number') {
        sum2 += item; 
    }
}

console.log("Sum of numeric array1:", sum1);
console.log("Sum of numeric  array2:", sum2);
