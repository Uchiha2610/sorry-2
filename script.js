document.getElementById('clickButton').addEventListener('click', function() {
    var gifContainer = document.getElementById('gifContainer');
    var audio = document.getElementById('apologyAudio');
    
    if (gifContainer.classList.contains('hidden')) {
        gifContainer.classList.remove('hidden');
        audio.play();
    } else {
        gifContainer.classList.add('hidden');
        audio.pause();
        audio.currentTime = 0;
    }
});
