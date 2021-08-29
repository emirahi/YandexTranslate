
class Translate {

    getTranslate(lang, toLang, word) {
        return new Promise(function(resolve,reject) {
            let url = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${word}&to=${toLang}&from=${lang}`
            console.log(url);
            fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
                    "x-rapidapi-key": "7807250710mshbdb2b550878c718p19d3d2jsn8c4248fedac6"
                }
            }).then(response => resolve(response.text()))
              .catch(response => reject(response))
        })
    }

}

