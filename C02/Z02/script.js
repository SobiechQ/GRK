let img = null;
let imgH = null;
let imgS = null;
let imgV = null;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    imgH = createImage(256, 256);
    imgS = createImage(256, 256);
    imgV = createImage(256, 256);
}

function setup() {
    createCanvas(512, 512);
    noLoop();
    img.resize(256, 256);
    img.loadPixels()
    imgH.loadPixels()
    imgS.loadPixels()
    imgV.loadPixels()

    for (let x = 0; x < img.width; x++)
        for (let y = 0; y < img.height; y++) {
            const pos = 4 * (y * img.width + x);
            const r = img.pixels[pos] / 255;
            const g = img.pixels[pos + 1] / 255;
            const b = img.pixels[pos + 2] / 255;

            const cMax = Math.max(r, g, b);
            const cMin = Math.min(r, g, b);
            imgV.set(x, y, cMax * 255);

            const c = cMax - cMin;
            const s = cMax === 0 ? 0 : c / cMax
            imgS.set(x, y, s * 255);

            const h0 = (
                c === 0 ? 0 :
                    cMax === r ? ((g - b) / c) % 6 :
                        cMax === g ? ((b - r) / r) + 2 :
                            ((r-g) / c) / 4
                ) / 6;

            const h = h0 < 0 ? h0 + 1 : h0;

            imgH.set(x,y, h*256);
        }

    imgV.updatePixels();
    imgS.updatePixels();
    imgH.updatePixels();

}

function draw() {
    image(imgS, 256, 0);
    image(imgV, 0, 0);
    image(imgH, 0, 256);
    image(img, 255,255)
    updatePixels();

}
