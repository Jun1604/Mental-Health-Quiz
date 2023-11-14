console.log("script running");
const disclaimerButton = document.querySelector("#disclaimerButton");
const disclaimer = document.querySelector("#disclaimer");
const welcomeQuiz = document.querySelector("#welcomeQuiz");
const yesClicked = document.querySelectorAll(".yesHover")
const noClicked = document.querySelectorAll(".noHover")
const weightChoice= document.querySelectorAll(".hover")
const questions= document.querySelector("#questions")
const results= document.querySelector("#results")
const result= document.querySelector("#result")
const sentence= document.querySelector("#sentence")

const gen1 = document.querySelector("#gen-0");
const gen2 = document.querySelector("#gen-1");
const gen3 = document.querySelector("#gen-2");
const gen4 = document.querySelector("#gen-3");
const gen5 = document.querySelector("#gen-4");

const ptsd1 = document.querySelector("#ptsd-0");
const ptsd2 = document.querySelector("#ptsd-1");
const ptsd3 = document.querySelector("#ptsd-2");
const ptsd4 = document.querySelector("#ptsd-3");

const depression1 = document.querySelector("#depression-0");
const depression2 = document.querySelector("#depression-1");
const depression3 = document.querySelector("#depression-2");
const depression4 = document.querySelector("#depression-3");
const depression5 = document.querySelector("#depression-4");

const adhd1 = document.querySelector("#adhd-0");
const adhd2 = document.querySelector("#adhd-1");
const adhd3 = document.querySelector("#adhd-2");
const adhd4 = document.querySelector("#adhd-3");
const adhd5 = document.querySelector("#adhd-4");

const schizophrenia1 = document.querySelector("#schizophrenia-0");
const schizophrenia2 = document.querySelector("#schizophrenia-1");
const schizophrenia3 = document.querySelector("#schizophrenia-2");
const schizophrenia4 = document.querySelector("#schizophrenia-3");
const schizophrenia5 = document.querySelector("#schizophrenia-4");

const autism1 = document.querySelector("#autism-0");
const autism2 = document.querySelector("#autism-1");
const autism3 = document.querySelector("#autism-2");
const autism4 = document.querySelector("#autism-3");
const autism5 = document.querySelector("#autism-4");
const autism6 = document.querySelector("#autism-5");

const bad1 = document.querySelector("#bad-0");
const bad2 = document.querySelector("#bad-1");
const bad3 = document.querySelector("#bad-2");
const bad4 = document.querySelector("#bad-3");
const bad5 = document.querySelector("#bad-4");
const bad6 = document.querySelector("#bad-5");
const bad7 = document.querySelector("#bad-6");
// const bad8 = document.querySelector("#bad-7");

const anorexia1 = document.querySelector("#anorexia-0");
const anorexia2 = document.querySelector("#anorexia-1");
const anorexia3 = document.querySelector("#anorexia-2");
const anorexia4 = document.querySelector("#anorexia-3");

const bulimia1 = document.querySelector("#bulimia-0");
const bulimia2 = document.querySelector("#bulimia-1");
const bulimia3 = document.querySelector("#bulimia-2");
const bulimia4 = document.querySelector("#bulimia-3");
const bulimia5 = document.querySelector("#bulimia-4");

const binge1 = document.querySelector("#binge-0");
const binge2 = document.querySelector("#binge-1");
const binge3 = document.querySelector("#binge-2");
const binge4 = document.querySelector("#binge-3");

const arfid1 = document.querySelector("#arfid-0");
const arfid2 = document.querySelector("#arfid-1");
const arfid3 = document.querySelector("#arfid-2");
const arfid4 = document.querySelector("#arfid-3");

const sad1 = document.querySelector("#sad-0");
const sad2 = document.querySelector("#sad-1");
const sad3 = document.querySelector("#sad-2");

var yesButtons =[];
var noButtons=[];
var weightButtons=[];
var diagnosis="";
let symptomCounter = {
  "ptsd": 0,
  "depression": 0,
  "adhd/add": 0,
  "schizophrenia": 0,
  "bad": 0,
  "anorexia": 0,
  "bulimia": 0,
  "binge": 0,
  "afrid": 0,
  "social anxiety": 0,
}
disclaimerButton.addEventListener("click", (e) => {
  console.log("disclaimer pressed")
  disclaimer.classList.add("hidden")
  welcomeQuiz.classList.remove("hidden")
  setTimeout(function() { welcomeQuiz.classList.add("hidden"); }, 1500);
  questions.append(gen1)
  setTimeout(function() { gen1.classList.remove("hidden") }, 1500);
});

