const canvas = document.getElementById("canvas1");
const cxt = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse ={
    x: undefined,
    y: undefined,
}

function drawCircle(){
    cxt.fillStyle = 'red';
    cxt.beginPath();
    cxt.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    cxt.fill();
}

canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

function animate(){
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}
animate();