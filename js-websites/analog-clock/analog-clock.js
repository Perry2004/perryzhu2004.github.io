window.onload = function () {
  let hourHand = document.querySelector('#hour-hand');
  let minuteHand = document.querySelector('#minute-hand');
  let secondHand = document.querySelector('#second-hand');

  setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = (hours * 30) + (minutes / 2) - 90;
    let minuteRotation = (minutes * 6) - 90;
    let secondRotation = (seconds * 6) - 90;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  },1000);
}