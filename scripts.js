
// Variables globales
var verdadero = true; // variable booleana solo true o false
var nombreGlobal = 'xavier'; // cadena de texto
var edad = 30.5; // numero

var nombres = [nombreGlobal, 'ferran', 'laura']; // array: coleccion de cadenas de texto

var countries = ['spain', 'portugal', 'france', 'italy'];

// Funcion: bloque de codigo encapsulado
function displayName(nombre) {
    // Variable de funcion
    var saludo = 'hola';

    var isFerran = nombre === 'ferran';
    // console.log(isFerran);

    if(!isFerran || nombre === 'xavier'){
        console.log(saludo + ' ' + nombre + ' grande!!!')
    } else {
        console.log(saludo  + nombre)
    }
}

// Ejecucion de la funcion
// displayName('xavier');
// displayName('ferran');
// displayName('laura');

function displayNames(){

    for (let index = 0; index < countries.length; index++) {
        if(countries[index] === 'spain' || countries[index] === 'italy'){
            console.log(countries[index].toUpperCase() + ' OLE!')
        } else if (countries[index] === 'france'){
            console.log(countries[index].toUpperCase() + ' BAGUETET')
        } else {
            console.log(countries[index].toUpperCase())
        }
    }
}

displayNames();

console.log(countries);
//console.log(nombreGlobal.toUpperCase());