var nome;
var cognome;
var colorePreferito;

var nome = prompt("Inserisci nome:");
document.getElementById("Nome").innerHTML = nome;
console.log("Inserimento nome");

var cognome = prompt("Inserisci cognome:");
document.getElementById("Cognome").innerHTML = cognome;
console.log("Inserimento cognome");


var colorePreferito = prompt("Colore preferito:");
document.getElementById("ColorePreferito").innerHTML = colorePreferito;
console.log("Inserimento colore");

document.getElementById("PasswordGenerata").innerHTML = (nome + cognome + colorePreferito + 21);
console.log("Generazione Password");