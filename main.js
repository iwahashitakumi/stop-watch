let startButton;    
let stopButton;     
let resetButton;    
let showTime;       

let timer;             
let startTime;          
let elapsedTime = 0;    
let holdTime = 0;      

window.onload = function () {
    startButton = document.getElementById("starts");
    stopButton = document.getElementById("stops");
    resetButton = document.getElementById("resets");
    showTime = document.getElementById("times");
}


function start(){
    
    startTime = Date.now();

    
    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}


function stop(){
   
    clearInterval(timer);

    
    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}


function reset(){
    
    clearInterval(timer);

    
    elapsedTime = 0;    
    holdTime = 0;
    showTime.textContent = "00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}


function measureTime() {
    
    timer = setTimeout(function () {
        
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 19);
        
       
        measureTime();
    }, 10);
}


console.log(reset);
console.log(reseetbutton);