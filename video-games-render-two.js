
export function renderGames(game) {
    const gameContainerEl = document.createElement('div');
    const gameEl = document.createElement('p')
    const nameEl = document.createElement('h1');
     const typeEl = document.createElement('p');
    const povEl = document.createElement('p');
    gameContainerEl.classList.add('cars-three');
    nameEl.textContent = game.name;
    typeEl.textContent = game.type;
    povEl.textContent = game.pov;
    gameEl.textContent = game.game;


    gameContainerEl.append(nameEl, gameEl, typeEl, povEl);
    return gameContainerEl;
}



