birdApp.bgReady = false,
birdApp.title = new Image();
birdApp.timer = new Image();
birdApp.survival = new Image();
birdApp.howtoplay = new Image();
birdApp.bgImage = new Image();
birdApp.quit = new Image ();
birdApp.cont = new Image ();
birdApp.width = window.innerWidth;
birdApp.height = window.innerHeight;
birdApp.howtoplay.src = "images/howtoplay.png";
birdApp.survival.src = "images/survival.png";
birdApp.quit.src = "images/quit.png";
birdApp.cont.src = "images/continue.png";
birdApp.timer.src = "images/timer.png";
birdApp.title.src = "images/title.png";
birdApp.bgImage.src = "images/Sky_Blue.png";
birdApp.canvas = document.querySelector("canvas");
birdApp.canvas.width = birdApp.width;
birdApp.canvas.height = birdApp.height;
birdApp.ctx = birdApp.canvas.getContext("2d");
birdApp.ctx.font = "10px Base";
birdApp.ctx.fillText("BASE", 0, 0);

birdApp.drawBg = function() {
	birdApp.canvas.width = birdApp.canvas.width;
	//birdApp.ctx.drawImage(birdApp.bgImage, 0, 0, birdApp.width, birdApp.height);
	//birdApp.ctx.fill();
};

birdApp.removeHtml = function (array) {
	var html;
	for (var i = 0; i<array.length; i++){
		html = document.querySelector(array[i]);
		html.style.display = 'none';
	}
};

birdApp.bgImage.onload = function () {
	birdApp.bgReady = true;
	birdApp.drawMenu();
};
