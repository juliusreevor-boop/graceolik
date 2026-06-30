// ==========================
// HAPPY BIRTHDAY WEBSITE
// Grace Wonder Olik
// JOOUST President's Award Kenya
// ==========================

// Birthday Date
const birthday = new Date("July 2, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const birthdayContent = document.getElementById("birthdayContent");
const balloonsContainer = document.getElementById("balloons");

// ==========================
// COUNTDOWN
// ==========================

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = birthday - now;

if(distance <= 0){

clearInterval(timer);

document.querySelector(".countdown-section").style.display = "none";

birthdayContent.classList.remove("hidden");

launchBalloons();

launchConfetti();

launchHearts();

return;

}

const d = Math.floor(distance/(1000*60*60*24));
const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const m = Math.floor((distance%(1000*60*60))/60000);
const s = Math.floor((distance%(60000))/1000);

days.innerHTML = d;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

},1000);

// ==========================
// BALLOONS
// ==========================

function launchBalloons(){

const colors = [
"#1E90FF",
"#00BFFF",
"#87CEFA",
"#4169E1",
"#00FFFF",
"#87CEEB",
"#FFFFFF"
];

for(let i=0;i<120;i++){

const balloon = document.createElement("div");

balloon.className = "balloon";

balloon.style.left = Math.random()*100 + "vw";

balloon.style.background = colors[Math.floor(Math.random()*colors.length)];

balloon.style.animationDuration = (5 + Math.random()*5) + "s";

balloon.style.opacity = 0.9;

balloonsContainer.appendChild(balloon);

}

}

// ==========================
// FLOATING HEARTS
// ==========================

function launchHearts(){

setInterval(()=>{

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💙";

heart.style.left = Math.random()*100 + "vw";

heart.style.bottom = "-20px";

heart.style.animationDuration = (4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},250);

}

// ==========================
// CONFETTI
// ==========================

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});

let confetti = [];

function launchConfetti(){

for(let i=0;i<500;i++){

confetti.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height-canvas.height,

r:Math.random()*6+3,

dx:(Math.random()-0.5)*8,

dy:Math.random()*5+2,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.beginPath();

ctx.fillStyle = c.color;

ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

ctx.fill();

c.x += c.dx;

c.y += c.dy;

if(c.y > canvas.height){

c.y = -20;

}

});

requestAnimationFrame(animateConfetti);

}

// ==========================
// BACKGROUND PARTICLES
// ==========================

const particles = document.getElementById("particles");

for(let i=0;i<60;i++){

const star = document.createElement("div");

star.style.position = "absolute";

star.style.width = "4px";

star.style.height = "4px";

star.style.borderRadius = "50%";

star.style.background = "white";

star.style.left = Math.random()*100+"%";

star.style.top = Math.random()*100+"%";

star.style.opacity = Math.random();

star.style.animation = "twinkle "+(2+Math.random()*5)+"s infinite";

particles.appendChild(star);

}

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%{opacity:.2;transform:scale(.8);}

50%{opacity:1;transform:scale(1.8);}

100%{opacity:.2;transform:scale(.8);}

}

`;

document.head.appendChild(style);

// ==========================
// OPTIONAL BIRTHDAY MUSIC
// ==========================

// Rename your music file to:
// birthday.mp3

const audio = new Audio("birthday.mp3");

audio.loop = true;

document.body.addEventListener("click",()=>{

audio.play().catch(()=>{});

},{once:true});

// ==========================
// PHOTO ENLARGE
// ==========================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay = document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="9999";

const image = document.createElement("img");

image.src = img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";
image.style.boxShadow="0 0 30px cyan";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

// ==========================
// END
// ==========================
