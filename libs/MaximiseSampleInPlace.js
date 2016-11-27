function MaximiseSampleInPlace(sample) {
	console.log('maximise sample in place');
	var length = sample.length;
	var numChannels = sample.numberOfChannels;
	
	var maxValue = 0;

	for(var i = 0; i < numChannels; i++) {
		var data = sample.getChannelData(i);

		for(var j = 0; j < length; j++) {
			var value = Math.abs(data[j]);
			maxValue = Math.max(value, maxValue);
		}
	}

	var amp = 1.0 / maxValue;

	for(var i = 0; i < numChannels; i++) {
		var inData = sample.getChannelData(i);
		for(var j = 0; j < length; j++) {
			var value = data[j];
			data[j] = value * amp;
		}
	}

}

