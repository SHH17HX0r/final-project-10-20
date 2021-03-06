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
  // Get index of our voice recording to access the voice data
  const current = event.resultIndex;
  // Put recorded voice commands into the transcript variable
  const transcript = event.results[current][0].transcript;
  // Add the recorded text data to our h3 place holder
  content.textContent = transcript;
  readOutLoud(transcript);
};

// add the listener to the button
btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.2;

  window.speechSynthesis.speak(speech);
}
