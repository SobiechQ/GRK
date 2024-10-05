function setup() {
    createCanvas(800, 600);
    noLoop();
}
function draw() {
    for(let y=0; y<height; y++)
        for(let x=0; x<width; x++)
            set(x, y, y < (height*0.7) ? color(140, 140, 180) : color(0, 100, 0))

    for (let i = 0; i < 1000; i++) {
        const flowerX = random(0, width);
        const flowerY = random(height*0.7, height);
        set(flowerX, flowerY, color(random(0,255),random(0,255),random(0,255)));
    }
    for(let y=height*0.35; y<height*0.70; y++)
        for(let x=width*0.25; x<width*0.75; x++)
            set(x, y, color(130, 60, 0))

    for (let y = 30, w=0; y < height*0.35; y++, w+=1.5) {
        for (let x = (width/2) - w; x < (width/2) + w; x++) {
            set(x, y, color(255, 100, 100));
        }
    }


    updatePixels();
}
