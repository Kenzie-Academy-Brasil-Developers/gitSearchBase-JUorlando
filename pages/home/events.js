import { btnSkin } from "./request.js"
import { favoriteAndRemove } from "./favorito.js"

export function btnEvent (){

    const input = document.querySelector("#input")

    
    const buttonSearch = document.getElementById("button")

    input.addEventListener("input", () => {

        document.querySelector("#button").disabled = false

    })

    console.log(input)
    buttonSearch.addEventListener("click", () => {

        buttonSearch.innerHTML = ""

        const img = document.createElement("img")
        img.src = "../img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"

        buttonSearch.appendChild(img)

        btnSkin(buttonSearch)
        
        
        async function findSave() {
            
            try {
                
                const request = await fetch(`https://api.github.com/users/${input.value}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                
                if (request.ok) {
                    const response = await request.json()
                    
                    localStorage.setItem("user", input.value)

                    favoriteAndRemove(response)
        
                    setTimeout(() => {
                        window.location.assign("./pages/profile/index.html")
                    }, 500)
                } else {
                    let btnNot = document.querySelector(".user-not-found")
                    btnNot.classList = "user-apear"
                }
        
            } catch (err) {
                let btnNot = document.querySelector(".user-not-found")
                btnNot.classList = "user-apear"
            }
        }
        console.log(findSave())
    })
    
}