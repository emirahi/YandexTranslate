
document.querySelector("#language").value = "en"
document.querySelector("#language").addEventListener("change",selectChange)


function selectChange(e){
    image = document.querySelector("#outputImage")
    lang = document.querySelector("#outputLanguage")

    if ( e.target.value == "en"){
        image.src = "images/en.png"
        lang.textContent = "İngilizce"
    }
    else if (e.target.value == "de"){
        image.src = "images/de.png"
        lang.textContent = "Almanca"
    }
    else if (e.target.value == "es"){
        image.src = "images/es.png"
        lang.textContent = "İspanyolca"
    }

    
}