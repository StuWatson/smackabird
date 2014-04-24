birdApp.birdReady = false,
birdApp.oldReady = false,
birdApp.birdImage = new Image(),
birdApp.oldImage = new Image();
birdApp.birdImage.src = "images/faby.png";
birdApp.oldImage.src = "images/bruised.png";

birdApp.drawBird = function (cell, old) {
	var width = birdApp.width;
	var height = birdApp.height;
	birdApp.canvas.width = birdApp.canvas.width;
	if(birdApp.birdReady && birdApp.bgReady) {
		birdApp.drawBg();
		if(old && birdApp.oldReady){
			birdApp.ctx.drawImage(birdApp.oldImage, old.x, old.y, width/5, height/9);
		}
		birdApp.ctx.drawImage(birdApp.birdImage, cell.x, cell.y, width/5, height/9);
        birdApp.ctx.font=(birdApp.height/25)+"px Base";
        birdApp.ctx.textAlign = "center";
        birdApp.ctx.fillStyle = "#990000";
		birdApp.ctx.fillText("Score: "+birdApp.score, width/2, birdApp.height/6)
		birdApp.ctx.fill();
	}
	console.log(cell);
};

birdApp.birdImage.onload = function () {
	birdApp.birdReady = true;
};

birdApp.oldImage.onload = function () {
	birdApp.oldReady = true;
};