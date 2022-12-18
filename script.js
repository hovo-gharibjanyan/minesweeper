startGame(8, 8, 15);

function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
  const field = document.querySelector(".field");
  console.log(field)
  const cellsCount = WIDTH * HEIGHT;
  field.innerHTML = '<button></button>'.repeat(cellsCount);
  const cells = [...field.children];

const bombs =   [...Array(cellsCount).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, BOMBS_COUNT);

field.addEventListener('click', (event) =>{
    if(event.target.tagName !== "BUTTON"){
        return
    }
    const index = cells.indexOf(event.target);
    const column = index % WIDTH;
    const row = Math.floor(index / WIDTH)
    open(row, column)

});

function open(row, column){
    const index = row * WIDTH + column;
    const cell = cells[index]
    cell.innerHTML = isBomb(row, column) ? 'X' : ' ';
    cell.disabled = true;
}

function isBomb(row, column){
    const index = row * WIDTH + column;

    return bombs.includes(index)
}
  
}






































//   BOMBS_COUNT = 0;
//   for (let i = 0; i < bombs.length; i++) {
//     if (bombs[i] === undefined) {
//       bombs[i] = 1;                           chstacvats pordz naxuy hamar 1
//       if (BOMBS_COUNT < 15) {
//         bombs[i] = false;
//         BOMBS_COUNT += 1;
//       }
//     }
//   }

// const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
                                                        // chstacvatsi sharunakutyun@ 
// shuffle(bombs);
// console.log(bombs);