// Tainá Moreira Vieira Menegatti
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("audio");
    var playBtn = document.getElementById("playBtn");
    var pauseBtn = document.getElementById("pauseBtn");
    var stopBtn = document.getElementById("stopBtn");

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    stopBtn.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
    });
});