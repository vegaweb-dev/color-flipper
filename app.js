const colors = ["rgb(13,15,45)","rgb(130,145,40)","rgb(243,165,45)","rgb(13,145,245)"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

const randomNumber=getRandomColor();

document.body.style.backgroundColor=colors[randomNumber];
color.textContent=colors[randomNumber];




}
);

function getRandomColor(){


    return Math.floor(Math.random() * colors.length);
}

