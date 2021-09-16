const btn = document.querySelector(".btn");
const inp = document.querySelector(".size");
const board = document.querySelector(".board");
const boardHeight = board.clientHeight;
const boardWidth = board.clientWidth;

console.log("height",boardHeight)
console.log("width",boardWidth)


btn.addEventListener("click",checkInput);

function checkInput(){
    board.innerHTML="";
    if(inp.value < 2){
        console.log(inp)
        window.alert("Please enter correct size greater than 1");
        return;
    }
    else{
       
        createBoard()
    }
}

function createBoard(){

    for(let i=1;i<=inp.value;i++){
        let row = document.createElement("div");
        row.setAttribute("class",`row row${i}`);
        let calculatedHeight = (boardHeight/inp.value) - 2;
        row.setAttribute("style",`height:${calculatedHeight}px;`);
        console.log(row.style.height)
        for(let j=1;j<=inp.value;j++){
            let square = document.createElement("div");
            square.setAttribute("class",`square square${j}`);
            let calculatedWidth = (boardWidth/inp.value) - 3;
            square.setAttribute("style",`width:${calculatedWidth}px;`)
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}