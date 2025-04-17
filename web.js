let [seconds,minutes,hours]=[0,0,0]
let displayTime=document.getElementById('display-time');
let timer=null

function stopwatch() {
    seconds++
    if(seconds==60){
        minutes++;
        seconds=0;

        if(minutes==60){
            hours++;
            minutes=0;
        }
    }

    let h=hours<10?'0'+hours:hours
    let m=minutes<10?'0'+minutes:minutes
    let s=seconds<10?'0'+seconds:seconds

    displayTime.innerHTML=h+":"+m+":"+s

}

function startwatch() {
    if(timer!=null){
        clearInterval(timer);
    }

    timer=setInterval(stopwatch,1000);
}

function watchStop() {
    clearInterval(timer)
}

function watchReset() {
    clearInterval(timer)
    // [seconds,minutes,hours]=[0,0,0];
    seconds=0, minutes=0, hours=0
    displayTime.innerHTML="00:00:00";
}