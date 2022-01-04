prediction_1= "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('teachablemachine.withgoogle.com/models/8699HApVB/',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The Prediction Is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  document.getElementById("result_gesture_name").innerHTML = results[0].label;
  prediction_1 = results[0].label;
  speak();
  if(results[0].label == "hi")
  {
      document.getElementById("result_emoji").innerHTML = "&#9995";
  }
  if(results[0].label == "thumbs up")
  {
      document.getElementById("result_emoji").innerHTML = "&#128077;";
  }
  if(results[0].label == "thumbs down")
  {
      document.getElementById("result_emoji").innerHTML = "&#128078;";
  }
  if(results[0].label == "victory")
  {
      document.getElementById("result_emoji").innerHTML = "&#9996;";

  }if(results[0].label == "Ok")
  {
      document.getElementById("result_emoji").innerHTML = "&#128076;";
  }
  if(results[0].label == "rock")
  {
      document.getElementById("result_emoji").innerHTML = "&#9994;";
  }

}
}