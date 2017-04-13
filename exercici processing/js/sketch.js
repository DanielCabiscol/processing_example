$(document).ready(function(){
   $("#nit").click(function(){
       bg = loadImage("night.jpg");
       colorMar = color(14, 31, 88);
       colorSol = color(214,221,244);
   });
    
    $("#dia").click(function(){
       bg = loadImage("sky.jpg");
       colorMar = color(45,103, 170);
       colorSol = color(255,204,0);
   });
    
    $("#mesVent").click(function(){
        rapidesa += 0.01;
    });
    
    $("#menysVent").click(function(){
        rapidesa -= 0.01;
    });
    
    $("#mesOnades").click(function(){
        onades += 0.02;
    });
    
    $("#menysOnades").click(function(){
        onades -= 0.05;
    });
    
    $("#sonido").click(function(){
        soMar.play();
    });
    
    $("#mute").click(function(){
        soMar.stop();
    });
});

var yNoise = 0.0; 
var rapidesa = 0.01;
var onades = 0.01;

function preload() {
    soMar = loadSound('sounds/sea.mp3');
}


function setup() {
    createCanvas(1400, 700);
    
    soMar.setVolume(0.1);
    soMar.play();
    
    bg = loadImage("sky.jpg");
    
    colorMar = color(45,103, 170);
    colorSol = color(255,204,0);
    
}

function draw() {
    
  //fiquem la imatge de fons
  background(bg);
    
  //SHAPE ONADES
  stroke(44,80,104); //--> border
  fill(colorMar); //-->background
    
  // ------ Comença el SHAPE de l'onada
  beginShape(); 
  
  var xNoise = 0; 
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // calculem la Y acord amb el valor del NOISE
    
    var y = map(noise(xNoise, yNoise), 0, 1, 400,600);
    
    // Setejem el vertex
    vertex(x, y); 
    // incrementem la X del NOISE de l'onada
    xNoise += onades;
  }
  // incrementem la Y del NOISE de l'onada
  yNoise += rapidesa;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE); 
    
  // ---------- Acaba el shape de l'onada 
    
 // SOL
 fill(colorSol);
 stroke(255,153,0);
 ellipse(150,150,200,200);
 // END SOL
    
}