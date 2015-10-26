window.onload = function () {
    console.log("hoochie coochie");
    doLohothron();
};

var photos = [
    'image/banana.jpg',
    'image/bar.jpg',
    'image/big_win.jpg',
    'image/cherry.jpg',
    'image/lemon.jpg',
    'image/orange.jpg',
    'image/plum.jpg',
    'image/seven.jpg',
    'image/watermelon.jpg'
];


function getRandomImageSrc() {
    var photosIndex = Math.floor(Math.random() * photos.length);
    console.log("generated image index is " + photosIndex);
    return photos[photosIndex];
}

function isVictory(img0, img1, img2) {
    return (img0 == img1) && (img1 == img2);
}

function onVictory() {
    console.log("Victory");
    var congratsAudio = new Audio("sound/zvonok.mp3");
    congratsAudio.play();
    for (var i = 0; i < 3; i++) {
        document.getElementById("test" + i).setAttribute("class", "color-red");
    }
    alert("You won!");
}

function playStartGameSound() {
    var audio = new Audio("sound/sounds-728-rising-to-the-surface-.mp3");
    audio.play();
}


function doLohothron() {
    var img0 = getRandomImageSrc();
    document.getElementById("test0").setAttribute("src", img0);

    var img1 = getRandomImageSrc();
    document.getElementById("test1").setAttribute("src", img1);

    var img2 = getRandomImageSrc();
    document.getElementById("test2").setAttribute("src", img2);

    if (isVictory(img0, img1, img2)) {
        onVictory();
    } else {
        playStartGameSound();
    }

}