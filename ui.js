
document.querySelector("#language").value = "en"

document.querySelector(".btn").addEventListener("click", (e) => {

    msg = document.querySelector("#word").value
    lang = document.querySelector("#language").value
    console.log(lang);
    const trans = new Translate()
    trans.getTranslate("tr",lang,msg)
    .then(response => {
        langAvailable = document.querySelector("#language").value

        if (langAvailable == "en"){
            document.querySelector("#outputWord").textContent = JSON.parse(response).translated_text.en
        }
        else if (langAvailable == "de"){
            document.querySelector("#outputWord").textContent = JSON.parse(response).translated_text.de
        }
        else if (langAvailable == "es"){
            document.querySelector("#outputWord").textContent = JSON.parse(response).translated_text.es
        }
        
        
    })

    e.preventDefault()
})


