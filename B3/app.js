
let btn = document.querySelector('.btn');
let box1 = document.querySelector('.box_1');
let box2 = document.querySelector('.box_2');
let tmp
btn.onclick = function () {
    tmp = box1.innerHTML
    box1.innerHTML = box2.innerHTML
    box2.innerHTML = tmp
}