'use strict';

const up = document.querySelector("#up");
const down = document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const algodextable = document.querySelector("#tabelaalgodex");

down.addEventListener('click', () => {movimento('down')});
up.addEventListener('click', () => {movimento('up')});
left.addEventListener('click', () => {movimento('left')});
right.addEventListener('click', () => {movimento('right')});

const mostraAlgodex = () => {
    algodextable.innerHTML = '';
    perso.algomons.forEach(e => {
        algodextable.innerHTML += 
            `
            <tr>
                <td>${e.nome}</td>
                <td>${e.atk}</td>
                <td>${e.HP}</td>
                <td>${e.type}</td>
            </tr>
            `;
    });
}

const addAlgomon = () => {
    let algomon = Math.floor(Math.random() * (algomons.length-1));
    perso.algomons.push(algomons[algomon]);
    algomons.splice(algomon, 1);
    mostraAlgodex();  
}

const verificaCidAtual = () => {
    if ( cidatual == '#' || cidatual == '+' || cidatual == '?' ){
        mapa[perso.ln][perso.cl] = '+';
    } else if ("ZYXR".includes(cidatual)) {
        mapa[perso.ln][perso.cl] = cidatual;
    }
}

const movimento = mov => {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 23; j++) {
            if(mapa[i][j] == 'A') {
                perso.ln = i;
                perso.cl = j;
            }
        }
    }

    switch (mov) {
        case 'left':
            for(let i = perso.cl-1; i >= 0; i--){
                if(mapa[perso.ln][i] != '-' && mapa[perso.ln][i] != '|' && mapa[perso.ln][i] != ' ') {
                    verificaCidAtual();
                    cidatual = mapa[perso.ln][i];
                    mapa[perso.ln][i] = 'A';
                    if(cidatual == '#') 
                        addAlgomon();
                    break;
                } else if(mapa[perso.ln][i] == ' ') {
                    break;
                }
            }
            break;
        
        case 'right':
            for(let i = perso.cl+1; i < 23; i++){
                    if(mapa[perso.ln][i] != '-' && mapa[perso.ln][i] != '|' && mapa[perso.ln][i] != ' ') {
                    verificaCidAtual();
                    cidatual = mapa[perso.ln][i];
                    mapa[perso.ln][i] = 'A';
                    if(cidatual == '#') 
                        addAlgomon();
                    break;
                } else if (mapa[perso.ln][i] == ' '){
                    break;
                }
            }
            break;

        case 'up':
            for(let i = perso.ln-1; i >= 0; i--){
                    if(mapa[i][perso.cl] != '-' && mapa[i][perso.cl] != '|' && mapa[i][perso.cl] != ' ') {
                    verificaCidAtual();
                    cidatual = mapa[i][perso.cl];
                    mapa[i][perso.cl] = 'A';
                    if(cidatual == '#') 
                        addAlgomon();
                    break;
                } else if(mapa[i][perso.cl] == ' ') {
                    break;
                }
            }
            break;

        case 'down':
            for(let i = perso.ln+1; i < 8; i++){
                    if(mapa[i][perso.cl] != '-' && mapa[i][perso.cl] != '|' && mapa[i][perso.cl] != ' ') {
                    verificaCidAtual();
                    cidatual = mapa[i][perso.cl];
                    mapa[i][perso.cl] = 'A';
                    if(cidatual == '#') 
                        addAlgomon();
                    break;
                } else if(mapa[i][perso.cl] == ' ') {
                    break;
                }
            }
            break;
    }
    imprimirMapa();
}