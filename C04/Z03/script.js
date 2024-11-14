const makeVector = (x, y) => [x,y,1];

const drawVector = (img, vec) => {
    const x = vec[0];
    const y = vec[1];
    if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newX = x + i;
            const newY = y + j;
            if (newX >= 0 && newX < img.width && newY >= 0 && newY < img.height) {
                img.set(newX, newY, color([0, 0, 0, 1]));
            }
        }
    }
    img.updatePixels();
}
const multiplyMatrixVector = (matrix, vector) => {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < vector.length; j++) {
            sum += matrix[i][j] * vector[j];
        }
        result.push(sum);
    }
    return result;
}
const multiplyMatrix = (matrixA, matrixB) => {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
const identityMatrix = () => [[1,0,0],[0,1,0],[0,0,1]];
const translationMatrix = (tx, ty) => [[1,0,tx],[0,1,ty],[0,0,1]];
const scalingMatrix = (sx, sy) => [[sx,0,0],[0,sy,0],[0,0,1]];
const rotationMatrix = (angle) => {
    const rad = radians(angle);
    return [[cos(rad),-sin(rad),0],[sin(rad),cos(rad),0],[0,0,1]];
}
const shearMatrix = (shx, shy) => [[1,shx,0],[shy,1,0],[0,0,1]];


let imgA = null;
let imgB = null;
function setup() {
    createCanvas(512,512);
    background(255);
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    const d = pixelDensity();
    for(let i=0; i<512*512*4*d; i+=4) {
        imgA.pixels[i]=240;
        imgA.pixels[i+1]=250;
        imgA.pixels[i+2]=240;
        imgA.pixels[i+3]=255;
        imgB.pixels[i]=240;
        imgB.pixels[i+1]=240;
        imgB.pixels[i+2]=250;
        imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();


}
function draw() {
    if (!keyIsDown(32)) {
        image(imgA,0,0);
        text('Image A',10,20);
    } else {
        image(imgB,0,0);
        text('Image B',10,20);
    }



}
function mouseDragged(){
    const vec = makeVector(mouseX, mouseY);
    const combinedMatrix = multiplyMatrix(translationMatrix(100, -50), multiplyMatrix(scalingMatrix(0.4, 0.4), rotationMatrix(15)));


    const vecPrim = multiplyMatrixVector(combinedMatrix, vec);


    drawVector(imgA, vec);
    drawVector(imgB, vecPrim);



}
