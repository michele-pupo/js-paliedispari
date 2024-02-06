// Snack 1:
// - Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// - Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

// inizializziamo un array vuoto
let userNumbersList = [];

// inizializziamo una costante somma uguale a 0
let sum = 0;

//  creiamo un ciclo while che sommi i numeri contenuti nell'array finche la somma di essi sia minore di 50
while (sum < 50) {

    let userNumber = Number(prompt("Inserisci un numero"));
    // console.log(userNumber);

    // controllo che il numero inserito non sia nullo e che sia un numero
    if(userNumber == null || isNaN(userNumber)) {

    alert("Non hai inserito un numero! Questo dato non verrà sommato");

    } else {
        
    // inserisco i numeri nell'array
    userNumbersList.push(userNumber);

    // sommo i numeri inseriti
    sum += userNumber;

    // stampo a schermo la somma
    // console.log(sum);
    document.querySelector("#sum-numbers").innerHTML = `${sum}`;
    }
}



