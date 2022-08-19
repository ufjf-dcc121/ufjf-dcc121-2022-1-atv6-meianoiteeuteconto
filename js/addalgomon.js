const algodextable = document.querySelector("#tabelaalgodex");
const algodexcount = document.querySelector("#algodexcount");
const algodexinsignias = document.querySelector("#insignias");

const mostraAlgodex = () => {
    algodexcount.innerHTML = `Algodex (${perso.algomons.length}/15)`;
    algodexinsignias.innerHTML = `Insignias: ${perso.insignias}`;
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