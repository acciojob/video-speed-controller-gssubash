// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector("video"); //Video
const peakRover = document.querySelector(".peak-rover"); //div
const playPauseBtn = document.querySelector(".play-pause"); //span
const backwardBtn = document.querySelector(".backWard"); //button
const forwardBtn = document.querySelector(".forWard"); //button
const volumeBar = document.getElementById("volume"); //input:range
const speedBar = document.getElementById("speed"); //input:range

video.addEventListener("loadstart", (e) => {
  video.volume = volumeBar.value / 10;
  video.playbackRate = speedBar.value / 5;
  // video.currentTime = (video.duration / 100) * 50;
  console.log((video.duration / 100) * 50);
  // peakRover.style.width = `50%`;
});

video.addEventListener("loadedmetadata", (e) => {
  video.currentTime = (video.duration / 100) * 50;
  console.log((video.duration / 100) * 50);
});

// when video loaded this event will trigger
// video.addEventListener("loadstart", (e) => {
//   video.volume = volumeBar.value / 10;
//   console.log('loaded');
//   console.log(video.volume);
//   video.playbackRate = speedBar.value / 5;
//   video.currentTime = 130;
// });

// video play and pause event
playPauseBtn.addEventListener("click", (e) => {
  if (video.paused) {
    playPauseBtn.innerText = "pause";
    video.play();
  } else {
    playPauseBtn.innerText = "play_arrow";
    video.pause();
  }
});

// backward btn for 10 seconds
backwardBtn.addEventListener("click", (e) => {
  const checker = video.currentTime;
  if (checker >= 10) {
    video.currentTime -= 10;
  } else {
    video.currentTime -= checker;
  }
});
// forward btn for 25 seconds
forwardBtn.addEventListener("click", (e) => {
  const checker = video.duration - video.currentTime;
  if (checker >= 25) {
    video.currentTime += 25;
  } else {
    video.currentTime += checker;
  }
});
video.addEventListener("timeupdate", (e) => {
  const currentPosition = (e.currentTarget.currentTime / video.duration) * 100;
  // console.log(currentPosition);
  peakRover.style.width = `${currentPosition}%`;

  if (e.currentTarget.paused) {
    playPauseBtn.innerText = "play_arrow";
  }
});

// Volume Event handler
volumeBar.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  let val = obj.value / 10;
  console.log("Volume : ", val);
  video.volume = val;
});
// Speed Event handler
speedBar.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  let val = obj.value / 5;
  console.log("Speed : ", val);
  video.playbackRate = val;
});
