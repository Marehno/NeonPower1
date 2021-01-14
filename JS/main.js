const canvas = document.getElementById('canvas1');
canvas1.width = 1278;
canvas1.height = 1024;

let aPressed = false;
let dPressed = false;
let frame = 0;
let score = 0;
let gamespeed = 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    auto.update();
    auto.draw();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown', function(e) {
    if (e.code === 'KeyA') aPressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'KeyA') aPressed = false;
});
window.addEventListener('keydown', function(e) {
    if (e.code === 'KeyD') dPressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'KeyD') dPressed = false;
});