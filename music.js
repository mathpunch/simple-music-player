const songs = [
  { title: "Tv Off - Kendrick Lamar", src: "music1.mp3" },
  { title: "Crazy Story - King Von", src: "music2.mp3" },
  { title: "Cry For Me - The Weeknd", src: "music3.mp3" },
  { title: "Revolving Door - Tate Mcrae", src: "music4.mp3" },

];
// edit this array to add your own music

let currentSong = 0;

// music player
initMusic();

function initMusic() {
  const audio = document.getElementById("music-src");
  const play = document.getElementById("music");
  const skip = document.getElementById("music-skip");
  const info = document.getElementById("music-info");
  const art = document.getElementById("music-cover");

  currentSong = Math.floor(Math.random() * songs.length);

  function updateart() {
    art.src = `./img/${songs[currentSong].src.replace('.mp3', '.png')}`;
    art.style.display = 'block';
  }

  function music() {
    if (audio.paused) {
      audio.play();
      play.classList.add("paused");
      skip.style.display = "block";
      info.textContent = songs[currentSong].title;
      updateart();
    } else {
      audio.pause();
      play.classList.remove("paused");
      skip.style.display = "none";
      info.textContent = "";
      art.style.display = 'none';
    }
  }

  function musicSkip() {
    currentSong = (currentSong + 1) % songs.length;
    audio.src = `./music/${songs[currentSong].src}`;
    audio.play();
    play.classList.add("paused");
    skip.style.display = "block";
    info.textContent = songs[currentSong].title;
    updateart();
  }

  function musicEnd() {
    musicSkip();
  }

  // init first source
  audio.src = `./music/${songs[currentSong].src}`;
  art.style.display = 'none';

  play.addEventListener("click", music);
  skip.addEventListener("click", musicSkip);
  audio.volume = 0.1;
  audio.addEventListener("ended", musicEnd);
}
