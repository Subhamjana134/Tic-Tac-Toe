console.log('Welcome To Tic Tac Toe');

const game1 = new Audio('game.mp3')
const audioturn = new Audio('turn.wav')
const win = new Audio('win.wav');
const over = new Audio('over.wav')
let isGameover = false;

let turn = "x";
//To change the turn
const changeturn = () => {
    return turn === "x" ? "0" : "x"
};

//function to check fot a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 0, 4, 0],
        [3, 4, 5, 0, 12, 0],
        [6, 7, 8, 0, 20, 0],
        [0, 3, 6, -8, 12, 90],
        [1, 4, 7, 0, 12, 90],
        [2, 5, 8, 8, 12, 90],
        [2, 4, 6, 0, 12, 135],
        [0, 4, 8, 0, 12, 45]
    ]
    wins.forEach(e => {
        if (
            (boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won"
            isGameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '140px'
            win.play()
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic
// game1.play()
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkWin();
            if (!isGameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
            }
            else{
                document.querySelector('.line').style.width = '330px'
                document.querySelector('.line').style.height = '3px'
                
            }
        }
    });
});

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        document.querySelector('.line').style.width = '0px'
    });
    turn = "x";
    isGameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
});