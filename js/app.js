//function to make new gridboxes and make them square shaped
function makeSquares(rowElem){
    let gridElem = document.createElement('div');
    gridElem.setAttribute('id', 'grid-square');
    rowElem.appendChild(gridElem); //add the grid squares to the flex grid row
}

//function to make new rows of gridboxes to be stacked together, creating the grid
function makeRow(){
    let rowElem = document.createElement('div');
    rowElem.setAttribute('id', 'grid-row');
    return rowElem;
}

//create the 16x16 grid of square divs to act as the canvas
const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i<16; i++){
    let gridRow = makeRow();
    for(let j = 0; j<16; j++){
        makeSquares(gridRow);
    }
    gridContainer.appendChild(gridRow);
}