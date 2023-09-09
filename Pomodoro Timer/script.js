const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');


let interval;

let timeLeft = 1500;

function update(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60 ;
    let formattedTime =` ${minutes} :  ${seconds}`;

    timer.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(() => {
        timeLeft--;
        update();
        if(timeLeft === 0){
            alert('Times Up');
            timeLeft = 1500;
        }
    }, 1000);
}
    

function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    update();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);