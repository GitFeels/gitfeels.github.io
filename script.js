
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];


currentDayElement.textContent = currentDayOfWeek;
    

const currentUTCTime = Date.now();


currentUTCTimeElement.textContent = currentUTCTime;

function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('currentUTCTime');
  timeElement.innerText = 'Current UTC Time: ' + now.toUTCString();
}

setInterval(updateTime, 1000);
