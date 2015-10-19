var photos = ['image/banana.jpg','image/bar.jpg','image/big_win.jpg','image/cherry.jpg','image/lemon.jpg',
'image/orange.jpg','image/plum.jpg', 'image/seven.jpg','image/watermelon.jpg'];
    

function getRandomImageSrc() {
var photosIndex = Math.floor(Math.random() * photos.length);
console.log("generated image index is " + photosIndex);
return photos[photosIndex];
}
function doLohothron() {
var img0 = getRandomImageSrc();
document.getElementById("test").setAttribute("src",banana);

var img1 = getRandomImageSrc();
document.getElementById("test1").setAttribute("src",'image/bar.jpg');

var img2 = getRandomImageSrc();
document.getElementById("test2").setAttribute("src",big_win);
}