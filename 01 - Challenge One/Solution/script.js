const timer = document.getElementById('stopwatch');
const startStop = document.getElementById('start-stopwatch');
const restartStop = document.getElementById('restart-stopwatch');

let min = 0;
let sec = 0;
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
    sec = parseInt(sec);
    min = parseInt(min);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = `<h1> ${min}:${sec}</h1>`;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = `<h1>00:00</h1>`;
    stoptime = true;
    startStop.innerHTML = "Start";
    sec = 0;
    min = 0;
}

startStop.addEventListener('click', ()=>{
    if(stoptime == true)
        startTimer();
    else
        stopTimer();
});

restartStop.addEventListener('click', resetTimer);