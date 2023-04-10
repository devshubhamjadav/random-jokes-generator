let button = document.querySelector("button")

async function getJoke() {

    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json()
    let heading = document.querySelector("h5")
    heading.style.color = 'white'
    heading.innerText = joke.value
}


button.addEventListener("click", getJoke)