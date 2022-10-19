import { btnEvent } from "./events.js";
import {renderMiniCard} from "./render.js"

btnEvent()
renderMiniCard(JSON.parse(localStorage.getItem("favorito")))