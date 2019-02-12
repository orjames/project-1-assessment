var plusButtonElem;
var minusButtonElem;
var totalValueElem;
var inputValueElem;
var totalValue = 0;

// this function adds the value that the user inputted in the input field to the total value displayed on the app
function addInput() {
    let valueToAdd = parseInt(inputValueElem.value);
    totalValue = totalValue + valueToAdd;
    updateColor();
    totalValueElem.textContent = `${totalValue}`;
}

// this function subtracts the value that the user inputted in the input field from the total value displayed on the app
function subtractInput() {
    let valueToSubtract = parseInt(inputValueElem.value);
    totalValue = totalValue - valueToSubtract;
    updateColor();
    totalValueElem.textContent = `${totalValue}`;
}

// when the total value drops below zero, turns the total value font to red, if not black
function updateColor() {
    if (totalValue < 0) {
        totalValueElem.style.color = 'red';
    } else {
        totalValueElem.style.color = 'black';
    }
}

// assigns variables to DOM content, initialized the total value to zero (starting totalValue), and adds event listeners to the two buttons
function ready() {
    console.log('DOM is ready');
    plusButtonElem = document.getElementById('plus');
    minusButtonElem = document.getElementById('minus');
    totalValueElem = document.getElementById('total');
    inputValueElem = document.getElementById('input');
    totalValueElem.textContent = `${totalValue}`;
    plusButtonElem.addEventListener('click', addInput);
    minusButtonElem.addEventListener('click', subtractInput);
}
document.addEventListener('DOMContentLoaded', ready);


