function RenderWave(canvas, data) {
	var context = canvas.getContext('2d');
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var canvasHalfHeight = canvasHeight * 0.5;

	var bufferLength = data.length;

	context.fillStyle = 'rgb(255, 255, 255)';
	context.fillRect(0, 0, canvasWidth, canvasHeight);

	context.lineWidth = 1;
	context.strokeStyle = 'rgb(0, 0, 0)';

	context.beginPath();

	var sliceWidth = canvasWidth * 1.0 / bufferLength;
	var x = 0 - sliceWidth;

	for(var i = 0; i < bufferLength; i++) {

		var v = 1 - data[i];
		var y = v * canvasHalfHeight;

		if(i === 0) {
			context.moveTo(x, y);
		} else {
			context.lineTo(x, y);
		}

		x += sliceWidth;
		
	}

	context.lineTo(canvasWidth, canvasHalfHeight);

	context.stroke();
	
}

