import Stack from './stack.js';

const operatorStack = new Stack();
const valuesStack = new Stack();
let display = document.getElementById('display');
let operatorPushed = false;

document.getElementById('buttons-container').addEventListener('click', event => {
    let buttonId = event.target.id;
    switch (buttonId) {
        case 'clear':
            display.innerHTML = '0';
            break;
        case 'plus-minus':
            if(valuesStack.isEmpty()&&display.innerHTML!=='0'){
                display.innerHTML = parseFloat(display.innerHTML)*-1;
                break;
            }
            let value = valuesStack.pop();
            value *= -1;
            valuesStack.push(value);
            display.innerHTML = value;
            break;
        case 'percent':

            break;
        case 'divide':
        case 'multiply':
        case 'subtract':
        case 'add':
        case 'decimal':
            valuesStack.push(parseFloat(display.innerHTML));
            operatorStack.push(buttonId);
            operatorPushed = true;
            break; 
        case 'equals':
            
        default:
            if(display.innerHTML==='0'||operatorPushed){
                display.innerHTML = document.getElementById(buttonId).innerHTML;
                operatorPushed = false;
                break;
            }
            display.innerHTML += document.getElementById(buttonId).innerHTML;
    }
});