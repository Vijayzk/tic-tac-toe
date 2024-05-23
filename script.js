let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true; //playerX , playerO

let winPattern = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log(box);
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = 'X';
            turnO = true;
        }

        box.disabled = true;
        count++;
        if(count==9){
            turnO = true;
            enableBoxes();
            msg.innerText = `Game Draw !`;
            msgContainer.classList.remove("hide");

        }
        checkWinner();
    })
})

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner = ()=>{
    for (let pattern of winPattern){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }

    }
};

newGameBtn.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);


