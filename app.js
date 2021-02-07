let hangmanSession1
const puzzleDıv = document.querySelector("#puzzle");
const remainingGuesses = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    hangmanSession1.makeGuess(guess);
    render();
})

const render = () => {
    puzzleDıv.innerHTML = '';
    remainingGuesses.textContent = hangmanSession1.statusMessage;

    hangmanSession1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleDıv.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3')
    hangmanSession1 = new hangmanSession(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()