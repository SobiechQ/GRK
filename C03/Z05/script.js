
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

    const midpoint = () => {
        return 2 * dy - dx
    }

    const xAdd = xTo < xFrom ? -1 : 1
    const yAdd = yTo < yFrom ? -1 : 1
    console.log("test")
    const draw = (acc, x, y) => {
        console.log(x, xTo);
        if (x === xTo)
            return;
        set(x, y, 0);
        return acc < 0 ?
            draw(acc + 2*dy, x + xAdd, y) :
            draw(acc + 2*dy - 2*dx, x + xAdd, y + yAdd);
    }
    draw(midpoint(), xFrom, yFrom);

    updatePixels();
    noStroke();



}



