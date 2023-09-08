// Retrieve elements from the HTML
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const currentDayOfWeek = daysOfWeek[currentDayIndex];

// Display the current day of the week
currentDayElement.textContent = currentDayOfWeek;
    
// Get the current UTC time in milliseconds
const currentUTCTime = Date.now();

// Display the current UTC time
currentUTCTimeElement.textContent = currentUTCTime;
