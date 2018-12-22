console.log("Extension activate");


var dotsies = new FontFace('Dotsies', 'url(https://s3.amazonaws.com/morsebeep/Dotsies.ttf)');

dotsies.load().then(function(loaded_face) {
	document.fonts.add(loaded_face);
  	document.body.style.fontFamily = '"Dotsies", Arial';
	let paragraphs = document.getElementsByTagName('p');

	for(ele of paragraphs){
		ele.innerHTML = "Something";
		ele.font = 'Dotsies';
	}


}).catch(function(error) {
	// error occurred
});



