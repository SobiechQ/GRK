function setup() {
    createCanvas(512, 512);
    background(255);
}

let last_x = -1;
let last_y = -1;

function mouseDragged() {
    if(mouseButton !== LEFT) return;
    if(last_x>0) {
        line(last_x,last_y,mouseX,mouseY);
    }
    last_x=mouseX;
    last_y=mouseY;
}
function mouseReleased() {
    last_x=last_y=-1;
    if(mouseButton === RIGHT) {
        loadPixels();
        flood_fill(mouseX,mouseY);
        updatePixels();
        // console.log("called")
    }
}
function set_pixel(x,y,c) {
    let idx = (y * 512 + x) * 4;
    pixels[idx]=c;
    pixels[idx+1]=c;
    pixels[idx+2]=c;
    pixels[idx+3]=255;
}
function get_pixel(x,y) {
    let idx = (y * 512 + x) * 4;
    return pixels[idx];
}
function flood_fill(x,y) {
    let stack = [];
    stack.push([x, y]);



    for (let cnt = 100000;  stack.length !== 0 && cnt > 0; cnt--) {
        const tuple = stack.pop();

        if (tuple[0] < 0  || tuple[0] > width || tuple[1] < 0 || tuple[1] > height)
            continue;
        if (get_pixel(tuple[0], tuple[1]) !==  255)
            continue;
        set_pixel(tuple[0], tuple[1], 100);


        stack.push([tuple[0]-1, tuple[1]]);
        stack.push([tuple[0]+1, tuple[1]]);
        stack.push([tuple[0], tuple[1]-1]);
        stack.push([tuple[0], tuple[1]+1]);

    }

}