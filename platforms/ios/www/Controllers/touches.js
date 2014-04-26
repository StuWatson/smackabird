birdApp.onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
    if(birdApp.pauseCheck(touch)){
        birdApp.pause();
        return;
    }
	var cell = birdApp.getCell(touch);
	birdApp.update(cell);
};

birdApp.menuTouch = function(event) {
	var touch = {x:event.pageX, y:event.pageY}
	var menuPress = birdApp.menuCheck(touch);
	if(menuPress){
		if(menuPress.howToPlay){
			birdApp.drawHowToPlay();
		} else {
			birdApp.start(menuPress);
		}
	}
};

birdApp.continueTouch = function(e) {
	birdApp.removeEventListeners();
	birdApp.removeHtml(["#tweet"]);
	birdApp.drawMenu();	
};

birdApp.helpTouch = function(e) {
	birdApp.removeEventListeners();
	birdApp.removeHtml(["#helpText"]);
	birdApp.drawMenu();
};

birdApp.pauseTouch = function(e) {
	birdApp.removeEventListeners();
    var touch = {x:e.pageX, y:e.pageY};
    var pausePress = birdApp.pausedCheck(touch);
    if(pausePress){
        if(pausePress.continue) {
            birdApp.gameOver();
        } else {
            birdApp.unpause();
        }
    }
};

