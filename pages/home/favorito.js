import { renderMiniCard } from "./render.js";

function getUserLocation () {

    return JSON.parse(localStorage.getItem("favorito")) || []
}

export function userAlreadyExist (user) {

   return getUserLocation().findIndex((element => element.login === user.login))
}

export function favoriteAndRemove (user) {

    let userFavoritados = getUserLocation ()

    let userExist = userAlreadyExist(user)

    if(userExist < 0){

        userFavoritados = [...userFavoritados, user]

    } else {

        userFavoritados.splice(userExist, 1)
    }
    console.log(userFavoritados)
    localStorage.setItem("favorito", JSON.stringify(userFavoritados))
}