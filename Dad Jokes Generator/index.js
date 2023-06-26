const buttonEl = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke");

const apiKey = "nMhm9FRSiztoBoCNWNC0YA==xdD2xegcorX4dEKx";
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        buttonEl.disabled = true;
        buttonEl.innerText = "Loading...";

        const response = await fetch(apiURL,options)
        const data = await response.json()

        buttonEl.disabled = false;
        buttonEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
            
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later...";
        buttonEl.disabled = false;
        buttonEl.innerText = "Tell me a joke";
        console.log(error)
    }
}
buttonEl.addEventListener("click",getJoke);