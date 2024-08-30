let number = 1; 
if (number >= 2 && number <= 50) {
    for (let i = 1; i <= 10; i++) {
       
        let table = number * i;
      
        console.log(number + " * " + i + " = " + table);
    }
} else {
    console.log("Please enter a number between 2 and 50.");
}
