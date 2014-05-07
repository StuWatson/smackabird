birdApp.getCell = function (event) {
	var xGrid;
	var yGrid;
	var width = birdApp.width;
	var height = birdApp.height;
	if(0 < event.x && event.x < width/5 ){
		xGrid = 0;
	} else if ( width/5 <=event.x && event.x < 2*(width/5)) {
		xGrid = (width/5);
	} else if ( 2*(width/5) <=event.x && event.x < 3*width/5) {
		xGrid = 2*(width/5);
	} else if ( 3*(width/5) <=event.x && event.x < 4*width/5) {
		xGrid = 3*(width/5);
	} else if ( 4*(width/5) <=event.x && event.x < width) {
		xGrid = 4*(width/5);
	}

	if( 2*(height/9) <=event.y && event.y< 3*(height/9)) {
		yGrid = 2*height/9;
	} else if (3*(height/9)<=event.y && event.y < 4*(height/9)) {
		yGrid = 3*(height/9);
	} else if (4*(height/9)<=event.y && event.y < 5*(height/9)) {
		yGrid = 4*(height/9);
	} else if (5*(height/9)<=event.y && event.y < 6*(height/9)) {
		yGrid = 5*(height/9);
	} else if (6*(height/9)<=event.y && event.y < 7*(height/9)) {
		yGrid = 6*(height/9);
	} 


	return {x: xGrid, y: yGrid};
};

birdApp.randomise = function () {
	var width = birdApp.width;
	var height = birdApp.height;
	var x = Math.random()*width;
	var y = (2*(height/9))+Math.random()*(5*height/9);
	var cell = birdApp.getCell({x:x, y:y});
	return cell
};

birdApp.newCell = function (start) {
	birdApp.clearTimeouts()
	var cell = birdApp.randomise();
	if(!start){
		var old = birdApp.activeCell;
		if(cell.x == old.x && cell.y == old.y){
			return birdApp.newCell();
		}
	}
	birdApp.activeCell = cell;
	birdApp.drawBird(cell, old);
	birdApp.timerUpdate();
};

birdApp.hitCheck = function(cell) {
	if(cell.x == birdApp.activeCell.x && cell.y == birdApp.activeCell.y) {
		birdApp.score++;
		return true
	}
	return false;
};

birdApp.menuCheck = function(event) {
	var width = birdApp.width;
	var height = birdApp.height;
	if(event.x > width/4){
		if(event.y < 2*(height/5) && event.y > height/5){
			return({survival: false});
		} else if (event.y < 3*(height/5) && event.y >= 2*(height/5)) {
			return({survival: true});
		} else if(event.y <4*(height/5) && event.y >= 3*(height/5)) {
			return({howToPlay: true});
		}
	}
}

birdApp.pauseCheck = function(touch) {
    var width = birdApp.width;
    var height = birdApp.height;
    if(touch.x > 8*(width/9)){
       if(touch.y < height/10) {
         return true;
       }
    }
    return false;
};

birdApp.pausedCheck = function (touch) {
    var width = birdApp.width;
    var height = birdApp.height;
    if(touch.x > width /4) {
        if(touch.y >  height/3 && touch.y < (height/3 + birdApp.cont.height)) {
        	return {quit: true};
        }
        else if(touch.y > height/2 && touch.y < (height/2 + birdApp.quit.height)) {
        	return {continue: true};
        }
    }
}
