const baseUrl = `https://api.github.com/users`
const myHeaders = {
    'Content-Type': 'application/json'
}

function search (){

    const buttonSearch = document.getElementById("button")
    

    buttonSearch.addEventListener("click", () => {
        
        window.location.href = "http://127.0.0.1:5500/pages/profile/index.html"
        buttonSearch.innerHTML = ""

        const img = document.createElement("img")
        img.src = "../img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"

        buttonSearch.appendChild(img)

        getApi(buttonSearch)

    })
}

function getApi (button) {

    const user = fetch(`${baseUrl}`, {
        method: 'GET',
        headers: myHeaders,
    })
    .then(res => res.json())
    .then(res => {
        filterUsers(res)
        console.log(res)
        button.innerHTML = ""
        button.innerText = "Ver perfil do github"
    })
    
    return user
}


function filterUsers(arr) {

    const textNotFound = document.querySelector(".user-not-found")
    
    
    arr.forEach(element => {
        
        const input = document.getElementById("user")
        
        input.addEventListener("input", event => {
        
            const inputValue = event.target.value.trim()
    
            const saveLocal = localStorage.getItem("user")
    
            if(inputValue === element.login && !saveLocal) {
    
                localStorage.setItem("user", JSON.stringify(element))
            }
            else {
                textNotFound.innerText = "Usuário não encontrado"
            }
    
        })
        
    });
    
}

search()