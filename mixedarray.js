let mixedArray = ["HTML", "89", "JavaScript", 67, "34", "CSS", 5, "HTML5", "456", "PHP", 76];

let stringArray = [];
let numberArray = [];

for (let i = 0; i < mixedArray.length; i++) {
    let item = mixedArray[i];
    
    if (typeof item === 'number') {
        numberArray.push(item);
    } else {
        stringArray.push(item);
    }
}


console.log("String array:", stringArray);
console.log("Number array:", numberArray);
