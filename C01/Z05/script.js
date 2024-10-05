const dot = (tuple) => {
    set(tuple[0], tuple[1], 255)
    return tuple
}
function setup() {
    createCanvas(1800, 900);
    background(0)
    noLoop();
}
function draw() {
    const p1 = [width/2, 40];
    const p2 = [40, height-40];
    const p3 = [width-40, height-40];
    const next = (tuple) => {
        const p = random() < 1/3 ? p1 : random() < 0.5 ? p2 : p3
        return [(tuple[0] + p[0])/2, (tuple[1] + p[1])/2]
    }
    let p = p1;
    for (let i = 0; i < 50000; i++)
        p = next(dot(p));
    updatePixels();
}



