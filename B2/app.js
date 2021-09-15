let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
let colors = ["#00aefd","#ffa400","#07a787","#ff7870","black","pink","yellow","#e74c3c","#2979ff"];

btn.onclick = function(){
    let ran = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = ran;
}