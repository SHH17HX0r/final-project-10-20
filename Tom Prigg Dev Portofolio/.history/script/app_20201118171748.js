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
  const transcript = event.result[current][0].transcript;
  // Add the recorded text data to our h3 place holder
  content.textContent = transcript;
};

// add the listener to the button
btn.addEventListener('click', () => {
  recognition.start();
});
