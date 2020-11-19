const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause
function toggleVideoStatus() {
  return true;
}

// Update the Play/Pause buttons
function updatePlayIcon() {
  return true;
}

// Update progress and the timestamp
function updateProgress() {
  return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);

// Switch the play icon when play or pause are clicked
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);

// update the timestamp as the video plays
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

// This is change because it's a range element.
// It is range because it slides between 0-100
progress.addEventListener('change', setVideoProgress);
