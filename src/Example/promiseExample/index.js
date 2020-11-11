const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Correct');
        }else{
            reject('F');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True')
            },2000)
        }else{
            const error = new Error("EFESOTA");
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })

/*
    VENTAJAS
    -Es facilmente enlazable, se puede enlazar un then con el siguiente return y hacer mas llamada
    -Un poco mas facil e intuitivo de leer (respecto a los callbacks)
    -Permite tener gran capacidad de trabajar con asincronismo
    -Es una de las recomendaciones para trabajar con asincronismo
    DESVENTAJAS.
    -No maneja excepciones, sino que maneja un catch
    -Podemos tener errores si no se retorna el siguiente llamado
    -Para poder manejar en todos los navegadores se necesita herramientas como babel 

*/