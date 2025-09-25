let box = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msg = document.querySelector("#winner");
let msgcontainer = document.querySelector(".msgcontainer");

let turnO =true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


box.forEach((box) =>{
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkwinner();
       
    })
}
);
const draw = () => {
    let isDraw = true;
    box.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        msg.innerText = "Game is a Draw!";
        msgcontainer.classList.remove("hide");
    }
};
const disableAllBoxes = () => {
    box.forEach((box) => {
        box.disabled = true;
    });
};


const showwinner = (winner) =>{
   msg.innerText = `Congratulation! Winner is  ${winner}`;
   msgcontainer.classList.remove("hide");
   disableAllBoxes();
}
const checkwinner = () =>{
    for (let patterns of winpatterns) {
       let pos1val = box[patterns[0]].innerText;
       let pos2val = box[patterns[1]].innerText;
       let pos3val = box[patterns[2]].innerText;
        
       if(pos1val != "" && pos2val != "" && pos3val != "" ){
        if(pos1val === pos2val && pos2val === pos3val ){
            showwinner(pos1val);
        }
        else{
            draw();
        }
        
       }
    }
}
const resetGame =() =>{
    turnO = true;
    box.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        msgcontainer.classList.add("hide");

    })}
    resetbutton.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);



