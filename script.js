// basic calculator program

// have gone back to the drawing board with the js that will be written 


// I have now had time to read the code of other people who have completed this project and this what I believe I need so far; 

// Variables for my buttons, my operators, and my display

const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.output span');

const operators = document.querySelectorAll('.operatorbtn');
const equals = document.querySelector('.operatorbtn equals');
const clear = document.querySelector('.operatorbtn clear');
const negative = document.querySelector('.operatorbtn negative');
const percent = document.querySelector('.operatorbtn percentage');



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
        if(isSecondValue == false) {
            getSecondValue(atr);
        }
    })       
}       
    
function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el; 
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
   if(firstValue != "" && sign != "") {
    secondValue += el; 
    result.innerHTML = secondValue; 
    secondValue = secondValue;
   }
}

// there is no need for button onclick functions in my html file. 

// functions for evaluation and clearing my screen 

