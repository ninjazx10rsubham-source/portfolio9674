const card = document.getElementById('tilt-card');

document.addEventListener('mousemove', (e) => {
    if(!card) return;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const text = "System.Initialize: AI/ML_SubhamDey... Success.";
let i = 0;
function type() {
    const el = document.querySelector(".typing-text");
    if (el && i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
window.onload = type;
