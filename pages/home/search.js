import { renderMiniCard } from "./index.js"

const baseUrl = `https://api.github.com/users`
const myHeaders = {
    'Content-Type': 'application/json'
}

function search() {

    const input = document.querySelector("#input")

    const buttonSearch = document.getElementById("button")

    const buttonNotFound = document.querySelector(".user-not-found")

    buttonSearch.addEventListener("click", async () => {

        buttonSearch.innerHTML = ""

        window.location.href = "http://127.0.0.1:5500/pages/profile/index.html"

        const img = document.createElement("img")
        img.src = "../img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"

        buttonSearch.appendChild(img)

        const apiComFilter = getApi1.filter((element) => element.login === input.value)

        localStorage.setItem("user", JSON.stringify(apiComFilter))

        console.log(apiComFilter)        

    })
}


async function getApi() {

    const user = await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return user
}

let getApi1 = await getApi()

search()