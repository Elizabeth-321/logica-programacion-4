document.getElementById("numero").addEventListener("click", numero1)
function numero1() {   // Se define una funcion para que cuando se llame se ejecutara  todo lo que se coloce dentro de las llaves {}//
let numero;  // se declara la  variable para almacenar el valor que ingrese el usuario

for (let i  = 0; i < 1; i++){ // Se usa bucle for  el let i = 0 (esta variable ayuda a contar cuantas veces se repetira ) i < 5 (mientras la condicion sea verdadera el bucle se repetira 5 veces) y i++ (instruccion de incremento permite que el bucle avance)
    
numero = parseFloat(prompt("ingresa un numero"))

 if (isNaN(numero)){//el metodo isNaN (no es numero)comprueba si el usuario ingreso algo que no es un numero //
    alert("Este numero no es valido,intentalo nuevamente")
     return;

 }
const fibo = calcularFibonacci(numero)

document.getElementById("resultado").innerHTML = `la serie de fibonacci es: ${fibo.join(",")}`;}
}
function calcularFibonacci(n){
 let fibo = [0,1];  // se inicializa la serie de fibocon 0 y 1
 for (let i = 2; i< n; i++){
    fibo.push(fibo[i-1] + fibo[i - 2]);//  con esto se tiene acceso a los 2 ultimos numeros en el arregloy se suman para obtene el siguiente numero
 }
 return fibo.slice(0,n);
}

