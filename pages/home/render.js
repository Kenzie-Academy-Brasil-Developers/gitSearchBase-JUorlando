export function renderMiniCard (itens){

    itens.forEach(element => {
        console.log(element)
        const TagUl = document.querySelector(".ul-card-section-1")
    
        let tagLi = document.createElement("li")
        let tagImg = document.createElement("img")
        let tagAncora = document.createElement("a")
        
        tagLi.classList.add("li-card-section-1")
        tagImg.classList.add("img-section-1")
        tagAncora.classList.add("text-card-1")
        
        tagImg.src = element.avatar_url
        tagAncora.href = element.html_url
        
        tagAncora.innerText = "Achados recentes"
        
        tagLi.append(tagImg, tagAncora)
        TagUl.append(tagLi)

        
    });

}