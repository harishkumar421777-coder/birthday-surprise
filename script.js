// Pages
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((page) => page.classList.remove("active"));
  pages[index].classList.add("active");
}

// Buttons
const startBtn = document.getElementById("startBtn");
const heart = document.getElementById("heart");
const score = document.getElementById("score");
const gift = document.getElementById("gift");
const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const restart = document.getElementById("restart");
const letter = document.getElementById("letter");

// Start
startBtn.addEventListener("click", () => {
  showPage(1);
});

// ---------------- HEART GAME ----------------

let count = 0;

heart.addEventListener("click", () => {

  count++;

  score.innerHTML = `Caught : ${count} / 5`;

  if (count >= 5) {

    setTimeout(() => {

      showPage(2);

    },700);

  }

});

function moveHeart(){

const x=Math.random()*250+80;
const y=Math.random()*220+120;

heart.style.left=x+"px";
heart.style.top=y+"px";

}

heart.addEventListener("mouseenter",moveHeart);
heart.addEventListener("touchstart",moveHeart);

// ---------------- GIFT ----------------

gift.addEventListener("click",()=>{

gift.innerHTML="💝";

gift.style.transform="scale(1.3) rotate(15deg)";

setTimeout(()=>{

showPage(3);

},1200);

});

// ---------------- CAKE ----------------

blowBtn.addEventListener("click",()=>{

flame.style.display="none";

createConfetti();

setTimeout(()=>{

showPage(4);

typeLetter();

},1200);

});

// ---------------- TYPEWRITER ----------------

const text=`

Happy Birthday My Love ❤️

Every moment with you is my favourite memory.

Thank you for making my life beautiful.

I promise to stay beside you,
care for you,
annoy you,
love you,
and make you smile forever.

You are my safest place.

I Love You ❤️

`;

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

// ---------------- CONFETTI ----------------

function createConfetti(){

const area=document.getElementById("confetti");

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.background=`hsl(${Math.random()*360},90%,60%)`;

c.style.animationDuration=(Math.random()*2+2)+"s";

c.style.transform=`rotate(${Math.random()*360}deg)`;

area.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}

// ---------------- FLOATING HEARTS ----------------

function floatingHeart(){

const area=document.getElementById("hearts");

const h=document.createElement("div");

h.className="floating-heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=(Math.random()*6+6)+"s";

h.style.fontSize=(Math.random()*20+18)+"px";

area.appendChild(h);

setTimeout(()=>{

h.remove();

},12000);

}

setInterval(floatingHeart,500);

// ---------------- RESTART ----------------

restart.addEventListener("click",()=>{

location.reload();

});
