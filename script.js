const images = [
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg",
"images/img5.jpg",
"images/img6.jpg"
];

let currentIndex = 0;

function openLightbox(index){
currentIndex = index;
document.getElementById("lightbox").style.display = "flex";
document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox(){
document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction){
currentIndex += direction;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

if(currentIndex >= images.length){
currentIndex = 0;
}

document.getElementById("lightbox-img").src = images[currentIndex];
}