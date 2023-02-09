const numero = 3.14;
var nome = "Aldo";
let stato = "cliente";

//concatena
document.getElementById("concatena").innerHTML = nome + " , " + stato + " , " + numero;

//concatena2
let concatena = nome + " , " + stato + " , " + numero;
document.getElementById("concatena2").innerHTML = concatena;

//var-let-final
var mario = "mario";
let carla = "carla";
document.getElementById("var").innerHTML = mario;
document.getElementById("let").innerHTML = carla;
carla=mario
document.getElementById("final").innerHTML = carla;

//let2-let3-final2
document.getElementById("let2").innerHTML = mario;
mario=carla
document.getElementById("let3").innerHTML = mario;
document.getElementById("final2").innerHTML = mario;

//valore
const iniziale = 15;
var totale;

//iniziale
document.getElementById("iniziale").innerHTML += iniziale;
totale= iniziale+15;
//valore1
document.getElementById("valore1").innerHTML += totale + " , " + ++totale; 
totale= iniziale-10;
//valore2
document.getElementById("valore2").innerHTML += totale + " , " + --totale; 
totale= iniziale*3;
//valore3
document.getElementById("valore3").innerHTML += totale;
totale= iniziale/3;
//valore4
document.getElementById("valore4").innerHTML += totale;
//valore5
document.getElementById("valore5").innerHTML += iniziale + " è un numero";