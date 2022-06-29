window.onload = () => {
  function readCSV (path) {
    fetch(path).then(response => response.text()).then(data => {
      let parsedData = parseCSV(data);
      console.log(parsedData);
      let nos = [];
      let pms = [];
      parsedData.map((item) => {
        nos.push(item.No);
        pms.push(item["pm2.5"]);
      });

      plot(nos, pms);
    });
  }

  function parseCSV (csv) {
    const headers = csv.slice(0, csv.indexOf("\n")).split(",");
    const rows = csv.slice(csv.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
      const values = row.split(",");
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    arr.pop(arr.length - 1)

    return arr;
  }

  function plot (xSet, ySet) {
    let graphDiv = document.querySelector("#graph-div");
    let data = [{
      type: "bar",
      x: xSet,
      y: ySet
    }];
    let layout = {
      title: "Beijing PM2.5",
      xaxis: {
        title: "No.",
      },
      yaxis: {
        title: "PM2.5 values"
      }
    };

    Plotly.newPlot(graphDiv, data, layout);
  }

  readCSV("./Beijing_PM2.5.csv");
  
}