function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const btnStart = document.querySelector(`[data-start]`);
  console.log(btnStart);
  const btnStop = document.querySelector(`[data-stop]`);
  console.log(btnStop);
  const bodyColor = document.querySelector(`body`);
  let timerId = null;

  btnStart.addEventListener(`click`, () => {
      timerId = setInterval(() => {
          bodyColor.style.backgroundColor = getRandomHexColor()
      }, 1000);
      btnStart.disabled = true;
  });

  btnStop.addEventListener(`click`, () => {
      clearInterval(timerId);
      btnStart.disabled = false;
  })