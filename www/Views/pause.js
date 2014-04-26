birdApp.drawPause = function () {
	var textPos = birdApp.width/2;
	birdApp.drawBg();
	birdApp.ctx.font=(birdApp.height/20)+"px Base";
	birdApp.ctx.textAlign = "center";
    birdApp.ctx.fillStyle = "#990000";
	
	birdApp.ctx.fillText("Paused!", textPos, birdApp.height/7)
	birdApp.ctx.drawImage(birdApp.cont,(birdApp.width/2)-(birdApp.cont.width/4), birdApp.height/3, birdApp.cont.width/2, birdApp.cont.height/2 );
	birdApp.ctx.drawImage(birdApp.quit,(birdApp.width/2)-(birdApp.quit.width/4), birdApp.height/2, birdApp.quit.width/2, birdApp.quit.height/2 );
};