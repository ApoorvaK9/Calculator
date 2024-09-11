//Functions : Addition, Subtraction, Multiplication, Division
const add = (a,b)=> a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const container = document.querySelector(".container");
const firstNum = document.createElement("p");
// container.appendChild(firstNum);
const operator = document.createElement("p");
// container.appendChild(operator);
const secondNum = document.createElement("p");
// container.appendChild(secondNum);


function operate(operator,num1,num2){
    switch (operator) {
        case "+":
            return add(num1,num2);

        case "-":
            return subtract(num1,num2);

        case "*":
            return multiply(num1,num2);

        case "/":
            return divide(num1,num2);

        default:
            break;
    }
}

const btns = document.querySelectorAll("button");
let savedNum = document.querySelector("#screen p");

let display = "";
let oper = "";

btns.forEach(button => {
    button.addEventListener('click',(event) => {
        let eventKey = event.target.textContent;
        if(eventKey === "clear") display = "";
        if(display.length < 23){
            // checks if user has clicked dot
            ((eventKey === ".") && !(display.includes("."))) ? display += eventKey :
            //checks if user has clicked a number
            !(isNaN(eventKey))   ?   display += eventKey : display;
            }
        else 
            display = "Bacche ki jaan lega kya!";
        
        savedNum.textContent = display;
    });
});

