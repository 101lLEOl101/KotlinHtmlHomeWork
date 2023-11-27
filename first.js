let left = document.getElementById("left");
let right = document.getElementById("right");
let slide = 0;
let slides = document.getElementsByClassName("all_slides");
let slide_blocks = document.getElementsByClassName("blocks");
console.log(slide_blocks);
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
    slide_blocks[slide].classList.remove("active_slide_block");
    slide_blocks[slide].classList.add("slide_block");
    slide -= 1;
    if (slide == -1) {
        slide = slides.length - 1;
    }
    slides[slide].classList.remove("slide");
    slides[slide].classList.add("active_slide");
    slide_blocks[slide].classList.remove("slide_block");
    slide_blocks[slide].classList.add("active_slide_block");
}

function next_slide_right() {
    slides[slide].classList.remove("active_slide");
    slides[slide].classList.add("slide");
    slide_blocks[slide].classList.remove("active_slide_block");
    slide_blocks[slide].classList.add("slide_block");
    slide += 1;
    if (slide == slides.length) {
        slide = 0;
    }
    slides[slide].classList.remove("slide");
    slides[slide].classList.add("active_slide");
    slide_blocks[slide].classList.remove("slide_block");
    slide_blocks[slide].classList.add("active_slide_block");
}