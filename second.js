let left = document.getElementById("left");
let right = document.getElementById("right");
let slide = 0;
let slides = document.getElementsByClassName("all_slides");
let number_slide = document.getElementById("number_slide");
left.addEventListener("click", next_slide_left);
right.addEventListener("click", next_slide_right);
document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowRight') {
        next_slide_right();
    }
    else if (event.code == 'ArrowLeft') {
        next_slide_left();
    }
});
function next_slide_left() {
    slides[slide].classList.remove("active_slide");
    slides[slide].classList.add("slide");
    slide -= 1;
    if (slide == -1) {
        slide = slides.length - 1;
    }
    number_slide.innerHTML = (slide + 1) + "/" + slides.length;
    slides[slide].classList.remove("slide");
    slides[slide].classList.add("active_slide");
}

function next_slide_right() {
    slides[slide].classList.remove("active_slide");
    slides[slide].classList.add("slide");
    slide += 1;
    if (slide == slides.length) {
        slide = 0;
    }
    number_slide.innerHTML = (slide + 1) + "/" + slides.length;
    slides[slide].classList.remove("slide");
    slides[slide].classList.add("active_slide");
}