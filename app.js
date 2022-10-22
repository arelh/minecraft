const gameBoard = document.getElementById("game-board");
const tools = document.querySelector(".tools");
let groundCounter = document.querySelector(".soil-counter");
let grassCounter = document.querySelector(".grass-counter");
let stoneCounter = document.querySelector(".rock-counter");
let woodCounter = document.querySelector(".leaves-counter");
let treeCounter = document.querySelector(".tree-counter");
let leafCounter = document.querySelector(".leaf-counter");
const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");

axe.addEventListener("click", (e) => {
  currentTool = axe;
  axe.style.border = "1px solid red";
  pickaxe.style.border = "1px solid white";
  shovel.style.border = "1px solid white";
});
pickaxe.addEventListener("click", (e) => {
  currentTool = pickaxe;
  axe.style.border = "1px solid white";
  pickaxe.style.border = "1px solid red";
  shovel.style.border = "1px solid white";
});
shovel.addEventListener("click", (e) => {
  currentTool = shovel;
  axe.style.border = "1px solid white";
  pickaxe.style.border = "1px solid white";
  shovel.style.border = "1px solid red";
});

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

for (let i = 0; i < gameBoard.children.length; i++) {
  let [a, b] = gameBoard.children[i].getAttribute("id").slice(5).split("-");
  //['0','0']
  if (a > 14) {
    gameBoard.children[i].classList.add("soil");
  }
  if (a > 13 && a < 15) {
    gameBoard.children[i].classList.add("grass");
  }
  if (a > 12 && a < 14) {
    gameBoard.children[i].classList.add("leaf");
  }
  if (a < 13 && (a > 2) & (b > 13)) {
    gameBoard.children[i].classList.add("rock");
  }
  if (a < 13 && a > 2 && b < 1) {
    gameBoard.children[i].classList.add("rock");
  }
  if (a > 1 && a < 3) {
    gameBoard.children[i].classList.add("rock");
  }
  if (a > 8 && a > 2 && b > 6 && b < 9) {
    gameBoard.children[i].classList.add("tree");
  }
  if (a < 9 && (a > 6) & (b > 4) && b < 11) {
    gameBoard.children[i].classList.add("leaves");
  }
}

gameBoard.addEventListener("click", () => {
  console.log(event.target.getAttribute("class"));
  if(event.target.getAttribute("class").includes("tree")){
    event.target.classList.remove("tree")

  }
});

gameBoard.addEventListener("click", () => {
    console.log(event.target.getAttribute("class"));
    if(event.target.getAttribute("class").includes("rock")){
      event.target.classList.remove("rock")
    }
  });
  gameBoard.addEventListener("click", () => {
    console.log(event.target.getAttribute("class"));
    if(event.target.getAttribute("class").includes("soil")){
      event.target.classList.remove("soil")
    }
  });
  gameBoard.addEventListener("click", () => {
    console.log(event.target.getAttribute("class"));
    if(event.target.getAttribute("class").includes("leaf")){
      event.target.classList.remove("leaf")
    }
  });
  gameBoard.addEventListener("click", () => {
    console.log(event.target.getAttribute("class"));
    if(event.target.getAttribute("class").includes("leaves")){
      event.target.classList.remove("leaves")
    }
  });
  gameBoard.addEventListener("click", () => {
    console.log(event.target.getAttribute("class"));
    if(event.target.getAttribute("class").includes("grass")){
      event.target.classList.remove("grass")
    }
  });

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
