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
  panelsData.classList.add('listening');
}

// * Aggiungo gli event handler
micButton.addEventListener('click', onStartListening);