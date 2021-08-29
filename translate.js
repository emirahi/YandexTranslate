
class Translate {

    getTranslate(lang, toLang, word) {
        return new Promise(function(resolve,reject) {
            let url = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${word}&to=${toLang}&from=${lang}`
            console.log(url);
            fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
                    "x-rapidapi-key": "your-apikey"
                }
            }).then(response => resolve(response.text()))
              .catch(response => reject(response))
        })
    }

}

