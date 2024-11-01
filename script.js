// basic calculator program

// have gone back to the drawing board with the js that will be written 

// I have gone back to the drawing board, did 3 iterations of this project and found what I thought were the best practices. I'm going to iterate upon this original calculator and see if I can apply what I learned from the two practices projects I did. 

let firstNumber 
let secondNumber 
let step = 0; 
let operation
let result = 0; 

// These variables are to keep the steps of my operations and hold my result 

// I want to organize the information containing my numbers and operations into an array, which will be shown in my display 

let numArray = [];
let secondNumArray = [];

let display = document.getElementById('display');


// here is a function that will allow me to store numbers in my array for eventual calculations 

function pushNumber(num) {
    if(step === 0 || step === 1){
        numArray.push(num) // [1, 2, 3, 4...]
        step = 1 // inputting the first number is step 1
        firstNumber = Number(numArray.join('')) // this merges the array into one string and that string will become a number
        display.value = firstNumber
    } else if (step === 2){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber
    }
    
}

// now let us make a function to add in our operator into step 2 specifically

function getOperator(op) {
    step = 2
    operation = op
}

// now for a function that will clear our display 

function clearDisplay() {
    display.value = 0
    firstNumber = null; 
    secondNumber = null; 
    step = 0; 
    operation = null; 
    result = 0; 
    numArray = [];
    secondNumArray = [];
}

// I think this is a solid way to make sure that everything we are working with is either empty or has no current workable value. 

// finally we will store our calculate function in a constant variable 

const calculateEquals = () => {
    if(operation === '+') {
        result = firstNumber + secondNumber
        display.value = result; 
    } else if (operation === '-'){
        result = firstNumber - secondNumber
        display.value = result; 
    } else if (operation === '*'){
        result = firstNumber * secondNumber
        display.value = result;
    } else if (operation === '/'){
        result = firstNumber / secondNumber
        display.value = result;
    }
}

// let's check for functionality 