weightChoice.forEach((weightButton) => {
  weightButton.addEventListener("click", (e) => {
    if((weightButtons.includes(weightButton.id)===false)){
        console.log("clicked " + weightButton.id)
        var choice = weightButton.id.split("-")
        console.log(choice)
        var choice1 = choice[0]
        var underId= choice1+ "-0"
        var obeseId = choice1 + "-1"
        var averageId = choice1 + "-2"
        var underCorresponding = document.querySelector("#"+underId)
        var obeseCorresponding = document.querySelector("#"+obeseId)
        var averageCorresponding = document.querySelector("#"+averageId)
        weightButton.classList.add("selected")
        underCorresponding.classList.remove("hover")
        obeseCorresponding.classList.remove("hover")
        averageCorresponding.classList.remove("hover")
        weightButtons.push((underId))
        weightButtons.push(obeseId)
        weightButtons.push(averageId)
        var removeSelected;
      
        if (weightButton.id === "g3-0") {
          removeSelected=arfid1;
        }
        if (weightButton.id === "g3-1") {
          removeSelected=binge1;
        }
        if (weightButton.id === "g3-2") {
          removeSelected=bulimia1;
        }
      removeSelected.classList.remove("hidden")
      questions.append(removeSelected)
    }
  })
})

yesClicked.forEach((yesButton) => {
  yesButton.addEventListener("click", (e) => {
    if((yesButtons.includes(yesButton.id)===false)){
        console.log("clicked " + yesButton.id)
        var choice = yesButton.id.split("-")
        console.log(choice)
        var choice1 = choice[0]
        var noId = choice1 + "-1"
        var noCorresponding = document.querySelector("#"+noId)
        yesButton.classList.remove("yesHover")
        yesButton.classList.add("selected")
        noCorresponding.classList.remove("noHover")
        yesButtons.push((yesButton.id))
        noButtons.push(noId)
        var removeSelected;
      
        if (yesButton.id === "g0-0") {
          removeSelected=ptsd1;
        }
        if (yesButton.id === "g4-0") {
          removeSelected=autism1;
        }
        if (yesButton.id === "ptsd0-0") {
          removeSelected=ptsd2;
        }
        if (yesButton.id === "ptsd1-0") {
          removeSelected=ptsd3;
        }
        if (yesButton.id === "ptsd2-0") {
          removeSelected=ptsd4;
        }
        if (yesButton.id === "ptsd3-0") {
          diagnosis = "PTSD";
          console.log(diagnosis)
        }
        if (yesButton.id === "g1-0") {
          removeSelected= depression1
        }
        if (yesButton.id === "d0-0") {
          removeSelected=depression2
        }
        if (yesButton.id === "d1-0") {
          removeSelected=depression3
        }
        if (yesButton.id === "d2-0") {
          removeSelected=depression4
        }
        if (yesButton.id === "d3-0") {
          removeSelected=bad1
        }
        if (yesButton.id === "bad0-0") {
          removeSelected=bad2
        }
        if (yesButton.id === "bad1-0") {
          removeSelected=bad3
        }
        if (yesButton.id === "bad2-0") {
          removeSelected=bad4
        }
        if (yesButton.id === "bad3-0") {
          removeSelected=bad5
        }
        if (yesButton.id === "bad4-0") {
          removeSelected=bad7
        }
        if (yesButton.id === "bad6-0") {
          diagnosis = "Bipolar Affective Disease"
          console.log(diagnosis)
        }
        if (yesButton.id === "d4-0") {
          diagnosis="Seasonal Affective Disorder"
          console.log(diagnosis)
        }
        if (yesButton.id === "g2-0") {
          removeSelected= gen4
        }
        if (yesButton.id === "arf0-0") {
          removeSelected= anorexia1
        }
        if (yesButton.id === "ano0-0") {
          removeSelected= anorexia2
        }
        if (yesButton.id === "ano1-0") {
          removeSelected= anorexia3
        }
        if (yesButton.id === "ano2-0") {
          removeSelected=anorexia4
        }
        if (yesButton.id === "ano3-0") {
          diagnosis="Anorexia"
          console.log(diagnosis)
        }
        if (yesButton.id === "arf1-0") {
          removeSelected= arfid3
        }
        if (yesButton.id === "arf2-0") {
          removeSelected= arfid4
        }
        if (yesButton.id === "arf3-0") {
          diagnosis= "Avoidant Restrictive Food Intake Disorder"
          console.log(diagnosis)
        }
      if (yesButton.id === "bul0-0") {
          removeSelected=bulimia2
        }
        if (yesButton.id === "bul1-0") {
          removeSelected= bulimia3
        }
        if (yesButton.id === "bul2-0") {
          removeSelected= bulimia4
        }
        if (yesButton.id === "bul3-0") {
          removeSelected= bulimia5
        }
        if(yesButton.id === "bul4-0") {
          diagnosis= "Bulimia"
          console.log(diagnosis)
        }
        if (yesButton.id === "bin0-0") {
          removeSelected= binge2
        }
        if (yesButton.id === "bin1-0") {
          removeSelected= binge3
        }
        if (yesButton.id === "bin2-0") {
          removeSelected= binge4
        }
        if (yesButton.id === "bin3-0") {
          diagnosis= "Binge Eating Disorder"
          console.log(diagnosis)
        }
        if (yesButton.id === "g4-0") {
          removeSelected= autism1
        }
        if (yesButton.id === "au0-0") {
          removeSelected= autism2
        }
        if (yesButton.id === "au1-0") {
          removeSelected= autism3
        }
        if (yesButton.id === "au2-0") {
          removeSelected= autism4
        }
        if (yesButton.id === "au3-0") {
          removeSelected= autism5
        }
        if (yesButton.id === "au4-0") {
          removeSelected= autism6
        }
        if (yesButton.id === "au5-0") {
          diagnosis= "Autism"
          console.log(diagnosis)
        }
        if (yesButton.id === "a0-0") {
          removeSelected= adhd2
        }
        if (yesButton.id === "a1-0") {
          removeSelected= adhd3
        }
        if (yesButton.id === "a2-0") {
          removeSelected= adhd4
        }
        if (yesButton.id === "a3-0") {
          removeSelected= adhd5
        }
        if (yesButton.id === "a4-0") {
          diagnosis="ADHD/ADD"
          console.log(diagnosis)
        }
        if (yesButton.id === "sad0-0") {
          removeSelected= sad2
        }
        if (yesButton.id === "sad1-0") {
          removeSelected= sad3
        }        
        if (yesButton.id === "sad2-0") {
          diagnosis="Social Anxiety Disorder"
          console.log(diagnosis)
        }
        if (yesButton.id === "sch0-0") {
          removeSelected=schizophrenia2;
        }
        if (yesButton.id === "sch1-0") {
          removeSelected=schizophrenia3;
        }
        if (yesButton.id === "sch2-0") {
          removeSelected=schizophrenia4;
        }
        if (yesButton.id === "sch3-0") {
          removeSelected=schizophrenia5;
        }
        if (yesButton.id === "sch4-0") {
          diagnosis= "Schizophrenia";
          console.log(diagnosis)
        }
      if((diagnosis.length)>0){
        if(diagnosis==="No Match"){
          sentence.innerHTML= "Your symptoms did not align with any of the mental conditions/disorders on this quiz.";
          result.innerHTML= ""+diagnosis;
        }else{
        result.innerHTML= ""+diagnosis
        }
        questions.classList.add("hidden")
        results.classList.remove("hidden")
      }else{
      removeSelected.classList.remove("hidden")
      questions.append(removeSelected)      
      }
    }
  })
})

