// Pages

const pages = document.querySelectorAll(".page");

function showPage(index){
pages.forEach(p=>p.classList.remove("active"));
pages[index].classList.add("active");
}

// Elements

const startBtn=document.getElementById("startBtn");
const heart=document.getElementById("heart");
const score=document.getElementById("score");
const gift=document.getElementById("gift");
const blowBtn=document.getElementById("blowBtn");
const flame=document.getElementById("flame");
const restart=document.getElementById("restart");
const letter=document.getElementById("letter");

// Start

startBtn.onclick=()=>showPage(1);

// Heart Game

let count=0;

heart.onclick=()=>{

count++;

score.innerHTML=`Caught : ${count} / 5`;

if(count<5){

moveHeart();

}else{

setTimeout(()=>{

showPage(2);

},500);

}

};

function moveHeart(){

const card=document.querySelector("#page2 .card");

const maxX=card.clientWidth-120;
const maxY=card.clientHeight-170;

const x=Math.random()*maxX+20;
const y=Math.random()*maxY+100;

heart.style.left=x+"px";
heart.style.top=y+"px";

heart.style.transform="scale(1.3)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},150);

}

// Gift

gift.onclick=()=>{

gift.innerHTML="💝";

gift.style.transform="scale(1.2) rotate(15deg)";

createConfetti();

setTimeout(()=>{

showPage(3);

},1000);

};

// Cake

blowBtn.onclick=()=>{

flame.style.display="none";

createConfetti();

setTimeout(()=>{

showPage(4);

typeLetter();

},1000);

};

// Letter

const text=`Happy Birthday My Love ❤️

Every moment with you is a beautiful memory.

Thank you for being in my life.

You make my world brighter every single day.

I promise to always make you smile.

I Love You Forever ❤️`;

let i=0;

function typeLetter(){

letter.innerHTML="";

i=0;

let typing=setInterval(()=>{

letter.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},40);

}

// Floating Hearts

setInterval(()=>{

const area=document.getElementById("hearts");

const h=document.createElement("div");

h.className="floating-heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(Math.random()*20+15)+"px";

h.style.animationDuration=(Math.random()*5+5)+"s";

area.appendChild(h);

setTimeout(()=>{

h.remove();

},9000);

},500);

// Confetti

function createConfetti(){

const area=document.getElementById("confetti");

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=`hsl(${Math.random()*360},90%,60%)`;

c.style.animationDuration=(Math.random()*2+2)+"s";

area.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

}

// Replay

restart.onclick=()=>{

location.reload();

};
