// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";



  const refs = {
      inputTime: document.querySelector(`input`),
      btnStart: document.querySelector(`button[data-start]`),
      days: document.querySelector(`[data-days]`),
      hours: document.querySelector(`[data-hours]`),
      minutes: document.querySelector(`[data-minutes]`),
      seconds: document.querySelector(`[data-seconds]`), 
  };

refs.btnStart.disabled = true;

let selectedDate = null;
let timerId = null;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0].getTime();
      if(selectedDate < new Date()) {
        Notiflix.Notify.failure(`Please choose a date in the future`);
        return;
      }
      refs.btnStart.disabled = false;
    },
  };

flatpickr(`#datetime-picker`, options);

refs.btnStart.addEventListener(`click`, startTimer);

function startTimer() {
  setInterval(() => {
    const deltaDate = selectedDate - Date.now();
    if(deltaDate <= 0) {
      return;
    }
 const {days, hours, minutes, seconds} = convertMs(deltaDate);

   refs.days.textContent = days;
   refs.hours.textContent = hours;
   refs.minutes.textContent = minutes;
   refs.seconds.textContent = seconds;

  }, 1000)
 }
  
 function addLeadingZero(value) {
   return String(value).padStart(2, `0`);
 }

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

