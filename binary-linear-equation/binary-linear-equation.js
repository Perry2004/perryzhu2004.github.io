function solve(a1, b1, c1, a2, b2, c2) {
    let d1 = a1 * b2 - a2 * b1;
    let dx = c1 * b2 - b1 * c2;
    let dy = a1 * c2 - a2 * c1;
    let x = dx / d1;
    let y = dy / d1;
    return [x, y];
}


window.onload = function () {
    document.getElementsByTagName("button")[0].onclick = function () {
        let a1 = document.getElementById("input-a1").value;
        let b1 = document.getElementById("input-b1").value;
        let c1 = document.getElementById("input-c1").value;
        let a2 = document.getElementById("input-a2").value;
        let b2 = document.getElementById("input-b2").value;
        let c2 = document.getElementById("input-c2").value;
        let result = solve(a1, b1, c1, a2, b2, c2);
        document.getElementById("res").innerHTML = "x: " + result[0] + " y: " + result[1];
    }
}