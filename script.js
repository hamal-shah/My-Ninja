// 💌 Typing
const text = "I have something special to ask you, Sana... 💖";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  } else {
    document.getElementById("startBtn").style.display = "inline-block";
  }
}
window.onload = typeEffect;

// 🎬 Start
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// ❤️ Hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// 🎉 YES
document.getElementById("yes").onclick = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.onload = () => {
    confetti({ particleCount: 200, spread: 100 });
    setTimeout(() => {
      document.body.innerHTML = "<h1 style='color:white;'>Yay Sana 💍❤️</h1>";
    }, 1500);
  };
  document.body.appendChild(script);
};

// 😆 NO runs
const noBtn = document.getElementById("no");
noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
};
