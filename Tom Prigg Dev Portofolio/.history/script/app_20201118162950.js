const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
