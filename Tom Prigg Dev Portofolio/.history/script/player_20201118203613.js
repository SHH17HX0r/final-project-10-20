const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Event listeners

video.addEventListener('click', toggleVideoStatus);

// Switch the play icon when play or pause are clicked
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);

// update the timestamp as the video plays
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', toggleVideoStatus);
