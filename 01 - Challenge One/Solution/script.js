const timer = document.getElementById('stopwatch');
const start = document.getElementById('start-stopwatch');
const restart = document.getElementById('restart-stopwatch');

let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        start.innerHTML = "Pause";
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    start.innerHTML = "Start";
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
    start.innerHTML = "Start";
    sec = 0;
    min = 0;
}

start.addEventListener('click', ()=>{
    if(stoptime == true)
        startTimer();
    else
        stopTimer();
});

restart.addEventListener('click', resetTimer);