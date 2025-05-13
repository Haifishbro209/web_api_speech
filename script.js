const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


  const colors = [
    "aqua",
    "azure",
    "beige",
    "bisque",
    "black",
    "blue",
    "brown",
    "chocolate",
    "coral",
    // …
  ];
  const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
    " | ",
  )};`;

  console.log(grammar)
  // #JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral;


  const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API