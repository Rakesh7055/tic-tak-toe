let music = new Audio("")
let auduiturn = new Audio("")
let gameover = new Audio("")
let Turn = "X"
let isgameover = false;



// function to change the turn
const changeTurn = () => {
    return Turn === "X"?"0" : "X"
}

// function to check for a win

const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
   let wins = [
    [0,1,2, 2,4,0],
    [3,4,5, 2,12,0],
    [6,7,8, 2,20,0],
    [0,3,6, -6,12,90],
    [1,4,7, 2,12,90],
    [2,5,8, 10,12,90 ],
    [0,4,8, 2,12,45],
    [2,4,6, 2,12,135]
   ]
   wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" )){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " " + "Won"
        isgameover = true;

        document.querySelector(".line").style.width = "20rem";
        document.querySelector(".line").style.transform = `translate(${e[3]}rem, ${e[4]}rem) rotate(${e[5]}deg)`
    }
   })
}


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", (e)=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for"+ " " + Turn;
            }
        }
    })
})

// reset button 
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    Turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for"+ " " + Turn;
})
