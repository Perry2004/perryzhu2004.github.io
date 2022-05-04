let playerTurn = 1;

/**
 * Toggles the player turn between 1 and 2. 
 */
function togglePlayer () {
    if (playerTurn === 1) {
        playerTurn = 2;
    }
    else {
        playerTurn = 1;
    }
}


/**
 * 
 * @param {String} message the message to be displayed on the bottom. 
 */
function displayMessage (message) {
    let displayDiv = document.getElementById("display");
    displayDiv.innerHTML = "<strong><em>" + message + "</em><strong>";
}


/**
 * Tests whether all the cells are selected. 
 * @param {cells[]} cells 
 * @returns whether all the cells has been selected. 
 */
function deterAllFilled (cells) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].className.indexOf("unclicked") !== -1) {
            return false;
        }
    }
    return true;
}


/**
 * Tests whether one has selected all three cells on one line. 
 * @param {cells[]} cells 
 * @returns whether one user has selected all three cells on one line. 
 */
function deterHori (cells) {
    let index1 = 0;
    let index2 = 1;
    let index3 = 2;

    for (let i = 0; i < 3; i++, index1 += 3, index2 += 3, index3 += 3) {

        // avoids comparing unselected cells. 
        if ((cells[index1].className.indexOf("unclicked") < 0)
        && (cells[index2].className.indexOf("unclicked") < 0)
        && (cells[index3].className.indexOf("unclicked") < 0)) {
            if ((cells[index1].className === cells[index2].className) 
            && (cells[index2].className === cells[index3].className)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Tests whether one has selected all three cells on one column. 
 * @param {cells[]} cells 
 * @returns whether one user has selected all three cells on one column. 
 */
function deterVert (cells) {
    let index1 = 0;
    let index2 = 3;
    let index3 = 6;

    for (let i = 0; i < 3; i++, index1 += 1, index2 += 1, index3 += 1) {

        // avoids comparing unselected cells. 
        if ((cells[index1].className.indexOf("unclicked") < 0)
        && (cells[index2].className.indexOf("unclicked") < 0)
        && (cells[index3].className.indexOf("unclicked") < 0)) {
            if ((cells[index1].className === cells[index2].className) 
            && (cells[index2].className === cells[index3].className)) {
                return true;
            }
        }
    }
    return false;
}


/**
 * Tests whether one has selected all three cells on one diagonal line. 
 * @param {cells[]} cells 
 * @returns whether one user has selected all three cells on one diagonal line. 
 */
function deterDiag (cells) {
    let index1 = 0;
    let index2 = 4;
    let index3 = 8;

    for (let i = 0; i < 2; i++, index1 += 2, index3 -= 2) {
        if ((cells[index1].className.indexOf("unclicked") < 0)
        && (cells[index2].className.indexOf("unclicked") < 0)
        && (cells[index3].className.indexOf("unclicked") < 0)) {
            if ((cells[index1].className === cells[index2].className) 
            && (cells[index2].className === cells[index3].className)) {
                return true;
            }
        }
    }
    return false;
}


/**
 * Updates the onclick event after the game is finished to display promp message. 
 * @param {cells} cells 
 */
function clearOnclickEvents (cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = () => {
            let displayDiv = document.getElementById("extra");
            displayDiv.innerHTML = "The game is finished. Refresh to have another one.";
        }
    }
}


window.onload = () => {
    
    // initialization 
    let cells = document.getElementsByClassName('cells');
    window.cells = cells;
    displayMessage("Player " + playerTurn + "'s turn ");

    // binds events to each cells 
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = () => {
            let classNames = cells[i].className;
            
            // if the cell has been clicked, do nothing. 
            if (classNames.indexOf("unclicked") === -1) {
                return;
            }

            // switches player turn.
            if (playerTurn === 1) {
                cells[i].className = cells[i].className.replace("unclicked", "user1-clicked")
            }
            else if (playerTurn === 2) {
                cells[i].className = cells[i].className.replace("unclicked", "user2-clicked")
            }

            // checkes whether the game is finished with no winner.
            if (deterAllFilled(cells)) {
                displayMessage("All filled, no winner. ")
                clearOnclickEvents(cells);
                return;
            }

            // checkes whether the game is finished with winner. 
            else if ((deterDiag(cells)) || (deterVert(cells)) || (deterHori(cells))) {
                displayMessage("Player " + playerTurn + " wins the game. ")
                clearOnclickEvents(cells);
                return;
            }

            togglePlayer();
            displayMessage("Player " + playerTurn + "'s turn ");
        }
    }
}

