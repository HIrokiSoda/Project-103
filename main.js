Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});


Webcam.attach("#camera")


function takePic(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML = "<img id = 'image1point0' src = '"+pic+"'>"
        });
    
}
console.log("ml5 version: ", ml5.version)