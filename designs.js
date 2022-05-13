// Select color input
const colorInput = document.getElementById("colorPicker");
// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const submitButton = document.getElementById("submit");
const table = document.getElementById("pixelCanvas");

/*
    This function adds an event listener to the submit
    button and calls the make grid function thereby 
    creating tables on the page.
*/
submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    makeGrid();
})

/*
    The function below is the color picker function,
    it sets the color to the one chosen by the
    triggering of an event.
*/
table.addEventListener('click',(myEvent)=>{
    myEvent.preventDefault();
    const changeColor = myEvent.target;
    changeColor.style.backgroundColor = colorInput.value;
})

/*
    @desc create a grid of squares
    @variable inputWidth - number of squares representing the width of the grid
    @variable inputHeight -number of squares representing the height of the grid
*/
function makeGrid() {

// Your code goes here!
    table.innerHTML="";
    for(i=0; i < inputHeight.value; i++){
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        for(m=0; m < inputWidth.value; m++){
            let boxes = document.createElement("td");
            tableRow.appendChild(boxes);
        }
    }
    
}
