var preview = document.querySelectorAll('.preview');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var i = 0;
next.addEventListener('click', function () {
    if (i < 9) {
        preview[i].style.display = 'none';
        i++;
        preview[i].style.display = 'block';
        if (i === 9) {
            next.style.display = 'none';
        } else {
            previous.style.display = 'block';
        }
    }
});
previous.addEventListener('click', function () {
    if (i > 0) {
        preview[i].style.display = 'none';
        i--;
        preview[i].style.display = 'block';
        if (i === 0) {
            previous.style.display = 'none';
        } else {
            next.style.display = 'block';
        }
    }
});
var width = (document.querySelector("body")).getBoundingClientRect().width;
if (width <= 483) {
    for (let j = 1; j < 10; j++) {
        preview[j].style.display = 'none';
    }
}
function updateVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
window.addEventListener('resize', updateVH);
updateVH();
document.getElementById("fullscreenBtn").addEventListener("click", function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/></svg>`;
    } else {
        document.exitFullscreen();
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>`;
    }
});