# vertigo-audioplayer

this is a small reusable audioplayer for javascript, which supports several players in one window.

# How to use

Download locally and import getAudioPlayerAsync from vertigo-audioplayer.js :

```js
import { getAudioPlayerAsync } from "YOUR_FILEPATH/dist/vertigo-audioplayer.js";
```

getAudioPlayerAsync takes an audio object as input parameter, and returns a HTML node with prepared functionality:

```js
//create new audio object
let audio = new Audio("myfile.mp3");

//construct audioplayer using new audio object
const audioplayer = await getAudioPlayerAsync(audio);
```

We can then append the player to view:

```js
//get div from html
const div = document.querySelector("div");

//append player to view
div.appendChild(audioplayer);
```

