var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassifictaion()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zmUr7sl7u/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
  if(error)
    {
        console.error(error);
    }
    else
    {
       console.log(results);
       random_number_r=Math.floor(Math.random() * 255) + 1;
       random_number_g=Math.floor(Math.random() * 255) + 1;
       random_number_b=Math.floor(Math.random() * 255) + 1;

       document.getElementById("detected").innerHTML = "Detected Dog - "+dog+" ,Detected Cat - "+cat+" ,Detected Lion - "+lion+" ,Detected cow - "+cow;
       document.getElementById('detected').style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 
       document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label
       document.getElementById('voice').style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById("image");

       if(results[0].label == "Barking"){
           img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";  
           dog = dog + 1;
           document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
       }else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
       }else if(results[0].label == "Roaring"){
            img.src = "https://thumbs.gfycat.com/AccomplishedCrispGrasshopper-size_restricted.gif";
            lion = lion + 1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }else if (results[0].label == "Mooing"){
            img.src = "https://i.pinimg.com/originals/26/79/f1/2679f1938fe80e8855b9173cda334f0d.gif";
            cow = cow + 1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        } else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - " + background_noise;
    }
  }
}
