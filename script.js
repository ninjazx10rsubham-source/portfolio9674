// 3D Tilt Effect
const card = document.querySelector('.profile-card-3d');
if(card) {
    document.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

// Typing Effect
const text = "Future AI/ML Engineer_";
let index = 0;
function type() {
    const el = document.querySelector(".typing-text");
    if (el && index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
window.onload = type;
