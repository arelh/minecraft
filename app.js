const gameBoard = document.getElementById("game-board");
const tools = document.querySelector(".tools");

let myObject = { gridWidth: 20, gridHight: 15 };
createWorld();
function createWorld() {
  for (let i = 0; i < myObject.gridWidth; i++) {
    for (let j = 0; j < myObject.gridHight; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `cell ${i}-${j}`);
      div.setAttribute("class", "cell");
      gameBoard.appendChild(div);
    }
  }
}

const divs= document.querySelectorAll("cell")

divs.forEach(div=>div.addEventlistener("click",console.log(div)))

for(let i=0;i<gameBoard.children.length;i++){
    
    let [a,b]=gameBoard.children[i].getAttribute('id').slice(5).split("-")
    //['0','0']
    if(a>16){
        gameBoard.children[i].classList.add("soil")
    }
    if(a>5&&b>8){
        gameBoard.children[i].classList.add("tree")
    }
    if(a>15&&a<16){
        gameBoard.children[i].classList.add("grass")
    }

}












//  function fill(){
//     for(let k = 0;k< gameBoard.children.length;k++){
//        let [i,j] = gameBoard.children[k].getAttribute('id').slice(4).split('-');

//         fillGrass(i,j,k)

//     }

//  }

// const buttonStart=document.querySelector(".buttonStart")
// const body_start = document.querySelector(".container")

// buttonStart.addEventListener("click",()=>{
//     body_start.style.display="none"
// })

// buttonStart.style

// for(let i=0;i<gridHight;i++){
//     for(let j=0;i<gridWidth;j++){
//         let element=document.createElement("div")
//         element.innerText=""
//         element.setAttribute("id",`gr${i}-${j}`);
//         element.setAttribute("class",paintBoard(element,i,j));
//         gridContainer.append(element)
//         console.log(`hi i am ${i}-${j}`);
//     }

// }
// function paintBoard(element,i,j){
//     return "soil-grid-item";
// }

// function creatDivs(col , rows) {
//     for(let i = 0;i < (col * rows); i++) {
//         const div = document.createElement('div')
//         div.style.border="1px solid red"
//         container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
//         container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
//         container.appendChild(div).classList.add('box')
//     }
// }
// creatDivs(16,16)
