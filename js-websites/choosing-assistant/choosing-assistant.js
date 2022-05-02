function choosingAssistant (str) {
    let arr = str.split(', ');
    let res = arr[generateRandomInt(0, arr.length - 1)];
    return res;
}

function generateRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

window.onload = function () {
    document.getElementsByTagName("button")[0].onclick = function () {
        let inputValue = document.getElementsByTagName("input")[0].value;
        let outputDiv = document.getElementsByTagName("div")[0];
        outputDiv.innerHTML = choosingAssistant(inputValue);
    }
}