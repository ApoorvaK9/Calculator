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

        case "x":
            return multiply(num1,num2);

        case "/":
            return divide(num1,num2);

        default:
            return num1+num2;
            // break;
    }
}

const btns = document.querySelectorAll("button");
let savedNum = document.querySelector(".result");
// let calculations = document.querySelector(".calculate");
let display = "0";
let oper1 = "";
let oper2 = "";
let num1 = 0;
let num2 = 0;
let tag = 0;

btns.forEach(button => {
    button.addEventListener('click',(event) => {
        let eventClassName = event.target.className;
        let key = event.target.textContent;
        
        switch (eventClassName) {
            case "num":
                //  (display.length > 23) ? display = "Bacche ki jaan lega kya!" :
                //  (display === "0" || num1 ||num2) ? display = key : display += key;
                if(display.length < 19){
                    if(!num1)
                        (display === "0") ? display = key : display += key;
                    else if(tag === 1){
                            display = key;
                            tag = 0;}
                    else if(tag === 0)
                            display += key;
                }
                else 
                    display = "Bacche ki jaan lega kya!";
                 break;
                
            case "dot":
                (display.length > 18) ? display = "Bacche ki jaan lega kya!" :
                display.includes(".") ? display : display += key;
                break;

            case "oper":
                if((!num1 || oper1 === "=") && oper1){
                    num1 = Number(display);
                    oper1 = key;
                }
                else{
                    num2 = Number(display);
                    oper2 = key;
                    let output = operate(oper1,num1,num2);
                    oper1 = oper2;
                    display =String(output);
                    num1 = output;
                    num2 = 0;
                    tag = 1;
                }
                break;

            case "negate":
                display = String(-Number(display));
                break;

            case "clear":
                if(key === "AC") {
                    display = "0";
                    num1 = 0;
                    num2 = 0;
                    oper1 = "";
                    oper2 = "";
                }
                else if(key === "<"){ 
                    if(display.length === 2 && display < 0) display = "0";
                    else if(!(isNaN(display)) && (display.length > 1) && (display !== "0")){
                            display = display.slice(0,-1);
                        }
                    else display = "0";
                    }
                break;

            default:
                break;
        }

        savedNum.textContent = display;
        // calculations.textContent = `${num1} + ${num2}`;
    });
});