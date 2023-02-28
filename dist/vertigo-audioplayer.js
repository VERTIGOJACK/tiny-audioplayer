const CreateAudioPlayerHTMLelementAsync = async () => {
  let div = document.createElement("div");
  const response = await fetch("../dist/audioplayer-element.html");
  const string = await response.text();
  div.innerHTML = string;
  const player = div.firstChild;
  return player;
};

export const getAudioPlayerAsync = async (inputaudio) => {
  const HtmlElement = await CreateAudioPlayerHTMLelementAsync();
  return InitPlayer(HtmlElement, inputaudio);
};

const InitPlayer = (HtmlElement, audio) => {
  //query document for audioplayer
  const audioPlayer = HtmlElement;
  //get elements from children
  const playButton = audioPlayer.querySelector(".play");
  const audioButton = audioPlayer.querySelector(".volume-button");
  const audioSpan = audioPlayer.querySelector(".volume-span");
  const currentTime = audioPlayer.querySelector(".time-current");
  const totalTime = audioPlayer.querySelector(".time-total");
  const seekBar = audioPlayer.querySelector(".seekbar");
  const volumeControl = audioPlayer.querySelector(".volume-control");

  let firstupdate = true;
  let seeking = false;

  audio.addEventListener("timeupdate", (e) => {
    if (firstupdate) {
      totalTime.innerHTML = timeConvert(audio.duration);
      seekBar.setAttribute("max", audio.duration);
      firstupdate = false;
    }
    currentTime.innerHTML = timeConvert(audio.currentTime);
    if (!seeking) {
      seekBar.value = audio.currentTime;
    }
  });

  //timestamp is in seconds
  const timeConvert = (timestamp) => {
    let minutes = "";
    let seconds = "";

    minutes = timestamp / 60;
    minutes = Math.floor(minutes);
    seconds = Math.floor(timestamp) - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    timestamp = minutes + ":" + seconds;
    return timestamp;
  };

  seekBar.addEventListener("mousedown", () => {
    seeking = true;
  });
  seekBar.addEventListener("mouseup", () => {
    audio.currentTime = seekBar.value;
    seeking = false;
  });

  volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value / 100;
  });

  playButton.addEventListener("mousedown", () => {
    {
      if (playButton.innerHTML == "play_arrow") {
        playButton.innerHTML = "pause";
        audio.play();
      } else {
        playButton.innerHTML = "play_arrow";
        audio.pause();
      }
    }
  });

  audioButton.addEventListener("mousedown", () => {
    audioSpan.classList.toggle("show");
  });

  window.addEventListener("mousedown", (e) => {
    const element = e.target;
    //if not volume control reset state
    if (
      !element.matches(".volume-span") &&
      !element.matches(".volume-control") &&
      !element.matches(".volume-button")
    ) {
      if (audioSpan.classList.contains("show")) {
        audioSpan.classList.remove("show");
      }
    }
    //play and pause
    if (element.matches(".play")) {
      if (!audio.paused && element != playButton) {
        playButton.innerHTML = "play_arrow";
        audio.pause();
      }
    }
  });
  return audioPlayer;
};
