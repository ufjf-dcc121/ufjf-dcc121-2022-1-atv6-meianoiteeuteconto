const imprimirMapa = () => {
    const game = document.querySelector("#game");
    game.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for(let j = 0; j < 23; j++) {
            game.innerHTML += 
            `
                <div>
                    <h1>${mapa[i][j]}</h1>
                </div>
            `;
        };  
    };
};