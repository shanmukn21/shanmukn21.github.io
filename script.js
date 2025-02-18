var width = (document.querySelector("body")).getBoundingClientRect().width;
console.log(width);
var preview = document.querySelectorAll('.preview');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var i = 0;
next.addEventListener('click', function () {
    if(i<9){
        preview[i].style.display = 'none';
        i++;
        preview[i].style.display = 'block';
        if(i===9){
            next.style.display = 'none';
        } else {
            previous.style.display = 'block';
        }
    }
});
previous.addEventListener('click', function () {
    if(i>0){
        preview[i].style.display = 'none';
        i--;
        preview[i].style.display = 'block';
        if(i===0){
            previous.style.display = 'none';
        } else {
            next.style.display = 'block';
        }
    }
});
if (width <= 500) {
    for (let j = 1; j < 10; j++) {
        preview[j].style.display = 'none';
    }
}