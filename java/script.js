const name = document.querySelector(`#namn`);
const buttonNamn = document.querySelector(`#buttonNamn`);

buttonNamn.addEventListener(`click`, sparaNamn);

function sparaNamn(event) {
    event.preventDefault();

    const h1Namn = document.querySelector(`#h1Namn`);
    h1Namn.innerText = name.value;
}

const buttonRock = document.querySelector(`#rock`);
const buttonPaper = document.querySelector(`#paper`);
const buttonScissor = document.querySelector(`#scissor`);
const playerScore = document.querySelector(`#playerScore`);
const computerScore = document.querySelector(`#computerScore`);

const arrComputer = [`sten`, `sax`, `påse`];

let pointComputer = 0;
let pointPlayer = 0;

buttonRock.addEventListener(`click`, rock);

function rock(event) {
    let random = arrComputer[Math.floor(Math.random() * arrComputer.length)];

    const playerChoice = document.querySelector(`#playerChoice`);
    playerChoice.innerText = `ditt val är: sten`;

    const computerChoice = document.querySelector(`#computerChoice`);
    computerChoice.innerText = `datorns val är: ` + random;

    if (random === `påse`) {
        computerScore.innerText = ++pointComputer;
    } else if (random === `sax`) {
        playerScore.innerText = ++pointPlayer;
    }
    checkWinner();
}

buttonScissor.addEventListener(`click`, scissor);

function scissor(event) {
    let random = arrComputer[Math.floor(Math.random() * arrComputer.length)];

    const playerChoice = document.querySelector(`#playerChoice`);
    playerChoice.innerText = `ditt val är: sax`;

    const computerChoice = document.querySelector(`#computerChoice`);
    computerChoice.innerText = `datorns val är: ` + random;

    if (random === `påse`) {
        playerScore.innerText = ++pointPlayer;
    } else if (random === `sten`) {
        computerScore.innerText = ++pointComputer;
    }
    checkWinner();
}

buttonPaper.addEventListener(`click`, paper);

function paper(event) {
    let random = arrComputer[Math.floor(Math.random() * arrComputer.length)];

    const playerChoice = document.querySelector(`#playerChoice`);
    playerChoice.innerText = `ditt val är: påse`;

    const computerChoice = document.querySelector(`#computerChoice`);
    computerChoice.innerText = `datorns val är: ` + random;

    if (random === `sten`) {
        playerScore.innerText = ++pointPlayer;
    } else if (random === `sax`) {
        computerScore.innerText = ++pointComputer;
    }
    checkWinner();
}

const winner = document.querySelector(`#winner`);

function checkWinner() {
    if (pointPlayer === 3) {
        winner.innerText = `DU VANN !!`;
        reset();
    } else if (pointComputer === 3) {
        winner.innerText = `DATORN VANN !!`;
        reset();
    }
}

function reset() {
    pointPlayer = 0;
    pointComputer = 0;

    computerChoice.innerText = ` `;
    playerChoice.innerText = ` `;

    setTimeout(function () {
        computerScore.innerText = 0;
        playerScore.innerText = 0;
        winner.innerText = ` `;
    }, 2000);
}
