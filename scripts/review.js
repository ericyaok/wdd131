
function getCounter() {
    return parseInt(localStorage.getItem('reviewCounter')) || 0;
}

let counter = getCounter(); // Initialize counter with the value from local storage
const counterDisplay = document.getElementById('counter');
counterDisplay.textContent = counter; // Update the displayed counter value