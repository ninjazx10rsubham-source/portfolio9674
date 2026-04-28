// 3D Parallax Effect
const card = document.getElementById('profile-card');
if(card) {
    document.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

// Typing Effect
const text = "Future AI/ML Engineer_";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
