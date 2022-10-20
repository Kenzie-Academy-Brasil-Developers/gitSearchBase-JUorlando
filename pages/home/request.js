import { renderCard } from "../profile/render.js"
import { renderRepos } from "../profile/render.js"
import { btnEvent } from "./events.js"

export async function requestUser (user) {

   await fetch(`https://api.github.com/users/${user}`).then((res) => res.json()).then((res) => renderCard(res))

}

export async function requestRepos (user) {

   await fetch(`https://api.github.com/users/${user}/repos`).then((res) => res.json()).then((res) => renderRepos(res))

}

export async function btnSkin (button){

   const users = await fetch("https://api.github.com/users", {
       method: "GET",
       headers: {
           'Content-Type': "application/json"
       }
   })
   .then(res => res.json())
   .then(res => {
       button.innerHTML = ""
       button.innerText = "Ver perfil do github"
       
   })

   return users
}
