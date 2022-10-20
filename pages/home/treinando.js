import { btnEvent } from "./events.js";
import {renderMiniCard} from "./render.js"
import { userAlreadyExist } from "./favorito.js"

const save = JSON.parse(localStorage.getItem("favorito"))
console.log(save)
btnEvent()
renderMiniCard(save)
userAlreadyExist(JSON.parse(localStorage.getItem("favorito")))