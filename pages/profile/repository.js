import { getUserLocation } from "./index.js"

getUserLocation()

export function renderRepos(arr) {
    const mainRepos = document.querySelector('.app')
  
    mainRepos.innerHTML = ''
  
    arr.forEach(elt => {
      const card = renderCardRepos(elt)
  
      mainRepos.appendChild(card)
    })
  }

function renderCardRepos (elt) {

    const tagSectionCards = document.createElement("section")
    const tagUl = document.createElement("ul")
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

    tagCardTitle.innerText = "Project Module 2 - Kenzie..."
    tagCardText.innerText = "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"
    tagReposit.innerText = "Repositório"
    tagDemo.innerText = "Demo"

    tagFormButton.append(tagReposit, tagDemo)
    tagLi.append(tagCardTitle, tagCardText, tagFormButton)
    tagUl.append(tagLi)
    tagSectionCards.append(tagUl)

    return tagSectionCards
}