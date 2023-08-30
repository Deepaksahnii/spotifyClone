console.log("hello");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Hamra ke pyar kare da1", filePath: "1.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da2", filePath: "2.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da3", filePath: "3.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da4", filePath: "4.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da5", filePath: "5.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da6", filePath: "6.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da7", filePath: "7.mp3", coverPath: "cover1.jpg" },
    { songName: "Hamra ke pyar kare da8", filePath: "1.mp3", coverPath: "cover1.jpg" }
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play/pause event
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});


// listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate ho rha hai");
    // update progressBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    console.log(progress);
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
    })
}  

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log(e.target);
            makeAllPlays();
            index = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.currentTime = 0;
            audioElement.src = `${index +1}.mp3`;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        })
    })