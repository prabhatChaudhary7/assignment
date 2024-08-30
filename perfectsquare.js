let num1 = 1;
let num2 = 10;

let start = Math.min(num1, num2);  
let end = Math.max(num1, num2);   
let found = false;                 

for (let i = Math.ceil(Math.sqrt(start)); i <= Math.floor(Math.sqrt(end)); i++) {
    let perfectSquare = i * i;
    console.log(`${perfectSquare} => ${i}`);
    found = true;
}

if (!found) {
    console.log("No numbers between the range have perfect square roots.");
}

num1 = 10;
num2 = 1;

start = Math.min(num1, num2);  
end = Math.max(num1, num2);   
found = false;                 

for (let i = Math.ceil(Math.sqrt(start)); i <= Math.floor(Math.sqrt(end)); i++) {
    let perfectSquare = i * i;
    console.log(`${perfectSquare} => ${i}`);
    found = true;
}

if (!found) {
    console.log("No numbers between the range have perfect square roots.");
}

num1 = 15;
num2 = 18;

start = Math.min(num1, num2);  
end = Math.max(num1, num2);   
found = false;                 

for (let i = Math.ceil(Math.sqrt(start)); i <= Math.floor(Math.sqrt(end)); i++) {
    let perfectSquare = i * i;
    console.log(`${perfectSquare} => ${i}`);
    found = true;
}

if (!found) {
    console.log("No numbers between the range have perfect square roots.");
}
