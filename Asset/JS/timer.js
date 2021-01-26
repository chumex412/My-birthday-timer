const timerContainer = document.querySelector(".timer-wrapper");
const days = document.querySelector("#day");
const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

startTimer();

function updateTimer() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth();
  let birthMonth = new Date(`${currentMonth + 6} 22 ${currentYear} 00:00:00`);
  
  let diff = birthMonth - date;

  let day = Math.round(diff / 1000/  60 / 60 / 24);
  let hour = Math.round(diff / 1000 / 60 / 60) % 24;
  let minute = Math.round(diff / 1000 / 60) % 60;
  let second = Math.round(diff / 1000) % 60;

  showTimer(day, hour, minute, second);

}

function showTimer(...timer) {
  
  for(let i = 0; i < timer.length; i++) {
    timer[i] = timer[i] < 10 ? "0" + timer[i] : timer[i];
  }
  const [d, h, m, s] = timer
  days.innerHTML = `${d} days`;
  hours.innerHTML = `${h} hours`;
  minutes.innerHTML = `${m} minutes`;
  seconds.innerHTML = `${s} seconds`;
  
}

function startTimer() {
  setInterval(updateTimer, 1000);
  updateTimer();
}
