birdApp.drawMenu = function() {
	birdApp.clearTimeouts();
	birdApp.drawBg();
	birdApp.ctx.drawImage(birdApp.title,(birdApp.width/2)-(birdApp.title.width/4), birdApp.height/20, birdApp.title.width/2, birdApp.title.height/2 );
	birdApp.ctx.drawImage(birdApp.timer, (birdApp.width/2)-(birdApp.survival.width/4), (birdApp.height/5), birdApp.timer.width/2, birdApp.timer.height/2);
	birdApp.ctx.drawImage(birdApp.survival, (birdApp.width/2)-(birdApp.survival.width/4), 2*(birdApp.height/5), birdApp.survival.width/2, birdApp.survival.height/2);
	birdApp.ctx.drawImage(birdApp.howtoplay, (birdApp.width/2)-(birdApp.howtoplay.width/4), 3*(birdApp.height/5), birdApp.howtoplay.width/2, birdApp.howtoplay.height/2);
	birdApp.removeEventListeners();
	birdApp.addEventListeners(birdApp.menuTouch);
	birdApp.ctx.fillStyle = "#990000";
	birdApp.ctx.font=(birdApp.height/35)+"px Base";
	birdApp.ctx.fillText("Survival Best: "+ (localStorage.survHighScore ? localStorage.survHighScore : 0),
		birdApp.width/20,
		7*(birdApp.height/8));
	birdApp.ctx.fillText("Timer Best: "+ (localStorage.timeHighScore ? localStorage.timeHighScore : 0),
		5*(birdApp.width/9), 
		7*(birdApp.height/8));
};