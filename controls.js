////REFERENCE////
// var cTime = video.currentTime; --- audio.currentTime = 0 && checkAudio.currentTime = audio.currentTime
// video.currentTime = 35; ---^^^^
// var x = document.getElementById("myBtn").name;



//// Play/Pause Button                               * === Complete
// Playstate variable (PSV) = false default *
// if PSV === false (play button event sets psv to true && plays)*
// if PSV === true  (play button event sets psv to pause(declare current song position?) && pauses)*
// if PSV === pause (play button event sets psv to true && resumes playback @ saved song position(set song pos. first?))*
(function() {
  playPause = document.getElementById('playPause')
  stopBtn = document.getElementById('stopBtn')
  nextBtn = document.getElementById('nextBtn')
  audio = document.querySelector('audio')
  windowClass = document.getElementById('window').classList
  openBtn = document.getElementById('openBtn')
  playBtn = document.getElementById('play')
  const publicCtrls = {};
  var psv = false;


  function playe() {
    audio.play();
  }
  function pauser() {
    audio.pause();
    // if (psv === false) {
    //   psv = true;
    //   audio.play();
    // }
    // if (psv === true) {
    //   psv = 'pause';
    //   audio.pause();
    //   pp = audio.currentTime;
    // }
    // if (psv === 'pause') {
    //   psv = true;
    //   audio.currentTime = pp;
    //   audio.play();
    // }
  }
  playBtn.addEventListener('click', function(){
    playe();
  })
  playPause.addEventListener("click", function(){
    pauser();
});

//// Stop button (X on window bar)
// Hides Window/player *
// Set PSV === false && stop playback && set song position to 0

  function stop() {
    psv = false;
    audio.pause();
    audio.currentTime = 0;
    windowClass.add('hider');
  }

  stopBtn.addEventListener('click', function(){
    stop();
  });
//// Next/Track 2 Button
// set audio src to track2.mp3*
// set playstate = true && plays*

  function next() {
    audio.pause();
    audio.currentTime = 0;
    document.querySelector('audio').src = 'audio/night-in-tokyo.mp3';
    audio.currentTime = 0;
    audio.play();
  }

  nextBtn.addEventListener('click', function(){
    next();
  });

  function openPlayer() {
    openBtn.onclick = windowClass.remove('hider');
  }
})();
