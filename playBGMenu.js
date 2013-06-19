$(document).ready(function(){
    $(".AudioMenuTappeto").jPlayer({
        ready: function() {
          $(this).jPlayer("setMedia", {
              mp3: "Suoni/Ghost.mp3"
          }).jPlayer("play");
         

          var click = document.ontouchstart === undefined ? 'click' : 'touchstart MSPointerDown';
          var kickoff = function () {
            $(".AudioMenuTappeto").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
          };
          document.documentElement.addEventListener(click, kickoff, true);

          
       },
        loop: true,
       // volume: 0.09,
      // swfPath: "/js"
      });
   });
/*
  var click = document.ontouchstart === undefined ? 'click' : 'touchstart MSPointerDown';
  var kickoff = function () {
  $(".AudioMenuTappeto").jPlayer("play");
  document.documentElement.removeEventListener(click, kickoff, true);
};
document.documentElement.addEventListener(click, kickoff, true);
*/


$('.musica').toggle(function () {
    $(".AudioMenuTappeto").jPlayer("pause");
}, function () {
    $(".AudioMenuTappeto").jPlayer("play");
});
