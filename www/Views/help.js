birdApp.drawHowToPlay = function () {
	birdApp.removeEventListeners();
	birdApp.drawBg();
	birdApp.ctx.font="28px Base";
	birdApp.createHelpText();
	birdApp.addEventListeners(birdApp.helpTouch, false);
	var text = querySelector('#helpText');
	text.addEventListener(birdApp.input, birdApp.helpTouch, false);
};

birdApp.createHelpText = function() {
	var p = document.querySelector('#helpText');
	p.style.display = 'block';
	p.style.top = birdApp.height/8+"px";
	p.style.marginLeft = birdApp.width/5+"px";
	p.style.marginRight = birdApp.width/5+"px";
	p.style.position = "relative";
	p.style.zIndex = 3;
};