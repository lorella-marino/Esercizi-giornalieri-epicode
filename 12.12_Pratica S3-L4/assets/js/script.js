// Tabellone
document.addEventListener('DOMContentLoaded', () => {
    const board = document.createElement('div');
    board.id = 'tombola-board'

// 76 celle
    for (let i = 1; i <= 76; i++) {
        const cell = document.createElement('div');
        cell.className = 'tombola-cell';
        cell.textContent = i;
        board.appendChild(cell);
    }

    document.body.appendChild(board);

// Bottone
    const button = document.createElement('button');
    button.textContent = 'Estrai Numero';
    document.body.appendChild(button);

// Estrazione
    const extractedNumbers = new Set();

    button.addEventListener('click', () => {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 76) + 1;
        } while (extractedNumbers.has(randomNum));

        extractedNumbers.add(randomNum);

// Evidenziare la cella corrispondente
        const cells = document.querySelectorAll('.tombola-cell');
        cells[randomNum - 1].style.backgroundColor = '#ffb798';
    });
});


// EXTRA
// Tabella da 24 celle
document.addEventListener('DOMContentLoaded', () => {
    const board2 = document.createElement('div');
    board2.id = 'tombola-board2'

// 24 celle
    for (let i = 1; i <= 24; i++) {
        const cell2 = document.createElement('div');
        cell2.className = 'tombola-cell2';
        cell2.textContent = Math.floor(Math.random() * 76) + 1;
        board2.appendChild(cell2);
    }

    document.body.appendChild(board2);

// Bottone
    const button2 = document.createElement('button');
    button2.className = 'button2'
    button2.textContent = 'Estrai Numero';
    document.body.appendChild(button2);

// Estrazione
    const extractedNumbers = new Set();

    button2.addEventListener('click', () => {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 76) + 1;
        } while (extractedNumbers.has(randomNum));

        extractedNumbers.add(randomNum);

// Evidenziare la cella corrispondente
        const cells = document.querySelectorAll('.tombola-cell2');
        cells[randomNum - 1].style.backgroundColor = '#ffb798';
    });
});
