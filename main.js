const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
let size = sizeEl.value;
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.reset-btn')
const rainbowBtn = document.querySelector('.rainbow-btn')
const eraseBtn = document.querySelector('.erase-btn')

let draw = false;
let rainbow = false;

color.addEventListener('click', () => rainbow = false)
function randomColor(){
    let arr = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00','#FF7F00','#FF0000']
    const  n = Math.round(Math.random() * 7);
    return arr[n];

}

function populate(size){
    container.style.setProperty('--size', size)
    for(let i = 0 ; i < size * size ; i++ ){
        const div = document.createElement('div');
        div.classList.add('pixels');

        div.addEventListener('mouseover', function(){
            if(!draw) return;
            
            div.style.backgroundColor = rainbow ? randomColor():color.value;
        });
        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = rainbow ? randomColor():color.value;
        })
        
        container.appendChild(div);
    }
}
window.addEventListener('mousedown', function(){
    draw = true;
})
window.addEventListener('mouseup', function(){
    draw = false;
})




function reset(){
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value;
    reset();
})

function erase(){
   rainbow = false;
   color.value = "#ffffff";
   console.log(color.value);
}

eraseBtn.addEventListener('click', erase)

rainbowBtn.addEventListener('click', () => rainbow = true)

populate(size);








