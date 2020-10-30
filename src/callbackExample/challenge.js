//EJEMPLO HACIENDO LLAMADA A API DE RICK AND MORTY ejecutandose desde la terminal
//Este se usa con callbacks

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        //enlaces de estados: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error '+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}