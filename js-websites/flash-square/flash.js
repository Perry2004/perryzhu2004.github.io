let color1Input = document.querySelector('#color-input-1');
let color2Input = document.querySelector('#color-input-2');
let durationInput = document.querySelector('#duration-time');
let btn = document.querySelector("button");
let block = document.querySelector("div");

btn.onclick = function() {
  let color1 = color1Input.value;
  let color2 = color2Input.value;
  let duration = durationInput.value;

  block.innerHTML = "";

  window.document.styleSheets[0].insertRule(
    `@keyframes flash {
      0% {
        background: ${color1};
      }
      100% {
        background: ${color2};
      }
    }`
  )
  
  block.style.animation = `flash ${duration}s ease-in-out infinite alternate`;
}