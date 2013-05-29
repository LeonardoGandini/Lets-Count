$(document).ready(function(){
    $(".AudioTappetino").jPlayer({
        ready: function() {
          $(this).jPlayer("setMedia", {
            //mp3: "http://www.jplayer.org/audio/mp3/Miaow-snip-Stirring-of-a-fool.mp3"
            mp3: "Suoni/LaMadeline.mp3"
          }).jPlayer("play");
          var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          var kickoff = function () {
            $(".AudioTappetino").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
          };
          document.documentElement.addEventListener(click, kickoff, true);
        },
        loop: true,
        volume: 0.09,
      // swfPath: "/js"
      });
   });
  var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
  var kickoff = function () {
  $(".AudioTappetino").jPlayer("play");
  document.documentElement.removeEventListener(click, kickoff, true);
};
document.documentElement.addEventListener(click, kickoff, true);



$('.musica').toggle(function () {
    $(".AudioTappetino").jPlayer("pause");
}, function () {
    $(".AudioTappetino").jPlayer("play");
});
$('.musica').toggle(function () {
    $(".musica").css({'-webkit-filter': 'saturate(0%)', 'opacity':'1'});
}, function () {
    $(".musica").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
});
