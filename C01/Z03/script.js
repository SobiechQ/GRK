function setup() {
    createCanvas(800, 600);
    noLoop();
}
function draw() {
    background(0);
    for(let y=0; y<height; y++)
        for(let x=0; x<width; x++) {
            const b = ((x+y)/(width+height)) * 255
            const dx = x - (width/2)
            const dy = y - (height/2)
            const r = sqrt(dx*dx + dy*dy);
            set(x, y, color(255-r, r, b));
        }
    updatePixels();
}
