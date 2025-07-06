const output = document.getElementById("text");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'de-DE';
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = '';
navigator.mediaDevices.getUserMedia({ audio: true })
recognition.start();
recognition.onend = () => recognition.start();

recognition.onresult = event => {
  let interimTranscript = '';
  
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  
  output.value = finalTranscript + interimTranscript;
};