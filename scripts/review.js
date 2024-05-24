
function getCounter() {
    return parseInt(localStorage.getItem('reviewCounter')) || 0;
}

let counter = getCounter(); 
const counterDisplay = document.getElementById('counter');
counterDisplay.textContent = counter; 