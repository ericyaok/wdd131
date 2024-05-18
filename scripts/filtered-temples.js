temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Minato-ku, Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tegucigalpa-honduras/800x500/tegucigalpa-honduras-temple-rendering-1063891-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June, 15",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-675332-wallpaper.jpg"
    },
    // Add more temple objects here...
];






const today = new Date();
const year = today.getFullYear();

let yearSpan = document.getElementById("currentyear");
yearSpan.innerHTML = year;

const lastModified = document.lastModified;

let modifiedspan = document.getElementById("modified");
modifiedspan.innerHTML = lastModified;


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}



renderCards(temples);




function createCard(obj) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${obj.templeName}</h3>
        <p>Location: ${obj.location}</p>
        <p>Dedicated: ${obj.dedicated}</p>
        <p>Area: ${obj.area}</p>
        <img src="${obj.imageUrl}" loading="lazy" alt="${obj.templeName}">
    `;
    return card;
}

function renderCards(filteredObjects) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    filteredObjects.forEach(obj => {
        container.appendChild(createCard(obj));
    });
}


function filterNew(arr) {

    const filteredArr = temples.filter(temp => extractYear(temp.dedicated) > 2000);
    renderCards(filteredArr);
}

function filterOld() {

    const filteredArr = temples.filter(temp => extractYear(temp.dedicated) < 1900);
    renderCards(filteredArr);
}


function filterLarge(arr) {

    const filteredArr = temples.filter(temp => temp.area > 90000);
    renderCards(filteredArr);
}

function filterSmall(arr) {

    const filteredArr = temples.filter(temp => temp.area < 10000);
    renderCards(filteredArr);
}

function renderAll() {
    renderCards(temples)
}




function extractYear(str) {
    const firstFourChars = str.substring(0, 4);
    return parseInt(firstFourChars, 10);
}




