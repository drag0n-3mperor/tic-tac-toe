let turn = 0;
const win = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
];
let selected = [0,0,0,0,0,0,0,0,0];
let won  = false;

// function delay(n) {
//     for (let t = 1; t < n*1e9; t++);
// }

const algo = () => {
    for (elem of win) {
        let tac = 0, toe = 0;
        for (e of elem) {
            if (selected[e-1] == 'O')
            tac++;
        if (selected[e-1] == '0')
                toe++;
        }
        if (tac == 2 && toe == 1) {
            console.log(elem);
            if (selected[elem[0]-1] == '0')
                return elem[0];
            else if (selected[elem[1]-1] == '0')
                return elem[1];
            else
            return elem[2];
    }
}
    for (elem of win) {     
        let tic = 0, toe = 0;
        for (e of elem) {
            if (selected[e-1] == 'X')
                tic++;
            if (selected[e-1] == '0')
                toe++;
        }
        if (tic == 2 && toe == 1) {
            console.log(elem);
            if (selected[elem[0]-1] == '0')
                return elem[0];
            else if (selected[elem[1]-1] == '0')
                return elem[1];
            else
                return elem[2];
        }
    }

    let r = Math.random();
    r = r * 8 + 1;
    r = parseInt(r);
    while (selected[r-1] != '0') {
        r = Math.random();
        r = r * 8 + 1;
        r = parseInt(r);
    }
    return r;
}

const btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.innerHTML = 'X';
        selected[btn.id-1] = 'X';
        console.log(selected);
        btn.disabled = true;
        turn ++;
        check();
        if (turn != 9 && won == false) {
            document.getElementById('player').innerHTML = `Computer's Turn`;
            // console.log(won);
            let r = algo();
            selected[r-1] = 'O';
            document.getElementById(r).innerHTML = 'O';
            document.getElementById(r).disabled = true;
            document.getElementById('player').innerHTML = `Your Turn`;
            turn++;
            check();
        }
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
    won = false;
    document.getElementById('player').innerHTML = `Your Turn`;
})

const check = () => {
    for (elem of win) {
        let x = selected[elem[0]-1];
        let y = selected[elem[1]-1];
        let z = selected[elem[2]-1];
        if (x == y && y == z && x != '0') {
            winner();
            won = true;
        }
        if (turn == 9) {
            document.getElementById('player').innerHTML = `It\'s a DRAW!`;
        }
    }
}

const winner = () => {
    if (turn % 2 == 1)
        document.getElementById('player').innerHTML = `You Won!`;
    else
        document.getElementById('player').innerHTML = `You Lose!`;
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