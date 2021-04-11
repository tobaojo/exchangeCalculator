const currencyElement_1 = document.getElementById('currency-1');
const currencyElement_2 = document.getElementById('currency-2');
const amountElement1 = document.getElementById('amount-1');
const amountElement2 = document.getElementById('amount-2');
const rateElement = document.getElementById('rate');
const swap = document.getElementById("swap");

function calculate(){
const currency1 = currencyElement_1.value;
const currency2 = currencyElement_2.value;

fetch(`https://v6.exchangerate-api.com/v6/62d50dcd32b9e6303b273f60/latest/${currency1}`)
.then(res => res.json())
.then(data => {
//console.log(currency1, currency2);
const rate = data.conversion_rates[currency2];
//console.log(rate);

rateElement.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
amountElement2.value = (amountElement1.value * rate).toFixed(2);
})
}



//event listeners
currencyElement_1.addEventListener('change',calculate);
currencyElement_2.addEventListener('change', calculate);
amountElement1.addEventListener('input', calculate);
amountElement2.addEventListener('input',calculate);
swap.addEventListener('click',() => {
    const temp = currencyElement_1.value;
    currencyElement_1.value = currencyElement_2.value;
    currencyElement_2.value = temp;
    calculate();
} )