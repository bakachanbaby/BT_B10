
let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
let s = 16
btn.onclick = function () {
    box.style.fontSize = s + "px"
    s+=1
}