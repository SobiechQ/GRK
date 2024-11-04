
function setup() {
    createCanvas(700, 512);
    background(240,240,240);

}
function preload() {
}

let previousX = undefined;
let previousY = undefined;
function mousePressed(){
    drawDot(mouseX, mouseY);
    drawLine(previousX, previousY, mouseX, mouseY);
    previousX = mouseX;
    previousY = mouseY;

}
function drawDot (x, y){
    stroke(0,0,0);
    fill(255,255,255);
    ellipse(x, y, 7);
    noStroke();

}

const drawLine = (xFrom, yFrom, xTo, yTo) => {
    if (xFrom === undefined || yFrom === undefined)
        return;

    stroke(0,0,0);

    const dx = xTo - xFrom;
    const dy = yTo - yFrom;
    const a = dy/dx;
    const b = yFrom - a * xFrom;

    loadPixels();

    const linear = (x) => Math.round(a*x + b);
    for (let x = Math.min(xFrom, xTo); x < Math.max(xFrom, xTo); x++) {
        set(x, linear(x), [0,0,0,255]);
    }

    updatePixels();
    noStroke();



}