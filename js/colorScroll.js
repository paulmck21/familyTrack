var hexArray = ['#'];

function convertToHex(rgb){
	 var rgbArray = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i.exec(rgb);

	 hexArray = ['#'];



	 for (i=1; i<4; i++){
		var color1 = (0 + Math.floor(parseFloat((rgbArray[i])/16)));
		var color2 = (0 + (parseFloat(rgbArray[i],10)%16));

		

		console.log('color1 is ' + color1 + '. color2 is ' + color2);

		assignLetters(color1);
		assignLetters(color2);

	}

	return newHex = hexArray.join("");

	console.log('newHex is ' + newHex);
}



function assignLetters(color){
	
		switch (color){
			case 10:
				color = 'A';
				hexArray.push(color);
				break;
			case 11:
				color = 'B';
				hexArray.push(color);
				break;
			case 12:
				color = 'C';
				hexArray.push(color);
				break;
			case 13:
				color = 'D';
				hexArray.push(color);
				break;
			case 14:
				color = 'E';
				hexArray.push(color);
				break;
			case 15:
				color = 'F';
				hexArray.push(color);
				break;
			default:
				hexArray.push(color);
				break;
		}
	
}





window.onload = function() {scrolled() }
window.onscroll = function() {scrolled() }

function scrolled () {
	var docBody = document.body;
	var dist = document.getElementById("body").scrollTop;

	var red = dist / 2;
	var green = dist / 3;
	var blue = dist / 4

	var redCapped = red <= 255 ? Math.floor(red) : Math.floor(red % 255);
	var greenCapped = green <= 255 ? Math.floor(green) :  Math.floor(green % 255);
	var blueCapped = blue <= 255 ? Math.floor(blue) :  Math.floor(blue % 255);
	console.log('redCapped is ' + redCapped + ' and greenCapped is ' + greenCapped + ' and blueCapped is ' + blueCapped);


	var rgbVal = 'rgb (' + redCapped + ',' + greenCapped + ',' + blueCapped + ')';
	console.log('rgbVal is ' + rgbVal);
	var hexVal = convertToHex(rgbVal);
	var dist = document.getElementById("body").scrollTop;

	document.getElementById("body").style.backgroundColor = hexVal;

	var hexDiv = document.getElementById('hex');
	
	var hexTitle = document.getElementById('hexTitle');
	var rgbTitle = document.getElementById('rgbTitle');
	var hexText = document.createTextNode(hexVal);


	hexTitle.innerHTML = '';

	var textrgbVal = 'rgb (' + (255 - redCapped) + ',' + (255 - greenCapped) + ',' + (255 - blueCapped) + ')';
	var textHexVal = convertToHex(textrgbVal);
	hexTitle.innerHTML = textHexVal;
	rgbTitle.innerHTML = rgbVal;


	document.getElementById("body").style.color = textHexVal;


	console.log('dist is ' + dist);
}





