birdApp.createTweetButton = function() {
	var a = document.querySelector('#tweet');
	a.style.display = 'block';
    a.style.top = 3*(birdApp.height/4)+'px';
	a.href = "twitter://post?message=I%20just%20scored%20" + birdApp.score + "%20on%20Smack%20A%20Bird!%20See%20if%20you%20can%20beat%20me!";
};

birdApp.drawGameOver = function() {
	var textPos = birdApp.width/2;
	birdApp.drawBg();
	birdApp.ctx.font=(birdApp.height/20)+"px Base";
    birdApp.ctx.textAlign = "center";
    birdApp.ctx.fillStyle = "#990000";
	birdApp.ctx.fillText("Game Over!" , textPos, birdApp.height/5);
    birdApp.ctx.fillText("Score: " + birdApp.score, textPos, 3*(birdApp.height/10));
    birdApp.ctx.font=(birdApp.height/30)+"px Base";
	birdApp.ctx.fillText("High Score: " + (birdApp.survivalMode ? localStorage.survHighScore : localStorage.timeHighScore), textPos, 3*(birdApp.height/5));
	birdApp.removeEventListeners();
	birdApp.clearTimeouts();
	birdApp.createTweetButton();
	birdApp.timeouts.push(
        setTimeout(function(){
            birdApp.addEventListeners(birdApp.continueTouch, true);
            birdApp.ctx.fillText("Tap anywhere to continue", textPos, 4.5*(birdApp.height/10));
	}, 1000));
};