window.onload = () => {
  const p = document.querySelector("p");
  const btn1 = document.querySelector("#btn-1");
  const btn2 = document.querySelector("#btn-2");

  btn1.onclick = () => {
    fetch("./txt-1.txt").then((text) => {
      text.text().then((txt) => {
        p.innerHTML = txt;
      })
    }).catch((error) => {
      p.innerHTML = error;
    })
  }

  btn2.onclick = () => {
    fetch("./txt-2.txt").then((text) => {
      text.text().then((txt) => {
        p.innerHTML = txt;
      })
    }).catch((error) => {
      p.innerHTML = error;
    })
  }
}