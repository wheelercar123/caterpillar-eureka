function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'js/alert-en.wav');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    addEventListener("click", function() {
        var el = document.documentElement
            , reffer =
                   el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
        ;
        reffer.call(el);
        audioElement.play();
    });

   
});