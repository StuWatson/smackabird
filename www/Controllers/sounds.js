birdApp.sounds = [];
birdApp.lastIndex = 0;
birdApp.tune = new Audio(birdApp.getPhoneGapPath() + '/sounds/tune.wav');
for(var i = 1; i < 7; i++) {
    birdApp.sounds.push(new Audio(birdApp.getPhoneGapPath() + '/sounds/Bird_Smack_' + i + '.wav'));
}

birdApp.playSmack = function () {
  var i = Math.floor(Math.random()*6);
  if(i !== birdApp.lastIndex) {
    birdApp.sounds[i].play();
      birdApp.lastIndex = i;
  } else {
    birdApp.playSmack();
  }
};

birdApp.tuneIsPaused = function (audio) {
  return audio.paused;
};

birdApp.tune.loop = true;
birdApp.tune.play();
