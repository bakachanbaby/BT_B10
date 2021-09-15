let btn = document.querySelector('.btn')
let box = document.querySelector('.box')
let flat = true
btn.onclick = function(){
    if(flat){
        box.style.display = 'none'
        flat = false
    }
    else
    {
        box.style.display = 'block'
        flat = true
    }
}