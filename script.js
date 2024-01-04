let startTime;
let running = false;
let interval;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 100);
        running = true;
        document.getElementById("lapTimes").innerHTML = "";
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    running = false;
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("lapTimes").innerHTML = "";
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedTime =
        pad(hours % 24) + ":" +
        pad(minutes % 60) + ":" +
        pad(seconds % 60);

    document.getElementById("display").innerText = formattedTime;
}

function lap() {
    if (running) {
        const lapTime = document.getElementById("display").innerText;
        const lapList = document.getElementById("lapTimes");

        const li = document.createElement("li");
        li.innerText = lapTime;

        lapList.appendChild(li);
    }
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}
