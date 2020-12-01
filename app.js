var inputText = document.querySelector("#input")

var outputText = document.querySelector("#output")

var buttonTrns = document.querySelector("#button")


function generateUrl(text){
    var url = "https://api.funtranslations.com/translate/valyrian.json";

    return url + "?text=" + text;
}

function errorHandler(error){
    console.log("Some error occured " + error);
    alert ("Some error occured " + error);
}


function onClickTranslate (){

    var url = generateUrl(inputText.value);

    fetch(url)
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
        console.log(json);
    })
    .catch(errorHandler)
}

buttonTrns.addEventListener('click', onClickTranslate );

