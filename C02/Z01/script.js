let img = null;
let imgH = null;
let imgS = null;
let imgV = null;
let imgBlend = null;
function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    imgH = createImage(256,256);
    imgS = createImage(256,256);
    imgV = createImage(256,256);
    imgBlend = createImage(256, 256);
}
function setup() {
    createCanvas(512,512);
    noLoop();
    img.resize(256,256);
    img.loadPixels()
    imgH.loadPixels()
    imgS.loadPixels()
    imgV.loadPixels()

    for(let x=0;x<img.width;x++)
        for(let y=0;y<img.height;y++) {
            const pos=4*(y*img.width+x);
            imgH.pixels[pos] = img.pixels[pos];
            imgH.pixels[pos+3] = 255;
            imgS.pixels[pos+1] = img.pixels[pos+1];
            imgS.pixels[pos+3] = 255;
            imgV.pixels[pos+2] = img.pixels[pos+2];
            imgV.pixels[pos+3] = 255;
        }
    img.updatePixels();
    imgH.updatePixels();
    imgS.updatePixels();
    imgV.updatePixels();
    imgBlend.blend(imgH,0,0,256,256,0,0,256,256,ADD);
    imgBlend.blend(imgS,0,0,256,256,0,0,256,256,ADD);
    imgBlend.blend(imgV,0,0,256,256,0,0,256,256,ADD);
}
function draw() {
    image(imgH, 0,0);
    image(imgS, 256,0);
    image(imgV, 0,256);
    image(imgBlend, 256,256);
    updatePixels();

}
