const progress1 = document.getElementById("progress1");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    progress1.max = song.duration;
    progress1.value = song.currentTime;

}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause"); 
        ctrlIcon.classList.remove("fa-play");

    }

}
if(song.play()){
    setInterval(()=>{
        progress1.value = song.currentTime;
    },500);
}

progress1.onchange =function(){
    song.play();
    song .currentTime = progress1.value;
    ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classist.remove("fa-play");
}
