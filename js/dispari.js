/*
    L’utente sceglie pari o dispari e un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer.
    Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

var input1 = prompt('pari o dispari'); // Chiedi all'utente di scegliere
while (!isNaN(input1) || (input1 != 'pari') && (input1 != 'dispari')) { // fin quando queste condizioni sono vere non muoverti da qui
    input1 = prompt('pari o dispari? Scrivi la tua scelta in minuscolo'); // Maggiori dettagli su cosa deve scrivere l'utente
}
console.log('Hai scelto: ' + input1 + '!'); // Visualizzo la tua scelta

var input2 = parseInt(prompt('Scegli un numero da 1 a 5')); // Chiedi all'utente di scegliere
while ((isNaN(input2)) || (input2 > 5) || (input2 < 1)) { // fin quando queste condizioni sono vere non muoverti da qui
    input2 = parseInt(prompt('Non era un numero da 1 a 5, ripeti!')); // Maggiori dettagli su cosa deve scrivere l'utente
}
console.log('Hai scelto il numero: ' + input2 + '!'); // Visualizzo la tua scelta

var randomPc = generaRandomMinMax(1, 5); // Genera un Random tra 1 e 5 compresi
console.log('Il tuo avversario ha scelto il numero: ' + randomPc + '!'); // Visualizzo la scelta dell'avversario

var sommaFinal = input2 + randomPc; // sommo le due scelte
console.log('La somma dei due numeri è ' + sommaFinal + '.'); // Visualizzo la somma

var sommaPariDispari = ''; // Creo una Variabile vuota che assegnerò in base al prossimo IF

if (sommaFinal % 2 === 0) { // Se la somma è pari
    sommaPariDispari = 'pari'; // Assegna alla Variabile questo valore
} else { // Altrimenti se è dispari
    sommaPariDispari = 'dispari'; // Assegna alla Variabile questo valore
}
console.log(sommaFinal + ' è un numero ' + sommaPariDispari); // Visualizzo il risultato di quest'assegnazione

if (sommaPariDispari == input1) { // Confronto questo risultato con l'input iniziale dell'utente
    console.log('Hai vinto :)'); // se è uguale l'utente vince
} else { // altrimenti se è diverso
    console.log('Hai perso :('); // l'utente perde
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
