const button = document.querySelector(".btn");
button.addEventListener("click", result);

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", btnRemove);

function result(e) {
e.preventDefault();
let point=0;

if(document.querySelector('#answer1').checked){	
point++;
}
if(document.querySelector('#answer2').checked){	
point++;
}
if(document.querySelector('#answer3').checked) {	
point++;
}
if(document.querySelector('#answer4').checked) {	
point++;
}
if(document.querySelector('#answer5').checked) {	
point++;
}
if(document.querySelector('#answer6').checked) {	
point++;
}
if(document.querySelector('#answer7').checked) {	
point++;
}
if(document.querySelector('#answer8').checked) {	
point++;
}
if(document.querySelector('#answer9').checked) {	
point++;
}
if(document.querySelector('#answer10').checked) {	
point++;
}

document.querySelector("#show").textContent = "Your result: " + point +" "+ "from 10";

const correctAnswer = document.querySelectorAll(".answer");
correctAnswer.forEach((item) => {
    item.classList.add("correctAnswer");
});

const story = document.querySelectorAll("h3");
story.forEach((item) => {
    item.style.display="block";
});
}

function btnRemove() {
    document.location.reload();
}