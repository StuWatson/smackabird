
var birdApp = birdApp || {};

birdApp.activeCell;
birdApp.survivalMode;
birdApp.timeouts = [];
birdApp.score = 0;
birdApp.speed = 10;

birdApp.incrementSpeed = function () {
	birdApp.speed++;
};

birdApp.update = function(cell) {
	if(!cell && birdApp.survivalMode){
		birdApp.gameOver();
	} else if(!cell) {
		birdApp.newCell(true);
		birdApp.incrementSpeed();
	} else if(cell && birdApp.hitCheck(cell)){
		birdApp.incrementSpeed();
		birdApp.newCell();
	} else if (cell && birdApp.survivalMode) {
		birdApp.gameOver();
	} 
};

birdApp.countdown = function(n) {
	birdApp.drawBg();
    birdApp.ctx.font=(birdApp.height/15)+"px Base";
    birdApp.ctx.textAlign = "center";
    birdApp.ctx.fillStyle = "#990000";
	if(n !=0) {
		birdApp.ctx.fillText(n, birdApp.width/2, birdApp.height/3);
		n--;
		setTimeout(function(){birdApp.countdown(n)}, 1000);
	} else {
		birdApp.ctx.fillText("Go!", birdApp.width/2, birdApp.height/3);
		setTimeout(function(){
            if(!birdApp.survivalMode) {
                birdApp.timeStarted = Date.now();
                birdApp.gameTimer = setTimeout(birdApp.gameOver, 60 * 1000 - birdApp.timeElapsed);
            }
			birdApp.addEventListeners(birdApp.onTouch);
            birdApp.newCell(true);
		}, 750);
	}
};

birdApp.highScore = function () {
	var gameType = birdApp.survivalMode ? "survHighScore" : "timeHighScore";
	if(!localStorage[gameType] || parseInt(localStorage[gameType])<birdApp.score){
		localStorage.setItem(gameType, birdApp.score);
	}
	
};

birdApp.gameOver = function() {
	birdApp.highScore();
	birdApp.drawGameOver();
}

birdApp.start = function (mode) {
	birdApp.removeEventListeners();
	birdApp.score = 0;
	birdApp.speed = 50;

	if(!mode.survival){
		birdApp.speed = 50;
		birdApp.survivalMode = false;
        birdApp.timeElapsed = 0;
	} else {
		birdApp.survivalMode = true;
	}
    birdApp.countdown(3);
};

birdApp.pause = function() {
    clearTimeout(birdApp.gameTimer);
    birdApp.clearTimeouts();
    birdApp.timeElapsed = Date.now() - birdApp.timeStarted;
    birdApp.addEventListeners(birdApp.pauseTouch);
    birdApp.drawPause();
};

birdApp.unpause = function(){
    birdApp.countdown(3);
};

