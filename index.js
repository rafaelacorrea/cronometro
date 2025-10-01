let seconds = 0;
let interval = null;
const timerEl = document.querySelector('h1');
const timerContainer = document.getElementById('timer');

document.getElementById('start').addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    timerContainer.className = 'timer-container running';
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  timerContainer.className = 'timer-container paused';
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
  timerContainer.className = 'timer-container stopped';
});

function updateDisplay() {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  timerEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}
