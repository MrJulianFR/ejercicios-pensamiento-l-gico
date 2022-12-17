// Encuentra la lógica en las siguientes operaciones y números:
/* 
5 + 4 = 19
8 + 2 = 610
10 + 8 = 218
12 + 9 = 321
18 + 2 = 1620
21 + 5 = 1626

Aquí observamos que el resultado es fruto del valor de la suma
y de las resta de los mismo valores concatenados 5-4 = 1, luego 5+4 = 9.
Concatenando ambos valores es 1 y 9 = 19. 
*/

// Implementando a código



function operacion(value1, value2){
    let suma = value1 + value2;
    let resta = value1 - value2;

    let concatenados = String(resta) + String(suma);

    return Number(concatenados);
}

operacion(5,4);



