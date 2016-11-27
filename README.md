# instalooper

> A technical demo by <a href="https://soledadpenades.com">sole</a> for the <a href="https://github.com/notthetup/webaudiohackday-2016/">Web Audio Hackday @ DevFestAsia (Singapore)</a>

<p>It demoes recording a short clip of audio using <a href="https://w3c.github.io/mediacapture-record/MediaRecorder.html">MediaRecorder</a>, and decoding the blob and loading it into <a href="https://webaudio.github.io/web-audio-api/">Web Audio</a> as a Buffer, to be used as a BufferSource.</p>

<p>Right now it mostly works in <a href="http://nightly.mozilla.org/">Firefox Nightly</a> (except when it intermittently stops recording), and it's totally broken in Chrome Canary (it <a href="https://twitter.com/supersole/status/802696553131438081">crashes the browser</a>).</p>

## Running this locally

If you want to run this to modify and play with the code, you'll need to run a local server that can do https connections. Here's a good guide on how to do that.

Assuming you followed that guide, you just need to start the server on the same directory as the code you cloned:

```bash
git clone https://github.com/sole/instalooper.git
cd instalooper
https-server
```

And open https://localhost:8080/ with Firefox Nightly.

## Modifying

The most interesting parts of the code are in [main.js](./main.js), which is where we create the MediaRecorder instance, tell it to record a short loop and then we decode and use it in the Web Audio context.
