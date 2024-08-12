// basic calculator program

// have gone back to the drawing board with the js that will be written 


// I have now had time to read the code of other people who have completed this project and this what I believe I need so far; 

// Variables for my buttons, my operators, and my display

const numbers = document.querySelectorAll('.number-btn');
const result = document.querySelector('.output span');

const operators = document.querySelectorAll('.operator-btn');
const equals = document.querySelector('.operator-btn equals');
const clear = document.querySelector('.operator-btn clear');
const negative = document.querySelector('.operator-btn negative');
const percent = document.querySelector('.operator-btn percentage');



// lots of these will contain empty strings 

let firstValue = "";
let isFirstValue = false; 
let secondValue = "";
let isSecondValue = false; 
let sign = "";
let resultValue = 0; 

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr)
        }
    })       
}       
    
function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el; 
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

// there is no need for button onclick functions in my html file. 

// functions for evaluation and clearing my screen 

