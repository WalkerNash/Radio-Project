// audio.src = source
// audio.volume = 0-1 ** Set incremental fade-in?
////REFERENCE////
// var cTime = video.currentTime; --- audio.currentTime = 0 && checkAudio.currentTime = audio.currentTime
// video.currentTime = 35; ---^^^^
// var x = document.getElementById("myBtn").name;

// var playPause = document.getElementById('playPause')
// var stopBtn = document.getElementById('stopBtn')
// var nextBtn = document.getElementById('nextBtn')
// var src = document.querySelector('audio').src
// var audio = document.getElementById('audio')
// var windowClass = document.getElementById('window').classList
// var openBtn = document.getElementById('openBtn')

//// Play/Pause Button                               * === Complete
// Playstate variable (PSV) = false default *
// if PSV === false (play button event sets psv to true && plays)*
// if PSV === true  (play button event sets psv to pause(declare current song position?) && pauses)*
// if PSV === pause (play button event sets psv to true && resumes playback @ saved song position(set song pos. first?))*
// const AudioCtrls = (function() {
//   const publicCtrls = {};
//   var psv = false;
//
//   function playPause() {
//     if psv === false   (psv === true && audio.play);
//     if psv === true    (psv === 'pause' && audio.pause && pp = audio.currentTime);
//     if psv === 'pause' (psv === true && audio.currentTime = pp && audio.play);
//   }



//// Stop button (X on window bar)
// Hides Window/player *
// Set PSV === false && stop playback && set song position to 0

  // function stop() {
  //   psv === false;
  //   audio.pause;
  //   audio.currentTime = 0;
  //   windowClass.add('hider');
  // }

//// Next/Track 2 Button
// set audio src to track2.mp3*
// set playstate = true && plays*

  // function next() {
  //   src = 'track2.mp3';
  //   audio.play;
  //   psv === true;
  // }

//   function openPlayer() {
//     openBtn.onclick = windowClass.remove('hider');
//   }
// })()

////BACKGROUND RANDOMIZER////
// $(document).ready(function(){
//     var rotato = ['bgs/1.gif','bgs/2.gif','bgs/3.gif','bgs/4.gif','bgs/5.gif','bgs/6.gif','bgs/7.gif','bgs/13.gif','bgs/8.gif','bgs/9.gif','bgs/10.gif','bgs/11.gif','bgs/12.gif'];
//     var rndm = Math.floor(Math.random() * rotato.length);
//     var classToAdd = rotato[rndm];
//     $('body').addClass(classToAdd);
//
// });

////PLAYLIST GENERATOR////

////PLAYLIST OPERATION////

////SHUFFLE FUNCTION////
