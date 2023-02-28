# vertigo-audioplayer

this is a small reusable audioplayer which supports several players in one window.

# How to use

Download locally and import getAudioPlayerAsync :

```js
import { getAudioPlayerAsync } from "../dist/vertigo-audioplayer.js";
```

getAudioPlayerAsync takes an audio object, and returns a HTML node with prepared functionality:


```js
//create new audio object
let audio = new Audio("myfile.mp3");

//construct audioplayer using new audio object
const audioplayer = await getAudioPlayerAsync(audio);
```

we can then append the player to view:

```js
//get container from html
const container = document.querySelector(".container");

//append player to view
container.appendChild(audioplayer);
```

