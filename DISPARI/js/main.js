/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// seleziono il bottone gioca
const gioca = document.getElementById("giocaBt");
console.log(gioca);
const ris = document.getElementById("risultato");
console.log(risultato);




// FUNZIONI

// funzione che genera un numero random da 1 a 5
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// funzione somma
function somma(num1,num2) {
    risultato = num1 + num2
    return risultato
}
console.log(somma);