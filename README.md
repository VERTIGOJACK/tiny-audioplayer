# vertigo-audioplayer

this is a small reusable audioplayer which supports several players in one window.

# How to use

Download locally and import getAudioPlayerAsync :

```import { getAudioPlayerAsync } from "../dist/vertigo-audioplayer.js"```

//declare some links to audio
const AUDIO_FILE =
"https://anchor.fm/s/34182390/podcast/play/65709877/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2023-1-27%2F315156954-44100-2-f758d44dd00e7.mp3";

const AUDIO_FILE2 =
"https://anchor.fm/s/34182390/podcast/play/64211740/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2023-0-29%2F310029366-44100-2-8363b7ff76f1d.mp3";

//get container from html
const container = document.querySelector(".container");

//create new audio object
let audio = new Audio(AUDIO_FILE);
//construct first audioplayer using new audio object
const audioplayer1 = await getAudioPlayerAsync(audio);

//get another audio object
audio = new Audio(AUDIO_FILE2);
//construct second audioplayer using new audio object
const audioplayer2 = await getAudioPlayerAsync(audio);

//append players to view
container.appendChild(audioplayer1);
container.appendChild(audioplayer2);
