const btn = document.querySelector(".btn");
const inp = document.querySelector(".size");
const board = document.querySelector(".board");

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
        row.style.height = `${(500 / Number(inp.value))- 1}px`;
        for(let j=1;j<=inp.value;j++){
            let square = document.createElement("div");
            square.setAttribute("class",`square square${j}`);
            square.style.width = `${(500 / Number(inp.value)-2)}px`;
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}