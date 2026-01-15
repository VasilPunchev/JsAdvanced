function timeToWalk(steps, lengthOfFootPrint, speedkmh) {
    let distance = steps * lengthOfFootPrint;
    let speedMs = speedkmh * 1000 / 3600;
    let walkTime = distance / speedMs;
    let breaks = Math.floor(distance / 500);
    let restTime = breaks * 60;
    let totalTime = walkTime + restTime;

    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = Math.round(totalTime % 60);

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
console.log(
  `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
);

}

timeToWalk(4000, 0.60, 5);
