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

// VARIABLES
var bombs = [];
var attempts = [];
var endGame = false;
// /VARIABLES

do {
    var levelDifficulty = parseInt(prompt("Scegli il livello di difficoltà\n0 = Facile\n1 = Media\n2 = Difficile"));
} while (levelDifficulty != 0 && levelDifficulty != 1 && levelDifficulty != 2);

switch (levelDifficulty) {

    case 0 :
        // Il computer deve generare 16 numeri casuali tra 1 e 100 e I numeri non possono essere duplicati.
        // continuo il ciclo finchè la lunghezza dell'array (bombs) non raggiunge 16 elementi
        while (bombs.length < 16) {
            // genero numeri casuali da 1 a 100...
            var randomBombs = getRandomNumber(1, 100);
            //... ma li inserisco nell'array (bombs) solo dopo aver verificato che non siano gia presenti
            if (!isInArray(randomBombs, bombs)) {
                bombs.push(randomBombs);
            }
        } console.log("BOMBE", bombs);

        // In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
        var maxAttempts = 84;

        // continuo il ciclo finchè il numero di elementi nell'array (attempts) è minore del numero massimo di tentativi a disposizione e il valore che determina la conclusione del gioco risulta sempre falso
        while (attempts.length < maxAttempts && endGame == false) {
            // chiedo all'utente di inserire un numero verificando sia che stia inserendo un numero e non una stringa sia che il numero non sia minore di 1 o maggiore di 100 
            do {
                var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"))
            } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);
        // Se il numero è presente nella lista dei numeri generati, la partita termina... 
            if (isInArray(userNumber, bombs)) {
                endGame = true;
                alert("HAI PERSO!!!\nHai raggiunto un punteggio di:" + attempts.length)
            } else if (!isInArray(userNumber, attempts)) { //...altrimenti si continua chiedendo all'utente un altro numero.
                attempts.push(userNumber)
            } console.log(userNumber, attempts.length);
        }
        console.log(attempts);
    break;
    case 1 :

        while (bombs.length < 16) {
            
            var randomBombs = getRandomNumber(1, 80);
            
            if (!isInArray(randomBombs, bombs)) {
                bombs.push(randomBombs);
            }
        } console.log("BOMBE", bombs);
    
        var maxAttempts = 64;

        while (attempts.length < maxAttempts && endGame == false) {
        
            do {
                var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 80"))
            } while (isNaN(userNumber) || userNumber < 1 || userNumber > 80);
    
            if (isInArray(userNumber, bombs)) {
                endGame = true;
                alert("HAI PERSO!!!\nHai raggiunto un punteggio di:" + attempts.length)
            } else if (!isInArray(userNumber, attempts)) { 
                attempts.push(userNumber)
            } console.log(userNumber, attempts.length);
        }
        console.log(attempts);
    break;
    case 2 :

        while (bombs.length < 16) {
            
            var randomBombs = getRandomNumber(1, 50);
            
            if (!isInArray(randomBombs, bombs)) {
                bombs.push(randomBombs);
            }
        } console.log("BOMBE", bombs);
    
        var maxAttempts = 34;

        while (attempts.length < maxAttempts && endGame == false) {
        
            do {
                var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 50"))
            } while (isNaN(userNumber) || userNumber < 1 || userNumber > 50);
    
            if (isInArray(userNumber, bombs)) {
                endGame = true;
                alert("HAI PERSO!!!\nHai raggiunto un punteggio di:" + attempts.length)
            } else if (!isInArray(userNumber, attempts)) { 
                attempts.push(userNumber)
            } console.log(userNumber, attempts.length);
        }
        console.log(attempts);
    break;
}

// CONDITIONS
if (attempts.length == maxAttempts) {
    alert("HAI VINTO!!!\nHai raggiunto un punteggio di:" + attempts.length)
}
// /CONDITIONS