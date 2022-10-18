function getUserLocation(){
    
    return JSON.parse(localStorage.getItem("user")) || []
    
}

getUserLocation()

function passandoMap (arr){

    arr.map(element => {
        
        const TagUl = document.querySelector(".ul-card-section-1")

        TagUl.innerHTML = ""

        let miniCard = renderMiniCard(element)

        TagUl.appendChild(miniCard)

        
    });
}

passandoMap(getUserLocation())

export function renderMiniCard (itens){

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagAncora = document.createElement("a")
    
    tagLi.classList.add("li-card-section-1")
    tagImg.classList.add("img-section-1")
    tagAncora.classList.add("text-card-1")
    
    tagImg.src = itens.avatar_url
    tagAncora.href = itens.html_url
    
    tagAncora.innerText = "Achados recentes"
    
    tagLi.append(tagImg, tagAncora)

    return tagLi
}