// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// FUNCTION
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

function isInArray(element, array) {
    //verifico tutti gli elementi dell'array 
    for (var i = 0; i < array.length; i++) {
        // verifico se un elemento è uguale ad un elemento presente nell'array 
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}
// /FUNCTION

// Il computer deve generare 16 numeri casuali tra 1 e 100 e I numeri non possono essere duplicati.
var bombs = [];
// continuo il ciclo finchè la lunghezza dell'array (bombs) non raggiunge 16 elementi
while (bombs.length < 16) {
    // genero numeri casuali da 1 a 100...
    var randomBombs = getRandomNumber(1, 100);
    //... ma li inserisco nell'array (bombs) solo dopo aver verificato che non siano gia presenti
    if (!isInArray(randomBombs, bombs)) {
        bombs.push(randomBombs);
    }
} console.log("BOMBE", bombs);