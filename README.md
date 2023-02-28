# vertigo-audioplayer

this is a small reusable audioplayer which supports several players in one window.

# How to use

Download locally and import getAudioPlayerAsync :

```js import { getAudioPlayerAsync } from "../dist/vertigo-audioplayer.js"```

getAudioPlayerAsync takes an audio object, and returns a HTML node that is ready for to your project:


```//create new audio object
let audio = new Audio(AUDIO_FILE.mp3);

//construct audioplayer using new audio object
const audioplayer1 = await getAudioPlayerAsync(audio);```


//get another audio object
audio = new Audio(AUDIO_FILE2);
//construct second audioplayer using new audio object
const audioplayer2 = await getAudioPlayerAsync(audio);

//get container from html
const container = document.querySelector(".container");

//append player to view
container.appendChild(audioplayer1);

