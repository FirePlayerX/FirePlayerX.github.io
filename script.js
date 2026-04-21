const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

const particles = [];
const particleCount = 42;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.8 + 0.8,
    speedY: Math.random() * 0.45 + 0.15,
    speedX: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.45 + 0.15
  };
}

function populateParticles() {
  particles.length = 0;
  for (let index = 0; index < particleCount; index += 1) {
    particles.push(createParticle());
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.y -= particle.speedY;
    particle.x += particle.speedX;

    if (particle.y < -20 || particle.x < -20 || particle.x > canvas.width + 20) {
      particle.x = Math.random() * canvas.width;
      particle.y = canvas.height + 20;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 250, 238, ${particle.alpha})`;
    ctx.shadowBlur = 14;
    ctx.shadowColor = "rgba(255, 244, 214, 0.4)";
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  populateParticles();
});

resizeCanvas();
populateParticles();
drawParticles();
