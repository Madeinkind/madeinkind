// Видео управление
const videoPlayer = document.getElementById('videoPlayer');
const playVideoButton = document.getElementById('playVideo');
const muteVideoButton = document.getElementById('muteVideo');

playVideoButton.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

muteVideoButton.addEventListener('click', () => {
  videoPlayer.muted = !videoPlayer.muted;
});

// Аудио управление
const audioPlayer = document.getElementById('audioPlayer');
const playAudioButton = document.getElementById('playAudio');
const muteAudioButton = document.getElementById('muteAudio');

playAudioButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

muteAudioButton.addEventListener('click', () => {
  audioPlayer.muted = !audioPlayer.muted;
});

// Анимация
const animatedBox = document.getElementById('animatedBox');
const startAnimationButton = document.getElementById('startAnimation');

startAnimationButton.addEventListener('click', () => {
  animatedBox.style.transform = 'scale(1.5)';
  setTimeout(() => {
    animatedBox.style.transform = 'scale(1)';
  }, 500);
});
