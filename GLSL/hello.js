let shader; //shader variable

function preload() { //loading the shader
    shader = loadShader('vertex.glsl', 'fragment.glsl');//storing the shader object
}
function setup() {
    createCanvas(1280, 720, WEBGL);

    //telling p5 to use the loaded shader
    shader(shader);

    noStroke(); //turns off shape outline

}

function draw() {
    clear(); //this will just refresh the screen
    //run the shader
    rect(0,0,width,height); //rectangle size will be set in the vertex shader so no need to set it here
}