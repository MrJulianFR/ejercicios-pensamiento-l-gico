// Crea una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial.
// Ejemplo: calcularFactorial(5) debería devolver 120.

let numero = 5;
let resultado =1;

for(let i = 1; i <= numero; i++){
 resultado = resultado * i
}
console.log(resultado)

// Crea una función llamada reversoCadena que tome una cadena como parámetro y devuelva la cadena al revés.
// Ejemplo: reversoCadena("hola") debería devolver "aloh".


function reverso(text){
    let resultado = [];

    for(let i = 0; i < text.length; i++ ){
        resultado.unshift(text[i])
    }
    return console.log(resultado.join(""));
}

reverso("hola")
// otra forma mas basica:

function reverso(text) {
    let resultado = "";

    for (let i = text.length - 1; i >= 0; i--) {
        resultado += text[i];
    }

    return resultado;
}

let textoRevertido = reverso("hola");
console.log(textoRevertido);

// con metodos

function reverseMethods(text){
    let alreves = text.split("").reverse().join("")
    console.log(alreves)
}
reverseMethods("hola, que mas")


// Crea una función llamada esPrimo que determine si un número dado es primo.
// Ejemplo: esPrimo(7) debería devolver true.

function esPrimo(numero){
    if(numero <= 1){
        return false
    }
    for(let i = 2; i <= numero /2; i++){
        if(numero % i == 0){
           return false
        }
    }
    
    return true
}
esPrimo(7)

function esPrimo(numero){
    let resultado = "";
    for(let i = 2; i < numero; i++){
        if(numero == 2){
           resultado = "Es primo 2"
        }
        else if(numero % i == 0){
            resultado = "No es primo"
            return console.log(resultado)
        }
        else{
            resultado = "Es primo"
        }
    }
    console.log(resultado)
}
esPrimo(7)

function essPrimo(numero){
    let resultado = "";

    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        resultado = "No es primo";
    } else {
        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                resultado = "No es primo";
                return console.log(resultado);
            }
        }
        resultado = "Es primo";
    }
    console.log(resultado);
}

esPrimo(7);