function render(arr) {
    const mainList = document.querySelector('.app')
  
    mainList.innerHTML = ''
  
    arr.forEach(elt => {
      
      const card = renderCard(elt)
  
      mainList.appendChild(card)
    })
  }

function renderCard(elt){

    const tagSectionHead  = document.createElement("section")
    const tagDivImg  = document.createElement("div")
    const tagImgHead  = document.createElement("img")
    const tagDivEsp = document.createElement("div")
    const tagName = document.createElement("p")
    const tagCargo = document.createElement("p")
    const tagFormButtons = document.createElement("form")
    const tagButtonEmail = document.createElement("button")
    const tagButtonUser = document.createElement("button")


    tagSectionHead.classList = "section-head"
    tagDivImg.classList = "div-user"
    tagImgHead.classList = "img-user"
    tagDivEsp.classList = "div-esp"
    tagName.classList = "name"
    tagCargo.classList = "cargo"
    tagFormButtons.classList = "form-buttons"
    tagButtonEmail.classList = "button-email"
    tagButtonUser.classList = "button-user"

    tagImgHead.src = elt.avatar_url
    tagName.innerText = elt.login
    tagCargo.innerText = elt.type
    tagButtonEmail.innerText = "Email"
    tagButtonUser.innerText = "Trocar de usuário"
    tagButtonUser.type = "button"

    tagButtonUser.addEventListener("click", () => {
      
      window.location.href = "http://127.0.0.1:5500/index.html?"
    })

    tagFormButtons.append(tagButtonEmail, tagButtonUser)
    tagDivEsp.append(tagName, tagCargo)
    tagDivImg.append(tagImgHead)
    tagSectionHead.append(tagDivImg, tagDivEsp, tagFormButtons)

    return tagSectionHead

}