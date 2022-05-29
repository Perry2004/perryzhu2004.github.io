const input = document.querySelector('input');
const start = document.querySelector('#choose-button');
const stop = document.querySelector('#stop-button');
const resust = document.querySelector('#result');
let interval = null;
let executed = false;

start.onclick = function () {
  if (!executed) {
    let options = input.value.split(',').length > 1 ? input.value.split(', ') : input.value.split('， ');
    for (let i = 0; i < options.length; i++) {
      let btn = document.createElement('button');
      let text = document.createTextNode(`${options[i]}`);
      btn.appendChild(text);
      resust.appendChild(btn);
    }

    const buttons = document.querySelectorAll('#result button');

    interval = setInterval(() => {
      for (let i = 0; i < options.length; i++) {
        buttons[i].classList.remove('selected');
      }
      let random = Math.floor(Math.random() * buttons.length);
      buttons[random].classList.add('selected');
    }, 100);
    executed = true;
  }
  else {
    alert('Already executed. ')
  }
}

stop.onclick = function () {
  clearInterval(interval);
}