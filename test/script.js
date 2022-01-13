// load functions. 
function initializeSelected () {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        selectStatus[i] = "unselected";
    }
}

function createTextBar () {
    var textBar = document.createElement("p");
    var text = document.createTextNode("1");
    textBar.setAttribute("id", "textbar");
    textBar.appendChild(text);
    var article = document.getElementsByTagName("article")[0];
    article.appendChild(textBar);
}

function addClickEvent () {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < 9; i++) {
        cells[i].onclick = function () {
            if (selectStatus[getCellId(this)] == "unselected") {
                changeColor(this);
                selectStatus[getCellId(this)] = "selected";
            }
        }
    }
}




// assistant functions.
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function getCellId (cell) {
    var origId = cell.getAttribute("id");
    var numId = origId.split("-")[1];
    return numId;
}
 
function updateText (str) {
    document.getElementById("textbar").lastChild.nodeValue = str;
}

// click to change color.
function changeColor (cell) {
    if (playerTurn == 0) {
        addClass(cell, "user1-selected");
        playerTurn = 1;
        updateText("2");
    }
    else if (playerTurn == 1) {
        addClass(cell, "user2-selected");
        playerTurn = 0;
        updateText("1");
    }
}


// global variables.
var playerTurn = 0;
var selectStatus = new Array(9);

window.onload = function() {
    initializeSelected();
    createTextBar();
    addClickEvent();
}