const timer = document.getElementById('stopwatch');
const startStop = document.getElementById('start-stopwatch');
const restartStop = document.getElementById('restart-stopwatch');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        startStop.innerHTML = "Pause";
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    startStop.innerHTML = "Start";
  }
}

function timerCycle() {
    if (stoptime == false) {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    milliseconds = parseInt(milliseconds);

    milliseconds = milliseconds + 1;

    if(milliseconds == 100){
      seconds = seconds + 1;
      milliseconds = 0;
    }

    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      minutes = 0;
      seconds = 0;
    }

    if(milliseconds < 10){
      milliseconds = '0' + milliseconds;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    timer.innerHTML = `<h1> ${minutes}:${seconds}</h1><h2>:${milliseconds}</h2>`;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = `<h1>00:00</h1><h2>:00</h2>`;
    stoptime = true;
    startStop.innerHTML = "Start";
    seconds = 0;
    minutes = 0;
}

startStop.addEventListener('click', ()=>{
    if(stoptime == true)
        startTimer();
    else
        stopTimer();
});

restartStop.addEventListener('click', resetTimer);


