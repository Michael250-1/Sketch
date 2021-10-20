function setup(){
Canvas=createCanvas(300, 300);
Canvas.center();
background("white");
Canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function ClearCanvas(){
    background("white");
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(5);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);

    }
}
function classifyCanvas(){
    classifier.classify(Canvas, gotResult);
}
function gotResult(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("label").innerHTML="Label : " + results[0].label;
    document.getElementById("confidence").innerHTML="Confidence : " + Math.round(results[0].confidence * 100) + "%";
    utterthis=new speechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
    
}
}

