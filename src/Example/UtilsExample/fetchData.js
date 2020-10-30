let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) =>{
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            //enlaces de estados: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
            // el 4 indica que se completo la peticion
            if(xhttp.readyState === 4){
                (xhttp.status ===200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
            }
        });
        xhttp.send();
    });
}

//se utiliza module.exports porque se usa node
module.exports = fetchData;