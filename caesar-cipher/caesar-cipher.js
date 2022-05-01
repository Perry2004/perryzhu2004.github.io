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

window.onload = function () {
    let encodeButton = document.getElementById("encode-button");
    let decodeButton = document.getElementById("decode-button");

    encodeButton.onclick = function () {
        let string = document.getElementsByTagName("input")[0].value;
        let res = caesarCipherEncrypt(string, 2);
        let display = document.getElementById("result-area");
        display.innerHTML = "Res: " + res;
    }

    decodeButton.onclick = function () {
        let string = document.getElementsByTagName("input")[0].value;
        let res = caesarCipherDecrypt(string, 2);
        let display = document.getElementById("result-area");
        display.innerHTML = "Res: " + res;
    }

}
