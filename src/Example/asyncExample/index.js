const doSomethingAsync = ()=>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Do Something Async'),4000)
        : reject (new Error('Test Error'))
    });
}

const doSomething = async () =>{
    const something = await doSomethingAsync()
    console.log(something);
}

const anotherFunction = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}


console.log('Before');
doSomething();
console.log('After')

console.log('Before 1');
anotherFunction();
console.log('After 1')

/*
    VENTAJAS 
    - Se puede manejar el try catch
    - Son mas faciles de leer, y esperar a que algo suceda
    
    DESVENTAJAS
    -Tenemos que esperar a que terminen unos llamados
    -Se necesita otra herramienta para que funcione en todos los navegadoes

*/