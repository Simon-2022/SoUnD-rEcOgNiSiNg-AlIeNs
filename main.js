function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1hRcC8D4D/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    console.log("gotResult");
}