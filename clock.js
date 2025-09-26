<!DOCTYPE html>
<html>
<head>
  <title>Digital Clock</title>
  <style>
    #clock {
      font-size: 2em;
      font-weight: bold;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div id="clock"></div>

  <script>
    function updateClock() {
      let now = new Date(); // get current time
      let hours = String(now.getHours()).padStart(2, '0');
      let minutes = String(now.getMinutes()).padStart(2, '0');
      let seconds = String(now.getSeconds()).padStart(2, '0');
      
      // Format time as HH:MM:SS
      let timeString = `${hours}:${minutes}:${seconds}`;
      
      // Update the div
      document.getElementById("clock").textContent = timeString;
    }

    // Update clock immediately, then every second
    updateClock();
    setInterval(updateClock, 1000);
  </script>
</body>
</html>
