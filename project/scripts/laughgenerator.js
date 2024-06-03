
//Default jokes
jokes = [
    { joke: "Why don't scientists trust atoms? Because they make up everything!", author: "John Doe" },
    { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.", author: "Jane Smith" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", author: "Bill Murray" },
    { joke: "Why don’t skeletons fight each other? They don’t have the guts.", author: "Ellen DeGeneres" },
    { joke: "What do you call fake spaghetti? An impasta.", author: "Chris Rock" },
    { joke: "Why did the tomato turn red? Because it saw the salad dressing!", author: "John Doe" },
    { joke: "What do you call a bear with no teeth? A gummy bear!", author: "Jane Smith" },
    { joke: "What did one ocean say to the other ocean? Nothing, they just waved.", author: "Bill Murray" },
    { joke: "Why did the bicycle fall over? Because it was two-tired!", author: "Ellen DeGeneres" },
    { joke: "How does a penguin build its house? Igloos it together!", author: "Chris Rock" },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", author: "John Doe" },
    { joke: "What do you get when you cross a snowman and a vampire? Frostbite!", author: "Jane Smith" },
    { joke: "Why did the cookie go to the doctor? It was feeling crumbly.", author: "Bill Murray" },
    { joke: "How do you organize a space party? You planet.", author: "Ellen DeGeneres" },
    { joke: "What did one hat say to the other? You stay here, I'll go on ahead!", author: "Chris Rock" },
    { joke: "Why don't eggs tell jokes? They'd crack each other up!", author: "John Doe" },
    { joke: "Why was the math book sad? It had too many problems.", author: "Jane Smith" },
    { joke: "What's orange and sounds like a parrot? A carrot!", author: "Bill Murray" },
    { joke: "Why did the bicycle fall over? Because it was two-tired!", author: "Ellen DeGeneres" },
    { joke: "What do you get when you cross a snowman and a vampire? Frostbite!", author: "Chris Rock" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", author: "John Doe" },
    { joke: "Why don't scientists trust atoms? Because they make up everything!", author: "Jane Smith" },
    { joke: "What do you call fake spaghetti? An impasta.", author: "Bill Murray" },
    { joke: "Why did the tomato turn red? Because it saw the salad dressing!", author: "Ellen DeGeneres" },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", author: "Chris Rock" },
    { joke: "How does a penguin build its house? Igloos it together!", author: "John Doe" },
    { joke: "Why did the bicycle fall over? Because it was two-tired!", author: "Jane Smith" },
    { joke: "What do you get when you cross a snowman and a vampire? Frostbite!", author: "Bill Murray" },
    { joke: "Why don't eggs tell jokes? They'd crack each other up!", author: "Ellen DeGeneres" },
    { joke: "Why was the math book sad? It had too many problems.", author: "Chris Rock" }
];


// Retrieve jokes from local storage
const jokesString = localStorage.getItem('localjokes');
const localjokes = JSON.parse(jokesString);
console.log(localjokes)

if (localjokes.length > 0) {
    localjokes.forEach(joke => {
        jokes.push(joke);
    });
}


function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function updateJokeAndAuthor() {
    let currentJoke = getRandomJoke();

    const jokeElement = document.getElementById("joke");
    const authorElement = document.getElementById("author");

    jokeElement.innerHTML = currentJoke.joke;
    authorElement.innerHTML = `Author: ${currentJoke.author}`;
}


function displayJokes() {
    const container = document.getElementById("all-jokes");

    jokes.forEach(joke => {
        const jokeDiv = document.createElement("div");
        const jokeParagraph = document.createElement("p");
        jokeParagraph.textContent = joke.joke;

        const authorSpan = document.createElement("span");
        authorSpan.textContent = `Author: ${joke.author}`;

        jokeDiv.appendChild(jokeParagraph);
        jokeDiv.appendChild(authorSpan);
        container.appendChild(jokeDiv);
    });
}


function getDocumentName() {

    const documentName = document.title;
    return documentName;
}

const documentName = getDocumentName();

if (documentName == "All Jokes") {
    displayJokes();
}


function submitForm() {
    const author = document.getElementById("name").value;
    const joke = document.getElementById("joke").value;

    const existingJokes = JSON.parse(localStorage.getItem('localjokes')) || [];

    const newJoke = {
        author: author,
        joke: joke
    };

    existingJokes.push(newJoke);
    localStorage.setItem('localjokes', JSON.stringify(existingJokes));
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var hammenu = document.getElementById("hamburger-menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        hammenu.style.display = "none";
    } else {
        menu.style.display = "none";
        hammenu.style.display = "block";
    }
}



