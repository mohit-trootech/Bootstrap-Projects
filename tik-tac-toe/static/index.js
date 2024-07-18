document.addEventListener("DOMContentLoaded", () => {
    playerOneElem = document.getElementById("player-one");
    playerTwoElem = document.getElementById("player-two");
    const playerOne = localStorage.playerone;
    const playerTwo = localStorage.playerTwo;
    let moves = 0;
    loadPlayers();
    const cells = document.querySelectorAll('.cell');
    let currentTurn = "X";
    let xCellSet = new Set();
    let oCellSet = new Set();
    let xCombination = [];
    let oCombination = [];
    let xTriples = [];
    let oTriples = [];
    const winningCombination = [
        ['1', '2', '3'],
        ["4", '5', "6"],
        ["7", "8", "9"],
        ['1', '4', '7'],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ['1', '5', '9'],
        ["3", "5", "7"]
    ];
    $(".reset-game").click(() => {
        window.location.reload()
    })
    document.addEventListener("click", (event) => {
        const elem = event.target;
        if (elem.classList.contains('cell')) {
            if (elem.innerHTML.split(/\s/).join('') == "") {
                elem.innerHTML = currentTurn;
                currentTurn = currentTurn == "X" ? "O" : "X";
                cells.forEach((cell) => {
                    if (cell.innerHTML == "X") {
                        xCellSet.add(cell.getAttribute('data-index'))
                    }
                    if (cell.innerHTML == "O") {
                        oCellSet.add(cell.getAttribute('data-index'))
                    }
                })
            } else {
                bootstrap.Toast.getOrCreateInstance($("#liveToast")).show()
            }
            if (moves > 3) {
                if (!checkWin()) {
                    checkDraw();
                }
            }
            moves += 1;
        }
    });
    function loadPlayers() {
        playerOneElem.innerHTML = playerOne;
        playerTwoElem.innerHTML = playerTwo;
    };
    function checkWin() {
        if (xWin()) {
            triggerModal(`Congratulations ${playerOne} Wins the Game`);
            saveResults("X Win");
        }
        if (oWin()) {
            triggerModal(`Congratulations ${playerTwo} Wins the Game`);
            saveResults("O Win");
        }
    }
    function checkDraw() {
        let result = true
        cells.forEach((cell) => {
            if (cell.innerHTML == "") {
                result = false
            }
        })
        if (result) {
            triggerModal(`Its a Draw Nobody Wins the Game`);
            saveResults("Draw");
        }
    }
    function triggerModal(winner) {
        /*function to display Winner Name and Reset the Game & Update Scoreboard */
        $(".btn-modal").click();
        $(".winner").html(winner);
    }
    function xWin() {
        /*Function for X Player Win */
        xCombination = Array.from(xCellSet).sort()
        for (let i = 0; i < xCombination.length; i++) {
            for (let j = i + 1; j < xCombination.length; j++) {
                for (let k = j + 1; k < xCombination.length; k++) {
                    xTriples.push([xCombination[i], xCombination[j], xCombination[k]]);
                }
            }
        }
        if (tripletsCheck(xTriples)) {
            return true
        }
    }

    function oWin() {
        /*Function for O Player Win */
        oCombination = Array.from(oCellSet).sort()
        for (let i = 0; i < oCombination.length; i++) {
            for (let j = i + 1; j < oCombination.length; j++) {
                for (let k = j + 1; k < oCombination.length; k++) {
                    oTriples.push([oCombination[i], oCombination[j], oCombination[k]]);
                }
            }
        }
        if (tripletsCheck(oTriples)) {
            return true
        }
    }
    function tripletsCheck(arrayTriplets) {
        /*function to iterate over the X and Y combinations and call contains functions */
        let result = false
        arrayTriplets.forEach((x) => {
            if (contains(x) == true) {
                result = true
            }
        });
        return result
    }
    function contains(obj) {
        /*function to check whether the X or O combination Present in Winning Combinations */
        let result = false
        winningCombination.some((combination) => {
            if (JSON.stringify(combination) == JSON.stringify(obj)) {
                result = true
            }
        })
        return result
    }
    function saveResults(result) {
        /*function to save result to local storage */
        let results = localStorage.results
        let currentResults = {}
        let index = 1
        if (results != undefined) {
            results = JSON.parse(results)
            index = Object.keys(results).length + 1
        }
        currentResults[index] = { 'playerone': playerOne, 'playertwo': playerTwo, 'result': result };
        localStorage.setItem('results', JSON.stringify({ ...results, ...currentResults }))
    }
})