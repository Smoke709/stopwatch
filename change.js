const hourSpan = document.querySelector(".hours");
const minuteSpan = document.querySelector(".minutes");
const secondSpan = document.querySelector(".seconds");
const startBtn = document.getElementById("startbtn");
const resetBtn = document.getElementById("resetbtn");
const stopBtn = document.getElementById("stopbtn");


let hours = 0, minutes = 0, seconds = 0;
var timer = false;

function start(){
    timer = true;
    stopwatch();
    startBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    stopBtn.style.display = "inline-block";
    
}

function stop(){
    timer = false;
    startBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    startBtn.style.width = "200px";
}


function reset(){
    timer =  false;
    startBtn.style.display = "inline-block";
    startBtn.style.width = "400px";
    resetBtn.style.display = "none";
    stopBtn.style.display = "none";

    hourSpan.innerHTML = "00 :";
    minuteSpan.innerHTML = "00 :";
    secondSpan.innerHTML = "00";

    hours = 0;
    minutes = 0;
    seconds = 0;

}

function stopwatch(){
    if(timer == true){
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }

        if( minutes == 60){
            minutes = 0;
            hours++;
        }

        if (hours<=9)hourSpan.innerHTML = "0" + hours + " : ";
        else hourSpan.innerHTML = hours + " : ";
        if (minutes<=9)minuteSpan.innerHTML = "0" + minutes + " : ";
        else minuteSpan.innerHTML = minutes + " : ";
        if (seconds<=9)secondSpan.innerHTML = "0" + seconds;
        else secondSpan.innerHTML = seconds;
        
       
        
        
        setTimeout("stopwatch()",1000);
    }
   
}

