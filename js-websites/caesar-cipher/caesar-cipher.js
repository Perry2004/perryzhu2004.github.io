function caesarCipherEncrypt (orig, key) {
    let res = "";
    for (let i = 0; i < orig.length; i++) {
        let current = orig.substring(i, i+1);
        if (!(current === " ")) {
            if ((/[a-zA-Z]/).test(current)) {
                for (let j = 0; j < key; j++) {
                    if (current === "Z" || current === "z") {
                        if (current === "Z") {
                            current = "A";
                        }
                        else {
                            current = "a";
                        }
                    } 
                    else {
                        // changes current to ascii
                        current = current.charCodeAt(0);
                        current = String.fromCharCode(current + 1);
                    }
                }
            }
        }
        res += current;
    }
    // console.log(res);
    return res;
}


function caesarCipherDecrypt (orig, key) {
    let res = "";
    for (let i = 0; i < orig.length; i++) {
        let current = orig.substring(i, i+1);
        if (!(current === " ")) {
            if ((/[a-zA-Z]/).test(current)) {
                for (let j = 0; j < key; j++) {
                    if (current === "A" || current === "a") {
                        if (current === "A") {
                            current = "Z";
                        }
                        else {
                            current = "z";
                        }
                    } 
                    else {
                        // changes current to ascii
                        current = current.charCodeAt(0);
                        current = String.fromCharCode(current - 1);
                    }
                }
            }
        }
        res += current;
    }
    // console.log(res);
    return res;
}

function getKey () {
    let key = document.getElementsByTagName("input")[1].value;
    return Number(key);
}

window.onload = function () {
    let encodeButton = document.getElementById("encode-button");
    let decodeButton = document.getElementById("decode-button");
    let superButton = document.getElementById("super-decode-button");

    encodeButton.onclick = function () {
        let string = document.getElementsByTagName("input")[0].value;
        let res = caesarCipherEncrypt(string, getKey());
        let display = document.getElementById("result-area");
        display.innerHTML = "<strong>Res: </strong>" + res;
    }

    decodeButton.onclick = function () {
        let string = document.getElementsByTagName("input")[0].value;
        let res = caesarCipherDecrypt(string, getKey());
        let display = document.getElementById("result-area");
        display.innerHTML = "<strong>Res: </strong>" + res;
    }

    superButton.onclick = function () {
        let string = document.getElementsByTagName("input")[0].value;
        document.getElementById("result-area").innerHTML = " ";
        for (let i = 1; i < 26; i++) {
            let res = caesarCipherDecrypt(string, i);
            let display = document.getElementById("result-area");
            display.innerHTML += "<strong>Res" + i + ": </strong>" + res + "<br>";
        }
    }
}
