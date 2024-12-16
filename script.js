let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let hours_span = document.getElementById('hours')
let minutes_span = document.getElementById('minutes')
let seconds_span = document.getElementById('seconds')
let tens_span = document.getElementById('tens')

let hours=0;
let minutes=0;
let seconds=0;
let tens=0;
let interval;


startBtn.addEventListener('click',()=>{interval = setInterval(myStopWatch,10);
startBtn.disabled= true;
})

stopBtn.addEventListener('click',()=>{clearInterval(interval);
    startBtn.disabled=false;
})

resetBtn.addEventListener('click',()=>{clearInterval(interval);
    startBtn.disabled=false;
    hours=0;
    minutes=0;
    seconds=0;
    tens=0;
    hours_span.innerHTML='00';
    minutes_span.innerHTML='00';
    tens_span.innerHTML='00';
    seconds_span.innerHTML='00';
})

function myStopWatch() {
    tens++
    if (tens<=9){
        tens_span.innerHTML='0'+tens;
    }
    if (tens>9){
        tens_span.innerHTML=tens;
    }
    if (tens>99){
        tens_span.innerHTML="00"
        tens=0;
        seconds+=1;

    }
    if (seconds<=9){
        seconds_span.innerHTML='0'+seconds;
    }
    if (seconds>9){
        seconds_span.innerHTML=seconds;
    }
    if (seconds>59){
        minutes+=1;
        seconds=0;
    }
    if (minutes<=9){
        minutes_span.innerHTML='0'+minutes;
    }
    if (minutes>9){
        minutes_span.innerHTML=minutes;
    }
    if (minutes>59){
        hours+=1;
        minutes=0;
    }
    if (hours<=9){
        hours_span.innerHTML='0'+hours;
    }
    if (hours>9){
        hours_span.innerHTML=hours;
    }
}
