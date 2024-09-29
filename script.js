document.addEventListener('DOMContentLoaded', () => {
    const jokeView = document.getElementById('jokeDisplay');
    const viewBtn = document.getElementById('jokeButton');


    viewBtn.addEventListener('click', async () => {
        const myJoke = await getJoke();
        displayJoke(myJoke);
    })

    async function getJoke() {
        const url = `https://icanhazdadjoke.com/`
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        const joke = data.joke
        // console.log("RESPONSE", data);
        // console.log("JOKE", data.joke); 
        return joke
    }

    function displayJoke(myJoke) {
        jokeView.textContent = myJoke
    }
})