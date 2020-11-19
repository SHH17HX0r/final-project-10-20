const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Different browsers handle the JS speech recognition differently
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instantiation of SpeechRecognition
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('voice is activated, you can speak to the microphone');
};
// This function actually captures the spoken speech and puts it in a variable.
recognition.onresult = function (event) {
  console.log(event);
};
