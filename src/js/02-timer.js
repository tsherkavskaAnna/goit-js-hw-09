// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


  const refs = {
      input: document.querySelector(`input`),
      btnStart: document.querySelector(`button[data-start]`),
      days: document.querySelector(`[data-days]`),
      hours: document.querySelector(`[data-hours]`),
      minutes: document.querySelector(`[data-minutes]`),
      seconds: document.querySelector(`[data-seconds]`), 
  };

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  const timer = new Date;
  console.log(timer);
  const date = Date.now();
  console.log(date)

  refs.btnStart.addEventListener(`click`, flatpickr);

