# Dad Joke Maker

A fun and interactive web application that fetches random jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/) and displays them on the screen with a button click. The project is built using HTML, JavaScript, and SCSS, with modern design principles.

## Features
- Fetches random jokes using `fetch` and `async/await`.
- Displays jokes in a sleek, responsive UI.
- Simple, clean interface with hover and animation effects.

## Technologies
- **HTML**: Structure of the web page.
- **JavaScript**: Fetches jokes and handles the display.
- **SCSS**: Provides styling and responsiveness.

## How to Use
1. Clone this repository or download the project files.
2. Open `index.html` in your browser.
3. Click the **"Make me laugh!"** button to fetch and display a random joke.
4. https://dadjokes-adityasolves.netlify.app/

## Code Snippet
Here’s an example of how we fetch the joke:

```javascript
async function getJoke() {
    const url = `https://icanhazdadjoke.com/`;
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    return data.joke;
}
