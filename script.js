
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

  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  
  let milliseconds = String(now.getUTCMilliseconds());
 
  while (milliseconds.length < 3) {
    milliseconds = '0' + milliseconds;
  }
  
  const timeString = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  
  timeElement.innerText = timeString;
}

setInterval(updateTime, 1);
