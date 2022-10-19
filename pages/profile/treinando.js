import { requestRepos } from "../home/request.js"
import { requestUser } from "../home/request.js"

requestUser(JSON.parse(localStorage.getItem("user")))
requestRepos(JSON.parse(localStorage.getItem("user")))