window.onload = () => {
  const buttons = document.querySelectorAll("button");
  const display = document.querySelector("div");

  buttons.forEach((btn) => {
    btn.onclick = (event) => {
      
      // Gets html snippet path. 
      let name = event.target.id;
      let htmlPath = `../notes/${name}.html`;

      // Fetches markup. 
      fetch(htmlPath).then((response) => {
        response.text().then((html) => {
          display.innerHTML = html;
        })
      }).catch((error) => {
        display.innerHTML = error;
      })
    }
  });
}