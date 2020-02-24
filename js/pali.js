/*
    Esercizio 1
    Crea una funzione per capire se una parola è palindroma
*/

var input = prompt('Inserisci una parola per verificare se è palindroma'); // Prompt dell'utente
var check = palindrome(input); // Creo una variabile che equivalga al palindromo dell'inserimento

if (check) { // se il risultato della funzione è vero o no
    console.log('Ebbene sì! "' + input + '" è una parola palindroma!');
} else {
    console.log('Mi dispiace! "' + input + '" non è una parola palindroma.');
}

function palindrome(str) { // Inizio della funziona per il check del palindromo
  var strLower = str.toLowerCase(); // Trasformo tutto piccolo
  var isPalindrome = strLower.split('').reverse().join(''); // Ribalto tutto
  return (strLower === isPalindrome); // Check se il ribaltato è uguale all'originale
}
