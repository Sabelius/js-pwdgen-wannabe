var Nome;
var Cognome;
var ColorePreferito;

var Nome = prompt("Inserisci nome:");
document.getElementById("Nome").innerHTML = Nome;
console.log("Inserimento nome");

var Cognome = prompt("Inserisci cognome:");
document.getElementById("Cognome").innerHTML = Cognome;
console.log("Inserimento cognome");


var ColorePreferito = prompt("Colore preferito:");
document.getElementById("ColorePreferito").innerHTML = ColorePreferito;
console.log("Inserimento colore");

document.getElementById("PasswordGenerata").innerHTML = (Nome + Cognome + ColorePreferito + 21);
console.log("Generazione Password")