noClicked.forEach((noButton) => {
  noButton.addEventListener("click", (e) => {
    if((noButtons.includes(noButton.id)===false)){
        console.log("clicked " + noButton.id)
        var choice = noButton.id.split("-")
        console.log(choice)
        var choice1 = choice[0]
        var yesId = choice1 + "-0"
        var yesCorresponding = document.querySelector("#"+yesId)
        console.log(yesCorresponding)
        noButton.classList.remove("noHover")
        noButton.classList.add("selected")
        yesCorresponding.classList.remove("yesHover")
        noButtons.push((noButton.id))
        yesButtons.push(yesId)
        var removeSelected;

        if (noButton.id === "g0-1") {
          removeSelected=gen2;
        }
        if (noButton.id === "ptsd0-1") {
          removeSelected=gen2;
        }
        if (noButton.id === "ptsd1-1") {
          removeSelected=gen2;
        }
        if (noButton.id === "ptsd2-1") {
          removeSelected=gen2;
        }  
        if (noButton.id === "ptsd3-1") {
          removeSelected=gen2;
        }
        if (noButton.id === "g1-1") {
          removeSelected=gen3;
        }
        if (noButton.id === "d0-1") {
          removeSelected=gen3
        }
        if (noButton.id === "d1-1") {
          removeSelected=gen3
        }
        if (noButton.id === "d2-1") {
          removeSelected=gen3
        }  
        if (noButton.id === "g2-1") {
          removeSelected=gen5;
        }
        if (noButton.id === "d3-1") {
          removeSelected=depression5
        }
        if (noButton.id === "d4-1") {
          diagnosis="Depression"
          console.log(diagnosis)
        }
        if (noButton.id === "ano0-1") {
          removeSelected= arfid2
        }
        if (noButton.id === "arf0-1") {
          removeSelected= bulimia1
        }
        if (noButton.id === "arf1-1") {
          removeSelected= arfid3
        }
        if (noButton.id === "arf2-1") {
          removeSelected= arfid4
        }
        if (noButton.id === "arf3-1") {
          diagnosis= "Avoidant Restrictive Food Intake Disorder"
          console.log(diagnosis)
        }
        if (noButton.id === "bul0-1") {
          removeSelected=gen5
        }
        if (noButton.id === "bul1-1") {
          removeSelected= binge1
        }
        if (noButton.id === "bul2-1") {
          removeSelected= gen5
        }
        if (noButton.id === "bul3-1") {
          removeSelected= gen5
        }
        if (noButton.id === "bul4-1") {
          removeSelected= gen5
        }
        if (noButton.id === "bin0-1") {
          removeSelected= binge2
        }
        if (noButton.id === "bin1-1") {
          removeSelected= binge3
        }
        if (noButton.id === "bin2-1") {
          removeSelected= binge4
        }
        if (noButton.id === "bin3-1") {
          removeSelected= gen5
        }
        if (noButton.id === "ano1-1") {
          removeSelected= anorexia3
        }
        if (noButton.id === "ano2-1") {
          removeSelected=anorexia4
        }
        if (noButton.id === "ano3-1") {
          diagnosis="Anorexia"
          console.log(diagnosis)
        }
        if (noButton.id === "au0-1") {
          removeSelected= adhd1
        }
        if (noButton.id === "au1-1") {
          removeSelected= autism3
        }
        if (noButton.id === "au2-1") {
          removeSelected= autism4
        }
        if (noButton.id === "au3-1") {
          removeSelected= autism5
        }
        if (noButton.id === "au4-1") {
          removeSelected= autism6
        }
        if (noButton.id === "au5-1") {
          diagnosis= "Autism"
          console.log(diagnosis)
        }
        if (noButton.id === "a0-1") {
          removeSelected= sad1
        }
        if (noButton.id === "a1-1") {
          removeSelected= adhd3
        }
        if (noButton.id === "a2-1") {
          removeSelected= adhd4
        }
        if (noButton.id === "a3-1") {
          removeSelected= adhd5
        }
        if (noButton.id === "a4-1") {
          diagnosis="ADHD/ADD"
          console.log(diagnosis)
        }
        if (noButton.id === "a0-1") {
          removeSelected= sad1
        }
        if (noButton.id === "sad0-1") {
          removeSelected= sad2
        }
        if (noButton.id === "sad1-1") {
          removeSelected= sad3
        }        
        if (noButton.id === "sad2-1") {
          diagnosis="Social Anxiety Disorder"
          console.log(diagnosis)
        }
        if (noButton.id === "g4-1") {
          removeSelected=schizophrenia1;
        }
        if (noButton.id === "sch0-1") {
          diagnosis="No Match";
          console.log(diagnosis)
        }
        if (noButton.id === "sch1-1") {
          removeSelected=schizophrenia3;
        }
        if (noButton.id === "sch2-1") {
          removeSelected=schizophrenia4;
        }
        if (noButton.id === "sch3-1") {
          removeSelected=schizophrenia5;
        }
        if (noButton.id === "sch4-1") {
          diagnosis= "Schizophrenia";
          console.log(diagnosis)
        }
        if (noButton.id === "bad0-1") {
          removeSelected=bad2
        }
        if (noButton.id === "bad1-1") {
          removeSelected=bad3
        }
        if (noButton.id === "bad2-1") {
          removeSelected=bad4
        }
        if (noButton.id === "bad3-1") {
          removeSelected=bad5
        }
        if (noButton.id === "bad4-1") {
          removeSelected=bad7
        }
        if (noButton.id === "bad6-1") {
          diagnosis = "Bipolar Affective Disease"
          console.log(diagnosis)
        }
      if((diagnosis.length)>0){
        if(diagnosis==="No Match"){
          sentence.innerHTML= "Your symptoms did not align with any of the mental conditions/disorders on this quiz.";
          result.innerHTML= ""+diagnosis;
        }else{
        result.innerHTML= ""+diagnosis
        }
        questions.classList.add("hidden")
        results.classList.remove("hidden")
      }else{
      removeSelected.classList.remove("hidden")
      questions.append(removeSelected)      
      }
    }
  })
})



