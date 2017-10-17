// audio.src = source
// audio.volume = 0-1 ** Set incremental fade-in?
var audio = document.querySelector('audio')

$(document).ready(function(){
    var rotato = ['bgs/1.gif','bgs/2.gif','bgs/3.gif','bgs/4.gif','bgs/5.gif','bgs/6.gif','bgs/7.gif','bgs/13.gif','bgs/8.gif','bgs/9.gif','bgs/10.gif','bgs/11.gif','bgs/12.gif'];
    var rndm = Math.floor(Math.random() * rotato.length);
    var classToAdd = rotato[rndm];
    $('body').addClass(classToAdd);

});
