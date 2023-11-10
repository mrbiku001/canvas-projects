const canvas = document.getElementById('canvas1');
const cxt = canvas.getContext('2d');
console.log(cxt);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// <--Mouse Interactivity with click and mousemove event
const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

function drawCircle(){
    cxt.fillStyle = 'black';
    cxt.beginPath();
    cxt.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    cxt.fill();
}

// drawCircle();