export function renderSecondCar(car) {
    const secondCarContainerEl = document.createElement('div');
    const makeEl = document.createElement('h1');
    const modleEl = document.createElement('p');
    const colorRedEl = document.createElement('p');
    const colorWhiteEl = document.createElement('p');
    const colorBlueEl = document.createElement('p');
    const yearEl = document.createElement('p');
    makeEl.textContent = car.make;
    modleEl.textContent = car.modle;
    colorRedEl.textContent = car.color[0];
    colorWhiteEl.textContent = car.color[1];
    colorBlueEl.textContent = car.color[2];
    yearEl.textContent = car.year;
    secondCarContainerEl.classList.add('cars-four');


    secondCarContainerEl.append(makeEl, modleEl, colorRedEl, colorWhiteEl, colorBlueEl, yearEl);

    return secondCarContainerEl;
}