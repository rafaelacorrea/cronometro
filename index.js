let seconds = 0;
let interval = null;
const timerEl = document.querySelector('h1');
const timerContainer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    timerContainer.className = 'timer-container running';
    updateButtonStates();
  }
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  timerContainer.className = 'timer-container paused';
  updateButtonStates();
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
  timerContainer.className = 'timer-container stopped';
  updateButtonStates();
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

function updateButtonStates() {
  const isRunning = interval !== null;
  const isAtZero = seconds === 0;
  
  // Start button: disabled when running
  startBtn.disabled = isRunning;
  
  // Pause button: disabled when stopped or paused (not running)
  pauseBtn.disabled = !isRunning;
  
  // Reset button: disabled when timer is at zero
  resetBtn.disabled = isAtZero;
}

// Initialize button states on page load
updateButtonStates();
