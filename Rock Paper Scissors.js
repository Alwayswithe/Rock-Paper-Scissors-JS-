let ComputerMove;
let HumanMove;
let RandomComputerMove;

let buttonElementRock = document.querySelector('.Rock');
let buttonElementPaper = document.querySelector('.Paper');
let buttonElementScissors = document.querySelector('.Scissors');
let buttonElementResetScore = document.querySelector('.reset_score');

let Moves = document.querySelector('.Move');
let Result_Display = document.querySelector('.Result');
let Score_Display = document.querySelector('.table_score');

let Result;

let Score_result = JSON.parse(localStorage.getItem('Score_result')) || {
    win: 0,
    losse: 0,
    ties: 0
};

Score_Display.innerText = `Win: ${Score_result.win}, Losses: ${Score_result.losse}, Ties: ${Score_result.ties}`;

buttonElementRock.addEventListener
('click', () => {
    PickComputerMove();
    HumanMove = 'Rock';
    Score(HumanMove, ComputerMove)

    
})

buttonElementPaper.addEventListener
('click', () => {
    PickComputerMove();
    HumanMove = 'Paper';
    Score(HumanMove, ComputerMove)

    
})

buttonElementScissors.addEventListener
('click', () => {
    PickComputerMove();
    HumanMove = 'Scissors';
    Score(HumanMove, ComputerMove)

    
})

buttonElementResetScore.addEventListener
('click', () => {
    Score_result.win = 0;
    Score_result.losse = 0;
    Score_result.ties = 0;
    
    Result_Display.innerText = `Result:`;
    Score_Display.innerText = `Win: ${Score_result.win}, Losses: ${Score_result.losse}, Ties: ${Score_result.ties}`;
    Moves.innerText = `Your move: , Computer move: `;

    localStorage.removeItem('Score_result');
})

// FUNCTION AREA

function PickComputerMove() {
    RandomComputerMove = Math.random();
    
    if (RandomComputerMove >= 0 && RandomComputerMove < 1/3) {
        ComputerMove = 'Rock';
    }
    else if (RandomComputerMove >= 1/3 && RandomComputerMove < 2/3) {
        ComputerMove = 'Paper';
    }
    else {
        ComputerMove = 'Scissors';
    }

    return;
}

function Score(HumanMove, ComputerMove) {
    if (HumanMove === ComputerMove) {
        Result = 'Tie';
        Score_result.ties += 1;
    }
    else if (HumanMove === 'Rock') {
        if (ComputerMove === 'Scissors') {
            Result = 'Win';
            Score_result.win += 1;
        }
        else {
            Result = 'Losse';
            Score_result.losse += 1;
        }
    }
    else if (HumanMove === 'Paper') {
        if (ComputerMove === 'Rock') {
            Result = 'Win';
            Score_result.win += 1;
        }
        else {
            Result = 'Losse';
            Score_result.losse += 1;
        }
    }
    else if (HumanMove === 'Scissors') {
        if (ComputerMove === "Paper") {
            Result = 'Win';
            Score_result.win += 1;
        }
        else {
            Result = 'Losse';
            Score_result.losse += 1;
        }
    }

    Result_Display.innerText = `Result: ${Result}`;

    Moves.innerHTML = `Your move: <img src="images/${HumanMove}-emoji.png" class="move_icon"></img>, Computer move: <img src="images/${ComputerMove}-emoji.png" class="move_icon"></img>`;

    Score_Display.innerText = `Win: ${Score_result.win}, Losses: ${Score_result.losse}, Ties: ${Score_result.ties}`;

    localStorage.setItem('Score_result', JSON.stringify(Score_result));
}