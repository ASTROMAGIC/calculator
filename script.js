// basic calculator prograqm 

const display = document.getElementById("display");

// you need 3 basic functions: a calculate or evaluate function, an appendtodisplay function, and a clearDisplay function 


function appendToDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
}


function calculate() {
    display.value
}