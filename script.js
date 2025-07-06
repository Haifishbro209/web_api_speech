const output = document.getElementById("text")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "de-DE";
recognition.start();

recognition.onresult = event =>{
  output.value += event.results[0][0].transcript;
};