// birdApp.input = (function () { return  !!window.ontouchend ? "touchend" : "click" }());
birdApp.input = "touchstart";

birdApp.removeEventListeners = function() {
	birdApp.canvas.removeEventListener(birdApp.input, birdApp.continueTouch, false);
	birdApp.canvas.removeEventListener(birdApp.input, birdApp.onTouch, false);
	birdApp.canvas.removeEventListener(birdApp.input, birdApp.menuTouch, false);
	birdApp.canvas.removeEventListener(birdApp.input, birdApp.helpTouch, false);
	birdApp.canvas.removeEventListener(birdApp.input, birdApp.pauseTouch, false);

};

birdApp.clearTimeouts = function() {
	for (i = 0; i<birdApp.timeouts.length; i++) {
		clearTimeout(birdApp.timeouts[i]);
	}
};

birdApp.timerUpdate = function () {	
	birdApp.clearTimeouts();
	birdApp.timeouts.push(setTimeout(birdApp.update, (100/birdApp.speed)*1000));
};

birdApp.addEventListeners = function (listener) {
	birdApp.removeEventListeners();
	birdApp.canvas.addEventListener(birdApp.input, listener, false);
};