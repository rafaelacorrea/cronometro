class Cronometro {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.interval = null;
        this.isRunning = false;
        
        this.display = document.getElementById('display');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
    }
    
    start() {
        if (!this.isRunning) {
            this.interval = setInterval(() => this.tick(), 1000);
            this.isRunning = true;
            this.startBtn.textContent = 'Rodando...';
            this.startBtn.disabled = true;
        }
    }
    
    pause() {
        if (this.isRunning) {
            clearInterval(this.interval);
            this.isRunning = false;
            this.startBtn.textContent = 'Continuar';
            this.startBtn.disabled = false;
        }
    }
    
    reset() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.updateDisplay();
        this.startBtn.textContent = 'Iniciar';
        this.startBtn.disabled = false;
    }
    
    tick() {
        this.seconds++;
        
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
        
        this.updateDisplay();
    }
    
    updateDisplay() {
        const formattedHours = this.hours.toString().padStart(2, '0');
        const formattedMinutes = this.minutes.toString().padStart(2, '0');
        const formattedSeconds = this.seconds.toString().padStart(2, '0');
        
        this.display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}

// Inicializar o cronômetro quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Cronometro();
});
