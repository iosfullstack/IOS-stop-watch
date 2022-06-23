var hours = "00";
var minutes = "00";
var seconds = "00";
var time_hours = document.getElementById("hours");
var time_minutes = document.getElementById("minutes");
var time_seconds = document.getElementById("seconds");
button_start = document.getElementById("start");
button_pause = document.getElementById("pause");
button_reset = document.getElementById("reset");
var interval;

button_start.addEventListener("click", function () {
    interval = setInterval(function () {
        seconds++;
        if (seconds / 60 === 1) {
            seconds = "00";
            minutes++;
        }
        if (minutes / 60 === 1) {
            minutes = "00";
            hours++;
        }
        time_hours.innerHTML = hours;
        time_minutes.innerHTML = minutes;
        time_seconds.innerHTML = seconds;
    }, 10);
});



button_pause.addEventListener("click", function () {
    clearInterval(interval);
});

button_reset.addEventListener("click", function () {
    clearInterval(interval);
    hours = "00";
    minutes = "00";
    seconds = "00";
    time_hours.innerHTML = hours;
    time_minutes.innerHTML = minutes;
    time_seconds.innerHTML = seconds;
});



function hide(id) {
    // document.getElementById("start").style.display = "none";
    document.getElementById(id).style.display = "none";
    // document.getElementById("reset").style.display = "none";
}

function show(id) {
    document.getElementById("id").style.display = "block";
    // document.getElementById("pause").style.display = "block";
    // document.getElementById("reset").style.display = "block";

}