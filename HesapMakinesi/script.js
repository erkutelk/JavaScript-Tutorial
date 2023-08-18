const display=document.querySelector('.calculator-input');//Sayi Girisinin olacaği kısım
const keys=document.querySelector('.calculator-keys');//Bütün butonların yer aldığı kısım
let displayValue='0';

function updateDisplay(){
    display.value=displayValue;
}

keys.addEventListener('click',function(e)
{
    const element=e.target;
    console.log(element);
    if (!element.matches('button'))return;
    console.log(element)

    if(element.classList.contains('operator')){
        console.log('operator',element.value)
        return;
    }
    
    if(element.classList.contains('decimal')){
        console.log('decimal',element.value)
        inputDecimal();
        updateDisplay();
        return;
    }

    if(element.classList.contains('clear')){
        console.log('clear',element.value)
        return;
    }
    inputNumber(element.value)
    updateDisplay();
    
    
})

function inputNumber(num){
    displayValue=displayValue==='0'?num: displayValue+num;
}

function inputDecimal(){
    displayValue+='.';
}