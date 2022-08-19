'use strict';

const up = document.querySelector("#up");
const down = document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

down.addEventListener('click', () => {
    movimento('down')
});
up.addEventListener('click', () => {
    movimento('up')
});
left.addEventListener('click', () => {
    movimento('left')
});
right.addEventListener('click', () => {
    movimento('right')
});

const verificaCidAtual = () => {
    if (cidatual == '#' || cidatual == '+' || cidatual == '?') {
        mapa[perso.ln][perso.cl] = '+';
    } else if ("ZYXR".includes(cidatual)) {
        mapa[perso.ln][perso.cl] = cidatual.toLowerCase();
    };
};

const movimento = mov => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 23; j++) {
            if (mapa[i][j] == 'A') {
                perso.ln = i;
                perso.cl = j;
            };
        };
    };

    switch (mov) {
        case 'left':
            for (let i = perso.cl - 1; i >= 0; i--) {
                if (mapa[perso.ln][i] != '-' && mapa[perso.ln][i] != '|' && mapa[perso.ln][i] != ' ') {
                    if (mapa[perso.ln][i] == '#')
                        addAlgomon();
                    else if ("ZXYR".includes(mapa[perso.ln][i]))
                        dueloAlgomon();
                    verificaCidAtual();
                    cidatual = mapa[perso.ln][i];
                    mapa[perso.ln][i] = 'A';
                    break;
                } else if (mapa[perso.ln][i] == ' ') {
                    break;
                };
            };
            break;

        case 'right':
            for (let i = perso.cl + 1; i < 23; i++) {
                if (mapa[perso.ln][i] != '-' && mapa[perso.ln][i] != '|' && mapa[perso.ln][i] != ' ') {
                    if (mapa[perso.ln][i] == '#')
                        addAlgomon();
                    else if ("ZXYR".includes(mapa[perso.ln][i]))
                        dueloAlgomon();
                    verificaCidAtual();
                    cidatual = mapa[perso.ln][i];
                    mapa[perso.ln][i] = 'A';
                    break;
                } else if (mapa[perso.ln][i] == ' ') {
                    break;
                };
            };
            break;

        case 'up':
            for (let i = perso.ln - 1; i >= 0; i--) {
                if (mapa[i][perso.cl] != '-' && mapa[i][perso.cl] != '|' && mapa[i][perso.cl] != ' ') {
                    if (mapa[i][perso.cl] == '#')
                        addAlgomon();
                    else if ("ZXYR".includes(mapa[i][perso.cl]))
                        dueloAlgomon();
                    verificaCidAtual();
                    cidatual = mapa[i][perso.cl];
                    mapa[i][perso.cl] = 'A';
                    break;
                } else if (mapa[i][perso.cl] == ' ') {
                    break;
                };
            };
            break;

        case 'down':
            for (let i = perso.ln + 1; i < 8; i++) {
                if (mapa[i][perso.cl] != '-' && mapa[i][perso.cl] != '|' && mapa[i][perso.cl] != ' ') {
                    if (mapa[i][perso.cl] == '#')
                        addAlgomon();
                    else if ("ZXYR".includes(mapa[i][perso.cl]))
                        dueloAlgomon();
                    verificaCidAtual();
                    cidatual = mapa[i][perso.cl];
                    mapa[i][perso.cl] = 'A';
                } else if (mapa[i][perso.cl] == ' ') {
                    break;
                };
            };
            break;
    };
    imprimirMapa();
};