const titolo = "La mia calcolatrice Javascript";
document.getElementById("titolo").innerHTML = titolo;


 function numeri(ops){ 
    document.getElementById("operations").value += ops;
 }
 
 function operazione() { 
    document.getElementById("operations").value = eval(document.getElementById("operations").value); 
 }
 
 function reset() { 
    document.getElementById("operations").value = ""; 
 }