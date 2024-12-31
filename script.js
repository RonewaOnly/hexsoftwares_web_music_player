const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const queue = document.getElementById("queue");

// Song list
const songs = [
  {
    title: "As Long As You Love Me",
    src: "/assets/music/Backstreet Boys - As Long As You Love Me (Official HD Video) [0Gl2QnHNpkA].mp3",
    cover: "img/as-long-as-you-love-me.jpg",
  },
  {
    title: "Everybody (Backstreet's Back)",
    src: "/assets/music/Backstreet Boys - Everybody (Backstreet's Back) (Official HD Video) [6M6samPEMpM].mp3",
    cover: "img/everybody.jpg",
  },
  
  {
    title: "Incomple",
    src: "/assets/music/I_Want_It_That_Way.mp3",
    cover: "img/i-want-it-that-way.jpg",
  },
];

let currentSongIndex = 0;

// Load song into player
function loadSong(song) {
  title.textContent = song.title;
  audio.src = song.src;
  cover.src = song.cover;
}

// Play or Pause toggle
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.querySelector("i").classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    playButton.querySelector("i").classList.replace("fa-pause", "fa-play");
  }
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress on click
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Navigate songs
function prevSong() {
  currentSongIndex =
    currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
  loadSong(songs[currentSongIndex]);
  audio.play();
}

function nextSong() {
  currentSongIndex =
    currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
  loadSong(songs[currentSongIndex]);
  audio.play();
}

// Populate queue
function populateQueue() {
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.className = "queue-item";
    li.dataset.index = index;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      audio.play();
    });
    queue.appendChild(li);
  });
}

// Event listeners
playButton.addEventListener("click", togglePlay);
prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

// Initialize player
loadSong(songs[currentSongIndex]);
populateQueue();