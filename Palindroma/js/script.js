// Snack 2
// - Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// - Il programma poi deve far comparire un messaggio "il numero è troppo alto" 
//   oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente 
//   non è perfettamente uguale al numero estratto in modo casuale.
// - Quando l'utente trova il numero, fateglielo sapere!

// Genera un numero casuale tra 1 e 100
const randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

let attempts = 0;
let win = false;

do {

    // creo un ciclo do-while per consentire all'utente di indovinare il numero
    let attemptNumber = parseInt(prompt("Indovina il numero (da 1 a 100):"));

    
      // Controlla se il numero è corretto
      if (attemptNumber === randomNumber) {
        console.log("Complimenti! Hai indovinato il numero:", randomNumber);

        win = true;
    
      } else if (attemptNumber < randomNumber) {
        console.log("Il numero è troppo basso.");

      } else {
        console.log("Il numero è troppo alto.");

      }
    } while (!win);

 

