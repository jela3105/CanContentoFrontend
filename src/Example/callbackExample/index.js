function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,2,sum)); 

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

/*
    VENTAJAS:
    -simple: garantiza que una funcion recibe a otra funcion que se va a ejecutar sin problemas
    -se puden correr en cualquier navegador
    DESVENTAJAS:
    -las estructura es tosca ya que se tiene que ir anidando volviendose callback hell (muchas anidaciones y 
        puede perderse la composicion)
    -flujo poco intuitivo y tedioso por no poder manejar una excepcion
 */