
  var start = document.querySelector("#start");
  var lap = document.querySelector("#lap");
  var reset = document.querySelector("#reset");
  var flag = 0;
  var timer;
  var minutes = 0;
  var seconds = 0;
  var milliseconds = 0;

  function updateDisplay() {
    document.getElementById("minute").innerText = formatTime(minutes);
    document.getElementById("second").innerText = formatTime(seconds);
    document.getElementById("milisecond").innerText = formatTime(milliseconds);
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  function clearLapTimes() {
    var lapList = document.getElementById("lapTimes");
    lapList.innerHTML = "";
  }
  
  start.addEventListener("click", function () {
    if (flag == 0) {
      start.innerHTML = "Stop";
      start.style.backgroundColor = "red";
      flag = 1;
      timer = setInterval(updateTime, 10);
    } else {
      start.innerHTML = "Start";
      start.style.backgroundColor = "green";
      flag = 0;
      clearInterval(timer);
    }
  });

  lap.addEventListener("click", function () {
    var lapTime = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
    var lapList = document.getElementById("lapTimes");
    var lapItem = document.createElement("div");
    lapItem.innerText = "Lap " + (lapList.childElementCount + 1) + ": " + lapTime;
    lapList.appendChild(lapItem);
  });

  reset.addEventListener("click", function () {
    clearInterval(timer);
    start.innerHTML = "Start";
    start.style.backgroundColor = "green";
    flag = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    clearLapTimes();
  });

  function updateTime() {
    milliseconds++;
    if (milliseconds == 100) {
      milliseconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
    }
    updateDisplay();
  }




