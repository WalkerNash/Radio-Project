////REFERENCE////

// DEFINE GLOBAL VARIABLES //
var pauseIt     = document.getElementById('pauseBtn');
var stopIt      = document.getElementById('stopBtn');
var nextIt      = document.getElementById('nextBtn');
var windowClass = document.getElementById('window').classList;
var playIt      = document.getElementById('playBtn');
var openBtn     = document.getElementById('openBtn');
var innerImg    = document.getElementById('innerImg');
var artistInfo  = document.getElementById('artistInfo');
var trackInfo   = document.getElementById('trackInfo');

(function(ENV) {
  const client_id = ENV.client_id;
  console.log('hello world');
  SC.initialize({
    client_id: client_id
  });

  SC.get('/tracks', {
    q: 'vaporwave'
  }).then(function(tracks) {
    let x = 1;
    let currentTrack = tracks[x];
    // var trackList = tracks;
    innerImg.src = currentTrack.artwork_url;
    artistInfo.innerHTML = currentTrack.permalink;
    artistInfo.href      = currentTrack.user.permalink_url;
    trackInfo.innerHTML  = currentTrack.title;
    trackInfo.href       = currentTrack.permalink_url;
    SC.stream('/tracks/' + currentTrack.id).then(function(player) {
      playIt.addEventListener ('click', function(){
        player.play();
      })
      pauseIt.addEventListener('click', () => player.pause());
      stopIt.addEventListener('click', function(){
        player.pause();
        player.seek(0);
      })
        nextIt.addEventListener('click', function(){
          // player.pause();
          // player.seek(0);
          x++;
          currentTrack = tracks[x];
          console.log(currentTrack.id)
          SC.stream('/tracks/' + currentTrack.id).then(function(player) {
            innerImg.src = currentTrack.artwork_url;
            trackInfo.innerHTML = currentTrack.permalink + "<br>" + currentTrack.title;
            player.play();
            playIt.addEventListener ('click', () => player.play());
            pauseIt.addEventListener('click', () => player.pause());
            stopIt.addEventListener('click', function(){
              player.pause();
              player.seek(0);
            })
          })

        });


    })
  });

})(ENV)

//// Stop button (X on window bar)
// Hides Window/player *
  // function stop() {
  //   psv === false;
  //   audio.pause;
  //   audio.currentTime = 0;
  //   windowClass.add('hider');
  // }
//// Next/Track 2 Button






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
//Set incremental fade-in?
