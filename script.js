let fillPercent = 0;
const fillRect = document.getElementById('fillRect');
const counter = document.getElementById('counter');
const message = document.getElementById('message');
const rain = document.getElementById('rain');

function fillHeart() {
  if (fillPercent < 100) {
    fillPercent += 10;
    if (fillPercent > 100) fillPercent = 100;
    updateFill();
  }

  if (fillPercent === 100) {
    showFullLove();
    makeItRain();
  }
}

function updateFill() {
  const y = 100 - fillPercent;
  const height = fillPercent;
  fillRect.setAttribute('y', y);
  fillRect.setAttribute('height', height);
  counter.textContent = `Любовь: ${fillPercent}%`;
}

function showFullLove() {
  if (!message.textContent) {
    message.textContent = '❤️ Любовь переполнена! ❤️';
  }
}

function makeItRain() {
  if (rain.dataset.raining === 'true') return;
  rain.dataset.raining = 'true';

  const count = 60;
  for (let i = 0; i < count; i++) {
    createFallingHeart();
  }

  const interval = setInterval(() => {
    createFallingHeart();
  }, 300);

  setTimeout(() => {
    clearInterval(interval);
    rain.dataset.raining = 'false';
  }, 8000);
}

function createFallingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 20 + Math.random() * 20 + 'px';
  heart.style.opacity = 0.3 + Math.random() * 0.4;
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  rain.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}
