const canvas = document.getElementById("canvas1");
const cxt = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
const mouse = {
    x: undefined,
    y: undefined,
}
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

function drawCircle(){
    cxt.fillStyle = 'red';
    cxt.beginPath();
    cxt.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
    cxt.fill();
}

