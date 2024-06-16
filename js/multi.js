let turn = 0;
const win = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
];
let selected = [0,0,0,0,0,0,0,0,0];
let won = false;

const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn % 2) {
            btn.innerHTML = 'X';
            selected[btn.id-1] = 'X';
        } else {
            selected[btn.id-1] = 'O';
            btn.innerHTML = 'O';
        }
        console.log(selected);
        btn.disabled = true;
        turn ++;
        document.getElementById('player').innerHTML = `Player ${(turn%2)+1} Turn`;
        check();
    });
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    btns.forEach((btn) => {
        btn.innerHTML = '';
        btn.disabled = false;
    })
    selected= [0,0,0,0,0,0,0,0,0];
    turn = 0;
    won  = false;
    document.getElementById('player').innerHTML = `Player ${(turn%2)+1} Turn`;
})

const check = () => {
    for (elem of win) {
        let x = selected[elem[0]-1];
        let y = selected[elem[1]-1];
        let z = selected[elem[2]-1];
        if (x == y && y == z && x != '0') {
            winner(x);
            won = true;
        }
        if (won == false && turn == 9) {
            document.getElementById('player').innerHTML = `It\'s a DRAW!`;
        }
    }
}

const winner = (p) => {
    console.log(`Winner is ${p}`);
    document.getElementById('player').innerHTML = `Winner is ${p}`;
    disableALL();
}

const disableALL = () => {
    btns.forEach((btn) => {
        btn.disabled = true;
    })
}

const enableAll = () => {
    btns.forEach((btn) => {
        btn.disabled = false;
    })
}