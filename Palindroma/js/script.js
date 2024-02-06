// Palidroma
// - Chiedere all’utente di inserire una parola.
// - Creare una funzione per capire se la parola inserita è palindroma
//   (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, 
//    farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false 
//    in base all'esito)

// creiamo la funzione palindroma
function isPalindroma(word) {

  // confronto che i caratteri inseriti siano gli stessi dall'inizio alla fine e viceversa, (proseguendo a ritroso)
  // dividiamo la parola in 2 e controlliamo che la prima parte sia uguale all'inverso della seconda
  for (let i = 0; i < Math.floor(word.length / 2); i++) {

  
      if (word[i] !== word[word.length - 1 - i]) {

          // se i caratteri inseriti non corrispondono allora la parola inserita non è palindroma
          return false;
      }
  }
  
  // se i caratteri inseriti corrispondono allora la parola inserita è palindroma
  return true;
}

// chiediamo all'utente di inserire la parola o un numero tramite prompt
let userWord = prompt("Inserisci una parola o un numero");

// creo una costante per stampare in pagina il risultato
const resultElement = document.querySelector("#esito");

if (isPalindroma(userWord)) {

  // i caratteri corrispondono, la parola è palindroma
  // console.log(`La parola o il numero "${userWord}" è palindroma.`);
  resultElement.innerText = `La parola o il numero "${userWord}" è palindroma.`;

} else {

  // i caratteri non corrispondono, la parola non è palindroma
  // console.log(`La parola o il numero "${userWord}" non è palindroma.`);
  resultElement.innerText = `La parola o il numero "${userWord}" non è palindroma.`;
}

 

