

let boxes = document.querySelectorAll(".box");
turnx = true;
const winpos = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]     
]

let result = document.querySelector("#result");
let reset = document.querySelector("#reset");

for (let box of boxes) {
    box.addEventListener("click",() =>{
        if (turnx) {
            
            turnx = false;
            box.innerText = "🌚";              
        }else {
            
            turnx = true;
            box.innerText = "🌝";      
        }
        wincal();
        box.disabled = true;
        
    }) 
}

function  wincal() {

for (let pos of winpos) {
    if (boxes[pos[0]].innerText !== "") {
        if (boxes[pos[0]].innerText === boxes[pos[1]].innerText && boxes[pos[1]].innerText === boxes[pos[2]].innerText) {
            
            for (let box of boxes) {
                box.disabled = true;
            }
            
              result.innerText = `winner, Congratulations                     player '${boxes[pos[0]].innerText}' `;
        
            }
        }
        
    }
}


let refresh = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    result.innerText = "";
}

reset.addEventListener("click",refresh);