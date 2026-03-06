function startExperience() {
  document.querySelector(".landing").classList.add("hidden");
  document.querySelector(".envelope-section").classList.remove("hidden");
  document.getElementById("bgMusic").play();
}

function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
  setTimeout(() => {
    document.querySelector(".envelope-section").classList.add("hidden");
    document.querySelector(".memories").classList.remove("hidden");
  }, 800);
}

function startQuiz() {
  document.querySelector(".memories").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
}

function checkAnswer(correct) {
  if (correct) {
    document.querySelector(".quiz").classList.add("hidden");
    document.querySelector(".final").classList.remove("hidden");
    startFireworks();
  } else {
    alert("Wrong answer 😜 Try again my love!");
  }
}

/* Simple Fireworks */
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width,
            Math.random()*canvas.height,
            Math.random()*5+2,
            0, Math.PI*2);
    ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,50%)";
    ctx.fill();
  }, 100);
}