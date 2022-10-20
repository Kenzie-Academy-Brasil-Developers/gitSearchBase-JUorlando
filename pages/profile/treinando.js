import { requestRepos } from "../home/request.js"
import { requestUser } from "../home/request.js"

requestUser(localStorage.getItem("user"))
requestRepos(localStorage.getItem("user"))