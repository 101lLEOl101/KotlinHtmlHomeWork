let menu = document.getElementById("menu");
let left_menu = document.getElementById("left_menu");
let center_menu = document.getElementById("center_menu");
menu.addEventListener("click", function () {
    if (this.classList.contains('right')) {
        this.classList.remove('right');
        this.classList.add('left');
        this.classList.add('left-speed');
        setTimeout(func = () => {
            center_menu.classList.add('hid')
        }, 0.1 * 1000);
        setTimeout(func = () => {
            left_menu.classList.add('hid')
        }, 0.5 * 1000);
        setTimeout(func = () => {
            this.classList.remove('left-speed')
        }, 0.5 * 1000);
    }
    else {
        this.classList.add('right');
        this.classList.remove('left');
        this.classList.add('right-speed');
        setTimeout(func = () => {
            center_menu.classList.remove('hid')
        }, 0.5 * 1000);
        setTimeout(func = () => {
            left_menu.classList.remove('hid')
        }, 0.1 * 1000);
        setTimeout(func = () => {
            this.classList.remove('right-speed')
        }, 0.5 * 1000);
    }
});