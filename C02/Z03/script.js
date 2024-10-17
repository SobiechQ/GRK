let img = null;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() {
    createCanvas(512, 512);

    img.resize(256, 256);
    img.filter(GRAY);
    img.loadPixels();

    let histogram = new Array(256).fill(0);

    for (let i = 0; i < img.pixels.length; i += 4)
        histogram[img.pixels[i]]++;

    background(255);
    stroke(0);

    const avg = histogram.reduce((a, b) => a + b) / histogram.length;

    Array.from(histogram.entries())
        .map(([key, value]) => [key, map(value, 0, avg * 4, 0, 256)])
        .forEach(([key, value]) => line(key * 2, 256, key * 2, 256 - value))

    image(img, 0, 256)
}