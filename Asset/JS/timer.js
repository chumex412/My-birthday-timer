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
  let birthMonth = new Date(`June 22 ${currentYear} 00:00:00`);
  
  let diff = birthMonth - date;

  let day = Math.floor(diff / 1000/  60 / 60 / 24);
  let hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  let minute = Math.floor(diff / 1000 / 60) % 60;
  let second = Math.floor(diff / 1000) % 60;

  showTimer(day, hour, minute, second);

}

function showTimer(...timer) {
  // Create array of time values
  let values = ['days', 'hours', 'minutes', 'seconds']; 
  // loop through to add timer to webpage
  for(let i = 0; i < timer.length; i++) {
    timerContainer.children[i].innerHTML = timer[i] < 10 ? `0${timer[i]} ${values[i]}` : `${timer[i]} ${values[i]}`;
  }
}

function startTimer() {
  setInterval(updateTimer, 1000);
  updateTimer();
}
