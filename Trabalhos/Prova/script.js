function add(){
    const grupoA = document.querySelector('.grupo-a');
    grupoA.querySelector('h2').innerText = 'Grupo D';
    grupoA.querySelector('ul').innerHTML = `
        <li>Estados Unidos</li>
        <li>Paraguai</li>
        <li>Austrália</li>
        <li>Turquia</li>
    `;
    grupoA.querySelector('details').innerText = 'Fatos: Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.';
}
