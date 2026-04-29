const card = document.getElementById('tilt-card');

document.addEventListener('mousemove', (e) => {
    if(!card) return;

    // 3D Tilt Logic
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // Interactive Glow Logic
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
});

// Auto-Typing Effect
const text = "INITIALIZING AI_ML_MODULE.EXE // STATUS: ACTIVE";
let i = 0;
function type() {
    const el = document.querySelector(".typing-text");
    if (el && i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
window.onload = type;
