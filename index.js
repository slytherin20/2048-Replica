const btn = document.querySelector(".btn");
const inp = document.querySelector(".size");
const board = document.querySelector(".board");
const checkBoard = document.querySelector(".checkboard");
const tilesBoard = document.querySelector(".tiles");
const boardHeight = board.clientHeight;
const boardWidth = board.clientWidth;

let occupiedPositions = [];

btn.addEventListener("click",checkInput);

//Check if input is valid.
function checkInput(){
    checkBoard.innerHTML="";
    tilesBoard.innerHTML="";
    if(inp.value < 2){
        window.alert("Please enter correct size greater than 1");
        return;
    }
    else{
       
        createBoard()
        let [r1,c1] = generateTilePosition()
        let [r2,c2] = generateTilePosition()
        //If both positions are same
        if(r1===r2 && c1===c2){
            let [r2,c2] = generateTilePosition()
        }
        occupiedPositions.push(`${r1},${c1}`);
        occupiedPositions.push(`${r2},${c2}`);
        let tile1 = createTile()
        let tile2 = createTile()
        placeTileOver(tile1,r1,c1);
        placeTileOver(tile2,r2,c2);
    }
}

//Generates game board
function createBoard(){

    for(let i=1;i<=inp.value;i++){
        let row = document.createElement("div");
        row.setAttribute("class",`row row${i}`);
        let calculatedHeight = (boardHeight/inp.value) - 2;
        row.setAttribute("style",`height:${calculatedHeight}px;`);
        for(let j=1;j<=inp.value;j++){
            let square = document.createElement("div");
            square.setAttribute("class",`square square${j} position-${i}-${j}`);
            let calculatedWidth = (boardWidth/inp.value) - 3;
            square.setAttribute("style",`width:${calculatedWidth}px;`)
            row.appendChild(square);
        }
        checkBoard.appendChild(row);
    }
}

//Generate tile position row and column
function generateTilePosition(){

    let row = Math.floor(Math.random() *(Number(inp.value)))+1;
    let column = Math.floor(Math.random() *(Number(inp.value)))+1;
    return [row,column];
}

//Create a tile.
function createTile(){
    //Tile
    let tile = document.createElement("div");
    tile.setAttribute("class","tile");
    let calculatedHeight = (boardHeight/inp.value) - 3;
    tile.setAttribute("height",`${calculatedHeight}px`);
    tile.setAttribute("width",`${calculatedHeight}px`);

    //Inside tile.
    tile.innerHTML = `<p>2</p>`;
    return tile;
}

//Place tile over board.
function placeTileOver(tile,row,col){
   
    let [squareHeight,squareWidth,tileY,tileX] = positionTile(row,col);
    tile.setAttribute("style",
                    `top:${tileY}px; 
                    left:${tileX}px; 
                    height:${squareHeight-3}px; 
                    width:${squareWidth-4}px`);
    tilesBoard.appendChild(tile);

}

//Find position of tile.
function positionTile(row,col){
    let squareHeight = boardHeight/(Number(inp.value));
    let squareWidth = boardWidth/(Number(inp.value));
    let tileY = squareHeight*(row-1);
    let tileX = squareWidth*(col-1);

    return [squareHeight,squareWidth,tileY,tileX];
}