function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KWaHBySFc/model.json', modelready);
}

function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r= Math.floor(Math.random() * 255) + 1;
        g= Math.floor(Math.random() * 255) + 1;
        b= Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb("
        +r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +r+","+g+","+b+")";

        img1 = document.getElementById('puppy1');
        img2 = document.getElementById('puppy2');
        img3 = document.getElementById('puppy3');
        img4 = document.getElementById('puppy4');

        if (results[0].label == "Clap") {
            img1.src = "puppy1.gif";
            img2.src = "puppy2image.png";
            img3.src = "puppy3image.png";
            img4.src = "puppy4image.png";
        }

          else if(results[0].label == "Snapping") {
            img1.src = "puppy1image.jpg";
            img2.src = "puppy2.gif";
            img3.src = "puppy3image.png";
            img4.src = "puppy4image.png";
        }

        else if(results[0].label == "Lightsaber") {
            img1.src = "puppy1image.jpg";
            img2.src = "puppy2image.png";
            img3.src = "puppy3.gif";
            img4.src = "puppy4image.png";
        }

        else {
            img1.src = "puppy1image.jpg";
            img2.src = "puppy2image.png";
            img3.src = "puppy3image.png";
            img4.src = "puppy4.gif";
        }
    }
}

