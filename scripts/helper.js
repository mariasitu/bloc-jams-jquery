class Helper {

  playPauseAndUpdate(song){
    player.playPause.each(song) {
      $('#total-time').text(duration - currentTime);
    };
  };
}

let helper = Helper;
