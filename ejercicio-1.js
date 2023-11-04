// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

function calcularIva(precio){
    let iva = 21;
    totalValor = precio +((precio* iva)/100)
    console.log(totalValor);
}
calcularIva(100);

// segunda forma:

function calcularIvaVr2(precio){
    precio += precio * 0.21
    console.log(precio) 
}

// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

// el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados.

function areaPerimetroCuadrado(lado){
    area = lado * lado;
    perimetro= lado * 4;
    console.log(`el area es = ${area} y el perimetro es = ${perimetro}`)
}
areaPerimetroCuadrado(4);


let nombre = prompt("Inserte tu nombre: " )
document.write(`Hola: ${nombre}`)

// Numero mayor 

function calcularNumeroMayor(num1, num2){
    if(num1 > num2){
        console.log(`el numero ${num1} es mayor que el numero  ${num2}`)
    }
    else{
        console.log(`el numero ${num2} es mayor que el numero  ${num1}`)
    }
}
calcularNumeroMayor(8, 3)

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

function numeroMayorTres(num1, num2, num3){
    if(num1 > num2 && num1 >num3){
        console.log(`El numero mayor es el ${num1}`)
    }
    else if(num2 > num1 && num2 >num3){
        console.log(`El numero mayor es el ${num2}`)
    }
    else{
        console.log(`El numero mayor es el ${num3}`)
    }
}

numeroMayorTres(10,30,4)

// Escribe un programa que pida un número y diga si es divisible por 2

function divisibleEntreDos(num){
     if(num % 2 == 0){
        console.log("Es divisible entre 2")
     }
     else{
        console.log("No es divisible entre 2")

     }
}
divisibleEntreDos(5)

// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function letrasA(frase){
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i].toLowerCase() == "a"){
            contador += 1;
        }
    }
    console.log(contador)
}
letrasA("A HolaaaA, pero, jaja Ayudame");

// scribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales (de forma individual)

function vocales(frase){
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    for(let i = 0; i < frase.length; i++){
        if(frase[i].toLowerCase() == "a"){
            contadorA += 1;
        }
        if(frase[i].toLowerCase() == "e"){
            contadorE += 1;
        }
        if(frase[i].toLowerCase() == "i"){
            contadorI += 1;
        }
        if(frase[i].toLowerCase() == "o"){
            contadorO += 1;
        }
        if(frase[i].toLowerCase() == "u"){
            contadorU += 1;
        }
    }
    console.log("Letras A: "+ contadorA+ "Letras E:"+contadorE + "letras I: " + contadorI + "letras O: " + contadorO + "letras U: " + contadorU);
}
vocales("AEIOUU");
// otra forma de hacerlo mas simplicado:

function vocalesOptimizado(frase){
    let fraseMinuscula = frase.toLowerCase();
    let contadorVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }

    for(let i = 0; i < fraseMinuscula.length; i++){
    let letra = fraseMinuscula[i];
    if('aeiou'.includes(letra)){
        contadorVocales[letra]++
    }
}
 let mensaje = "En la frase hay:\n"
for(let vocal in contadorVocales){
    mensaje += vocal.toUpperCase() + " hay: " + contadorVocales[vocal] + "\n"
}

console.log(mensaje)
}
vocalesOptimizado("hola a o")

// Escribe un programa que pida una frase y escriba las vocales que aparecen

function vocales2(frase){
    let letras = [];
    for(let i = 0; i < frase.length; i++){
        if(frase[i].toLowerCase() == "a" && !letras.includes("a")){
            letras.push("a")
        }
        if(frase[i].toLowerCase() == "e" && !letras.includes("e")){
            letras.push("e")
        }
        if(frase[i].toLowerCase() == "i" && !letras.includes("i")){
            letras.push("i")
        }
        if(frase[i].toLowerCase() == "o" && !letras.includes("o")){
            letras.push("o")
        }
        if(frase[i].toLowerCase() == "u" && !letras.includes("u")){
            letras.push("u")
        }

    }
    console.log(letras)
}

vocales2("holaa, una dos, epa.")

// Ota forma mas optimizada del mismo ejercicio

function vocales2optimizado(frase){
    let fraseMinuscula = frase.toLowerCase()
    let letrasEncontradas = [];

    for(let i = 0; i < fraseMinuscula.length; i++){
        let letra = fraseMinuscula[i]
        if(letra == "a" ||letra == "e" || letra == "i" || letra == "o" || letra == "u" ){
            if(!letrasEncontradas.includes(letra)){
                letrasEncontradas.push(letra)
            }
        }
    }
    console.log(`las letras encontradas son ${letrasEncontradas.join(", ")}`)
}
vocales2optimizado("hola, adiouus")

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro

function numeroDivisible(num){
    if(!isNaN(num)){
        if(num % 2 ==  0 || num % 3 ==  0 || num % 5 ==  0 || num % 7 ==  0){
            console.log("El numero es divisible")
            return
        }
        console.log("No es divisible");
    }
    else{
        console.log("ingresa un numero")
    }
}

numeroDivisible("a")

// Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

function numeroDivisibleEspecifico(num){
    if(!isNaN(num)){
        let divisores = []

        if(num %2 == 0){
            divisores.push(2)
        }
        if(num %3 == 0){
            divisores.push(3)
        }
        if(num %5 == 0){
            divisores.push(5)
        }
        if(num %7 == 0){
            divisores.push(7)
        }

        console.log(`El numero${num} es divisible entre ${divisores.join(", ")}`)
    }
    else{
        console.log("Ingresa un numero")
    }
}
numeroDivisibleEspecifico(15)

// Mas optimizado 

function numeroDivisibleEspecificoOptimizado(num){
    let divisores = [2,3,5,7]
    let divisoresAplicados = divisores.filter(divisor => num % divisor == 0)

    if(divisoresAplicados.length > 0){
        console.log(`El numero ${num} es divisible entre ${divisoresAplicados.join(", ")}`)
    }
    else{
        console.log(`El numero ${num} no es divisible`)
    }
}
numeroDivisibleEspecificoOptimizado(15)

// Escribir un programa que escriba en pantalla los divisores de un número dado

function divisoresDisponibles(num){
     let divisores = [];

     for(let i=1; i <= num; i++){
        if(num % i == 0){
            divisores.push(i)
        }
     }
     console.log(`Los numeros divisibles posible para ${num} son ${divisores.join(", ")}`)
}
divisoresDisponibles(100)

// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

function divisoresComunes(num1, num2){
    let divisores = [];
    let numeroMenor;

    if(num1 > num2){
        numeroMenor = num2;
    }
    else{
        numeroMenor = num1
    }
    for(let i = 1;  i <= numeroMenor; i++){
        if(num1 % i == 0 && num2 % i == 0){
            divisores.push(i)
        }
    }
    console.log(`Los numeros divisibles comunes para ${num1}  y ${num2} son ${divisores.join(", ")}`)

}
divisoresComunes(10,5)


// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

function numeroPrim2(num){
    let primo = 1;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            primo = 0;
            break
        }
    }
    if(num <= 1){
        primo = 0
    }
    if(primo == 1){
        console.log("El numero es primo")
    }
    else{
        console.log("el numero no es primo")
    }
}
numeroPrim2(19)