window.onload = () => {
  document.querySelector("#button").onclick = () => {
    const origTime = new Date(document.querySelector("#origin-time").value);
    const origTZ = document.querySelector("#origin-timezone").value;
    const targetTZ = document.querySelector("#target-timezone").value;
    const resDiv = document.querySelector("#res");
    
    let targetTime = convertTimezone(origTime, origTZ, targetTZ);

    resDiv.innerHTML = targetTime;
  }
}

/**
 * 
 * @param {Date} time 
 * @param {number} origOffset
 * @param {number} targetOffset
 * @return {String} converted time string
 */
function convertTimezone (time, origOffset, targetOffset) {
  origOffset = Number(origOffset);
  targetOffset = Number(targetOffset);
  
  const target = new Date(time);

  let newHour = target.getHours() - origOffset + targetOffset;
  target.setHours(newHour);
  return target.toLocaleString();
}