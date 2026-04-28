// Dark mode
const toggle = document.getElementById("themeToggle");
if(toggle){
  toggle.onclick = () => document.body.classList.toggle("dark");
}

// Typing effect
const text = "Future AI/ML Engineer | Building Smart Systems";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Particle background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: 2
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="cyan";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
