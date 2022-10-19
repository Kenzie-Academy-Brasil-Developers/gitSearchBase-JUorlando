import { btnSkin } from "./request.js"
import { getUsers } from "./request.js"

getUsers()

export function btnEvent (elt){

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


        const userComFind = elt.find(element => element.login === input.value)
        
        
        if(userComFind){
            
            localStorage.setItem("favorito", JSON.stringify(userComFind))
            
            localStorage.setItem("user", JSON.stringify(input.value))
    
            window.location.assign("./pages/profile/index.html")

        } else {

            let btnNot = document.querySelector(".user-not-found")
            btnNot.classList = "user-apear"
        }


        
    })
    
}