const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");

// Initial NO button position
noBtn.style.left = "55%";
noBtn.style.top = "60%";

// YES button
yesBtn.addEventListener("click", () => {
    result.innerHTML = "🥰❤️ I Love You Too ❤️<br>🌹 Happy Valentine's Day 🌹";

    document.body.style.background =
    "linear-gradient(135deg,#ff006e,#ff4d9d)";
});

// Move NO button
function moveButton(){

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.floor(Math.random() * (maxX - padding)) + padding;
    const y = Math.floor(Math.random() * (maxY - padding)) + padding;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    moveButton();
});