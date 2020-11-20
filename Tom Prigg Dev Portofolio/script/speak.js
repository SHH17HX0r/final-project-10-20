// Add voice over to the presentation of the portfolio website.
// When a user clicks on the slide advance, the voice over will play a description
// about that particular slide that points to another projects page.
// Reference for speech functions
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

var machineLearning =
  '   This slide takes you to the machine learning page that explores voter behavior';
var bio = '   This slide will show you toms bio besides his resume.';
var pen = '   This slide is about toms penetration testing projects.';

// Different browsers handle the JS speech recognition differently
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instantiation of SpeechRecognition
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('voice is activated, you can speak to the microphone');
};

// recognition.onspeechend = function () {

// }

// This function captures the spoken speech and puts it in a variable.
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
  // readOutLoud(MachineLearning);
  // content.textContent = MachineLearning;
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}