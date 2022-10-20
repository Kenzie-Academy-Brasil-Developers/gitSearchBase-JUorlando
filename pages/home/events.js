import { btnSkin } from "./request.js"

export function btnEvent (){

    const input = document.querySelector("#input")
    
    const buttonSearch = document.getElementById("button")

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
                    
                    localStorage.setItem("user", JSON.stringify(input.value))

                    localStorage.setItem("favorito", JSON.stringify(response))
        
                    setTimeout(() => {
                        window.location.assign("./pages/profile/index.html")
                    }, 4000)
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