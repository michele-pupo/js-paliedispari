// Pari e Dispari
// - L’utente sceglie pari o dispari.
// - Inserisce un numero da 1 a 5.
// - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// - Sommiamo i due numeri
// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// - Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


// creiamo una funzione per far scegliere all'utente, tramite prompt, pari o dispari
function scegliPariODispari() {
    let choice = prompt("Cosa scegli? PARI o DISPARI... ");

    // stampiamo in pagina la scelta dell'utente
    document.querySelector("#user-choice").innerHTML = `Hai scelto ${choice}`;

    // controlliamo che l'utente abbia scritto pari o dispari
    while (choice !== 'pari' && choice !== 'dispari') {

        // forziamo la scrittura della parola indicata
        choice = prompt("Puoi scegliere solo 'PARI' o 'DISPARI', non sono consentite altre parole o numeri");
    }
    return choice;
}

// creiamo una funzione per far scegliere all'utente, tramite prompt, un numero da 1 a 5
function inserisciNumero() {

    // cambio la visualizzazione della user-number dove vengono mostrati i dadi
    document.querySelector(".user-number").style.display = "flex";

    // cambio la visualizzazione della computer-number dove vengono mostrati i dadi
    document.querySelector(".computer-number").style.display = "flex";

    const number = parseInt(prompt("Scegli un numero da 1 a 5... "));

    // facciamo corrispondere il numero scelto dell'utente all'immagine
    document.querySelector("#playerOutput img").src = `./img/${number}.jpg`;

    // controlliamo che l'utente abbia scritto un numero da 1 a 5
    while (number < 1 || number > 5 || isNaN(number)) {

        // forziamo la scrittura del numero indicato
        number = parseInt(prompt("Puoi scegliere solo un numero da '1' a '5', non sono consentite altre parole o numeri"));
    }
    return number;
}

// creiamo una funzione per far generare al computer un numero casuale da 1 a 5
function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

// creiamo una funzione per far sommare i due numeri
function sommaPariODispari(num1, num2) {
    let sum = num1 + num2;

    // se la somma dei numeri è divisibile per 2, allora il numero sarà pari
    if (sum % 2 === 0) {
        return 'pari';

      // se la somma dei numeri non è divisibile per 2, allora il numero sarà dipari  
    } else {
        return 'dispari';
    }
}

// creiamo una funzione per effettuare il gioco
function gioca() {

    // richiamo la funzione della scelta di pari o dispari
    let userChoice = scegliPariODispari();

    // richiamo la funzione dell'inserimento del numero utente
    let userNumber = inserisciNumero();

    // richiamo la funzione del numero casuale genarato dal computer
    let computerNumber = generaNumero();

    // facciamo corrispondere il numero random generato al numero del dado
    document.querySelector("#computerOutput img").src = `./img/${computerNumber}.jpg`;

     // cambio la visualizzazione della computer-number dove vengono mostrati i dadi
     document.querySelector(".computer-number").style.display = "flex";

    
    alert("Il computer ha scelto il numero: " + computerNumber);
    let result = sommaPariODispari(userNumber, computerNumber);
    alert("La somma dei due numeri è: " + (userNumber + computerNumber));
    if (result === userChoice) {
        alert(`Poichè hai scelto "${userChoice}" Hai vinto!`);

        // stampiamo in pagina il risultato
        document.querySelector("#result-game").innerHTML = `Hai vinto!`;

    } else {
        alert(`Poichè hai scelto "${userChoice}" Hai perso!`);

        // stampiamo in pagina il risultato
        document.querySelector("#result-game").innerHTML = `Hai perso!`;
    }
}

// richiamo la funzione per eseguire il gioco
gioca();


