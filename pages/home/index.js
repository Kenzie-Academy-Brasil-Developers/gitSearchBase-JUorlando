function renderMiniCard (img, url){
    
    const TagUl = document.querySelector(".ul-card-section-1")
    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagAncora = document.createElement("a")
    
    tagLi.classList.add("li-card-section-1")
    tagImg.classList.add("img-section-1")
    tagAncora.classList.add("text-card-1")
    
    tagLi.append(tagImg, tagAncora)
    TagUl.appendChild(tagLi)

    tagImg.src = img
    tagAncora.url = url

    tagAncora.innerText = "Achados recentes"

    return tagLi
}

renderMiniCard()