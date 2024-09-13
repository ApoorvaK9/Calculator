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
            return num1+num2;
            // break;
    }
}

const btns = document.querySelectorAll("button");
let savedNum = document.querySelector("#screen p");

let display = "0";
let oper = "";
let num1 = 0;
let num2 = 0;

btns.forEach(button => {
    button.addEventListener('click',(event) => {
        let eventClassName = event.target.className;
        let key = event.target.textContent;
        
        switch (eventClassName) {
            case "num":
                (display === "0") ? display = key : display += key;
                break;

            case "dot":
                display.includes(".") ? display : display += key;
                break;

            case "equals":
                num2 = Number(display);
                display = String(operate(oper,num1,num2));
                // num1 = Number(display);
                break;
            
            case "negate":
                if (!oper)  display = String(-Number(display));
                break;
        
            default:
                break;
        }



        // console.log(eventClassName);

        // let eventKey = event.target.textContent;
        // if(eventKey === "clear") {
        //     display = "0";
        //     num1 = 0;
        //     num2 = 0;
        // }
        // else if(eventKey === ">" && display !== "Bacche ki jaan lega kya!" && display !== "0") 
        //     display = display.slice(0,-1);
        // else if(eventKey === "="){
        //     num2 = Number(display);
        //     display = String(operate(oper,num1,num2));
        //     num1 = Number(display);
        // }
        // else if(display.length < 23 && event.target.className !== "oper"){
        //     // checks if user has clicked dot
        //     ((eventKey === ".") && !(display.includes("."))) ? display += eventKey :
        //     //checks if user has clicked a number
        //     (!(isNaN(eventKey)) && display !== "0") ?  display += eventKey : 
        //     (!(isNaN(eventKey)) && display === "0") ?  display = eventKey :  display;
        // }
        // else if(event.target.className === "oper"){
        //     num1 = Number(display);
        //     oper = eventKey;
        //     // display = "";
        // }
        // else 
        //     display = "Bacche ki jaan lega kya!";
        
        savedNum.textContent = display;
    });
});

