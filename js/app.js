//function to make new gridboxes and make them square shaped
function makeSquares(rowElem){
    let gridElem = document.createElement('div');
    gridElem.setAttribute('id', 'grid-square');
    rowElem.appendChild(gridElem); //add the grid squares to the flex grid row
    
    //add event listener for the grid to check when user hovers over a square
    gridElem.addEventListener('mouseenter', (e) => {
        //if the mouse is hovering over a grid square element, then apply hover styling
        //then apply hover entry animation
        e.target.classList.add('grid-hover');
        //remove exit styling if it exists
        if (e.target.classList.contains('grid-hover-exit'))
            e.target.classList.remove('grid-hover-exit');
    });

    //add an eventlistener for leaving the squares
    gridElem.addEventListener('mouseleave', (e) =>{
        gridElem.classList.add('grid-hover-exit');
        if(gridElem.classList.contains('grid-hover'))
            gridElem.classList.remove('grid-hover');
    });
}

//function to make new rows of gridboxes to be stacked together, creating the grid
function makeRow(){
    let rowElem = document.createElement('div');
    rowElem.setAttribute('id', 'grid-row');
    return rowElem;
}

//function to make the whole grid given the number of rows and columns (must be equal)
function makeGrid(num){
    for (let i = 0; i < num; i++) {
        let gridRow = makeRow();
        for (let j = 0; j < num; j++) {
            makeSquares(gridRow);
        }
        gridContainer.appendChild(gridRow);
    }
}

//create the 16x16 grid of square divs to act as the canvas
const gridContainer = document.querySelector('#grid-container');

//make the default grid
let gridNum = 16; //default value of 16 x 16 grid
makeGrid(gridNum);

//make reset button to clear the canvas on click
const resetBtn = document.querySelector('#new-canvas');

//style the button if the mouse is over it
resetBtn.addEventListener('mouseenter', (e)=>{
    resetBtn.setAttribute('style', 'box-shadow: 0px 3px 8px #85b0ffff;');
});
resetBtn.addEventListener('mouseleave', (e)=>{
    resetBtn.setAttribute('style', 'box-shadow: none;');
});

//add styling to the input box and add default text
const userInput = document.querySelector('#user-num-squares');

userInput.placeholder = 'enter new grid dimensions...';

//make the button create a new canvas with user's new dimensions uf click detected
resetBtn.addEventListener('click', (e) =>{
    //fetch the userInput value
    //keep the input constrained to 16 - 100 range
    if(userInput.value && (userInput.value>15 && userInput.value <101)){
        gridContainer.replaceChildren(); //removes all the children (rows) from the grid

        //make the new grid
        makeGrid(userInput.value);
    }
    else{
        //warn the user they are not in the correct range
        alert('Please enter a value between 16 and 100.');
    }
});
