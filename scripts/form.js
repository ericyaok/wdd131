const today = new Date();
const year = today.getFullYear();

let yearSpan = document.getElementById("currentyear");
yearSpan.innerHTML = year;

const lastModified = document.lastModified;

let modifiedspan = document.getElementById("modified");
modifiedspan.innerHTML = lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];



const selectElement = document.getElementById('selectprod');

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });


}


// Function to get the counter value from local storage
function getCounter() {
    return parseInt(localStorage.getItem('reviewCounter')) || 0;
}

// Function to save the counter value to local storage
function saveCounter(value) {
    localStorage.setItem('reviewCounter', value);
}

let counter = getCounter(); // Initialize counter with the value from local storage

// Get references to the button and the counter display
const reviewButton = document.getElementById('reviewButton');
// const counterDisplay = document.getElementById('counter');

// Display the initial counter value
// counterDisplay.textContent = counter;

// Add click event listener to the review button
reviewButton.addEventListener('click', () => {
    counter++; // Increment the counter
    // counterDisplay.textContent = counter; // Update the displayed counter value
    saveCounter(counter); // Save the updated counter value to local storage
});
