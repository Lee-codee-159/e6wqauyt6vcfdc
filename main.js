function preload(){

}
function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(150, 300);
    cam = createCapture(VIDEO);
    cam.hide();
    tint_color = "";
}
function draw(){
    image(cam, 0, 0, 550, 450);
    tint(tint_color);
}
function filtercolor(){
    tint_color = document.getElementById("input_filter").value;

}
function take_snapshot(){
    save("MyImage.jpeg");
}