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
            valuesStack.push(parseFloat(display.innerHTML));
            operatorStack.push(buttonId);
            operatorPushed = true;
            break;
        case 'decimal':

            break;
        case 'equals':
            valuesStack.push(parseFloat(display.innerHTML));
            let evaluation = evaluate(operatorStack,valuesStack)
            valuesStack.push(evaluation);
            display.innerHTML = evaluation;
            break;
        default:
            if(display.innerHTML==='0'||operatorPushed){
                display.innerHTML = document.getElementById(buttonId).innerHTML;
                operatorPushed = false;
                break;
            }
            display.innerHTML += document.getElementById(buttonId).innerHTML;
    }
});

function evaluate(operatorStack, valuesStack){
    let value = valuesStack.pop();
    if(!operatorStack.isEmpty()){
        let operator = operatorStack.pop();
        switch(operator){
            case 'divide':
                value = valuesStack.pop()/value;
                break;
            case 'multiply':
                value = valuesStack.pop()*value;
                break;
            case 'subtract':
                value = valuesStack.pop()-value;
                break;
            case 'add':
                value = valuesStack.pop()+value;
                break;
            default:
                break;
        }
    }
    return value;
}