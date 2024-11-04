
function setup() {
    createCanvas(700, 512);
    background(240,240,240);

}
function preload() {
}

let previousX = undefined;
let previousY = undefined;
function mousePressed(){

    drawLine(previousX, previousY, mouseX, mouseY);
    previousX = mouseX;
    previousY = mouseY;

}

const drawLine = (xFrom, yFrom, xTo, yTo) => {
    if (xFrom === undefined || yFrom === undefined)
        return;

    stroke(0,0,0);

    const dx = xTo - xFrom;
    const dy = yTo - yFrom;

    loadPixels();

    const distance = (x, y) => {
        return 2 * dy * (x-xFrom) - 2 * dx * (y-yFrom);
    }

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            set(x, y, color(distance(x, y),-distance(x, y),0));
        }
    }

    updatePixels();
    noStroke();



}