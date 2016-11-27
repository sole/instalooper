var recorder;
var canvas;

var ac = new AudioContext();
var limiter = ac.createDynamicsCompressor();
limiter.connect(ac.destination);

window.onload = function () {
	canvas = document.querySelector('canvas');

	navigator.mediaDevices.getUserMedia({
		audio: true
	})
	.then(function (stream) {

		recorder = new MediaRecorder(stream);
		recorder.addEventListener('dataavailable', onRecordingReady);

		console.log('recorder is ready');

		setTimeout(() =>{
			startRecording();
			setTimeout(stopRecording, 300);
		}, 100);

	});
};

function startRecording() {
	console.log('start recording');
	recorder.start();
}

function stopRecording() {
	console.log('stop recording');
	recorder.stop();
}


function onRecordingReady(e) {
	console.log('recording is ready');
	var blob = e.data;
	var fr = new FileReader();
	fr.onload = function() {
		var arrayBuffer = this.result;
		dump(arrayBuffer);
		ac.decodeAudioData(arrayBuffer, function(decoded) {
			console.log('yay!', decoded.length);
			useSample(decoded);
		}, function(fail) {
			console.error('fail!', fail);
		});
	};
	fr.readAsArrayBuffer(blob);
}

function dump(buf) {
	var view = new Uint8Array(buf);
	var str = '';
	for(var i = 0; i < 100 /*view.length*/ ; i++) {
		str += ' ' + String.fromCharCode(view[i]);
	}
	console.log(str);
}

function useSample(sample) {
	
	var bufferSourceNode;
	
	MaximiseSampleInPlace(sample);

	bufferSourceNode = ac.createBufferSource();
	bufferSourceNode.loop = true;
	bufferSourceNode.buffer = sample;
	bufferSourceNode.connect(limiter);
	bufferSourceNode.start();

	// This is for drawing the sample on the canvas
	var data = [];
	var channelData = sample.getChannelData(0);
	
	for(var i = 0; i < channelData.length; i++) {
		data.push(channelData[i]);
	}

	RenderWave(canvas, data);
	
}


