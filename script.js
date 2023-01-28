function populateBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for( let i = 0; i < 256; i++){
    let square = document.createElement("div")
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16);

function changeSize(input){
    populateBoard(input);
}

/* Input 
let input = document.querySelector('input');
input.addEventListener('onchange', () => changeSize(input.value))
let submit = document.querySelector('#submit');
submit.addEventListener('click', ()=> populateBoard())
*/