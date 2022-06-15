console.log("JS OK");

// * Interfaccia di controllo del riconoscimento vocale
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// * Prendo tutti gli elementi dal DOM
const micButton = document.getElementById('mic');
const screen = document.getElementById('screen');
const panelsData = document.getElementById('panels-data');

// * Salvo i possibili comandi in una variabile
const commands = ["mangia", "balla", "dormi"];

// * Inizializzazione comando vocale
const recognition = new SpeechRecognition();

// * Inizio ad ascoltare
function onStartListening() {
  recognition.start();

  // * Aggiungo la classe listening
  panelsData.classList.add('listening');
}

// * Funzione per controllare gli errori del recognition
function onError(e) {
  console.error(e.error);
}

// * Funzione per prendere il risultato del recognition
function onResult(e) {
  const testo = e.results[0][0].transcript;
  // console.log(testo);

  // * Cerco se la parola captata è tra i comandi
  const action = commands.find(function (command) {
    return testo.toLowerCase().includes(command);
  });
  // console.log(action);

  // * Gestisco la possibilità che l'utente non dica una parola dell'elenco
  if (action === undefined) {
    window.alert('Errore. Devi dire una parola presente nell\'elenco');
  }

  // * Aggiungo l'animazione captata al codigotchi
  const actionClass = 'codigotchi-screen_' + action;
  // console.log(actionClass);

  screen.classList.add(actionClass);

  // * Rimuovo la classe listening
  panelsData.classList.remove('listening');

  // * Setto un timeout per l'animazione
  setTimeout(function () {
    screen.classList.remove(actionClass);
  }, 2500);
}

// * Aggiungo gli event handler
micButton.addEventListener('click', onStartListening);

// * Gestisco gli event del recognition
recognition.addEventListener('result', onResult);
recognition.addEventListener('error', onError);