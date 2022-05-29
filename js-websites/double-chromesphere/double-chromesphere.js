window.onload = () => {
  const blueInput = document.querySelector("#blue-input");
  const redInput = document.querySelector("#red-input");
  const submitButton = document.querySelector("button");

  const result = document.createElement("div");
  result.appendChild(document.createTextNode(""));

  submitButton.onclick = () => {

    // Gets blue value (1-16). 
    let blueValue = blueInput.value;

    // Gets red values (1-33 * 6). 
    let redValues = redInput.value.split(", ");

    // checkes validity of inputs. 
    let isValid = false;
    if ((blueValue <= 16) && (blueValue > 0)) {
      if (redValues.length === 6) {
        for (let i = 0; i < redValues.length; i++) {
          if ((redValues[i] <= 33) && (redValues[i] > 0)) {
            isValid = true;
          }
        }
      }
    }

    if (isValid) {
      // Generats random blue and red values. 
      let blueRandom = Math.floor(Math.random() * 16) + 1;
      let redRandoms = [];
      for (let i = 0; i < 6; i++) {
        redRandoms[i] = Math.floor(Math.random() * 33) + 1;
      }

      // Compares the chosen values and generated values. 
      let blueCorrectNum = 0;
      let redCorrectNum = 0;

      if (blueValue == blueRandom) {
        blueCorrectNum = 1;
      }

      for (let i = 0; i < 6; i++) {
        if (redValues[i] == redRandoms[i]) {
          redCorrectNum++;
        }
      }

      // determins which prize the player won. 
      let prize = -1;
      if (blueCorrectNum === 1 && redCorrectNum === 6) {
        prize = 1;
      } else if (blueCorrectNum === 0 && redCorrectNum === 6) {
        prize = 2;
      } else if (blueCorrectNum === 1 && redCorrectNum === 5) {
        prize = 3;
      } else if ((blueCorrectNum === 0 && redCorrectNum === 5) || (blueCorrectNum === 1 && redCorrectNum === 4)) {
        prize = 4;
      } else if ((blueCorrectNum === 0 && redCorrectNum === 4) || (blueCorrectNum === 1 && redCorrectNum === 3)) {
        prize = 5;
      } else if ((blueCorrectNum === 1 && redCorrectNum === 2) || (blueCorrectNum === 1 && redCorrectNum === 1)) {
        prize = 6;
      }

      // announces the prize. 
      let text = "";

      switch (prize) {
        case -1:
          text = "You did not win anything.";
          break;
        case 1:
          text = "You won the first prize";
          break;
        case 2:
          text = "You won the second prize";
          break;
        case 3:
          text = "You won the third prize";
          break;
        case 4:
          text = "You won the fourth prize";
          break;
        case 5:
          text = "You won the fifth prize";
          break;
        case 6:
          text = "You won the sixth prize";
          break;
        default:
          break;
      }

      result.firstChild.nodeValue = text;
      result.appendChild(document.createElement("br"));

      // shows the generated values. 
      let generatedValues = `Blue: ${blueRandom} Red: ${redRandoms.join(", ")}`;
      result.appendChild(document.createTextNode(generatedValues));
      
      submitButton.onclick = null;
    }

    else {
      result.firstChild.nodeValue = "Invalid input. Please try again.";
    }
    document.body.appendChild(result);
  }
}
