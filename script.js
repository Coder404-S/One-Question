const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

// NO button ஓடும்
function moveButton(){

let x = Math.random() * (window.innerWidth - 150);
let y = Math.random() * (window.innerHeight - 100);

no.style.left = x + "px";
no.style.top = y + "px";

}

no.addEventListener("mouseover", moveButton);
no.addEventListener("click", moveButton);

// YES button
yes.onclick = () => {

message.innerHTML =
"💖 I Love You Too 😘❤️<br>🌹 Happy Valentine's Day 🌹";

createHearts();

}

// Heart Rain
function createHearts(){

let emojis=["❤️","💖","💕","💘","💝","💞","🌹","🥰","😘","😍","✨"];

for(let i=0;i<250;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(2+Math.random()*4)+"s";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

}

// Background Heart Rain

setInterval(()=>{

let emojis=["❤️","💕","💖","💘","🌸","✨"];

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(3+Math.random()*5)+"s";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},200);
