export function renderCard(elt){
  
    const mainList = document.querySelector('.app')
 
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
    tagCargo.innerText = elt.bio
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

    mainList.append(tagSectionHead)

}

export function renderRepos (arr){

  const mainList = document.querySelector('.app')
  const tagSectionCards = document.createElement("section")
  const tagUl = document.createElement("ul")

    arr.forEach((elt) => {

      const tagLi = document.createElement("li")
      const tagCardTitle = document.createElement("h2")
      const tagCardText = document.createElement("p")
      const tagFormButton = document.createElement("form")
      const tagReposit = document.createElement("button")
      const tagDemo = document.createElement("button")
  
      tagSectionCards.classList = "section-cards"
      tagUl.classList = "ul-card"
      tagLi.classList = "li-card"
      tagCardTitle.classList = "card-title"
      tagCardText.classList = "card-text"
      tagFormButton.classList = "form-button"
      tagReposit.classList = "card-button-repository"
      tagDemo.classList = "card-button-demo"
  
      tagCardTitle.innerText = elt.name
      tagCardText.innerText = elt.description
      tagReposit.innerText = "Repositório"
      tagReposit.type = "button"

      tagReposit.addEventListener("click", () => {

        window.location.href = elt.html_url

      })
      
      tagDemo.innerText = "Demo"
      tagDemo.type = "button"

      tagDemo.addEventListener("click", () => {

        window.location.href = elt.url

      })
  
      tagFormButton.append(tagReposit, tagDemo)
      tagLi.append(tagCardTitle, tagCardText, tagFormButton)
      tagUl.append(tagLi)

    })

    tagSectionCards.append(tagUl)
    mainList.append(tagSectionCards)

}