export function renderSecondCar(car) {
    const secondCarContainerEl = document.createElement('div');
    const makeEl = document.createElement('h1');
    const modleEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const yearEl = document.createElement('p');
    makeEl.textContent = car.make;
    modleEl.textContent = car.modle;


    for (let color of car.color) {
        const carEl = document.createElement('div');
        carEl.textContent = color;
        colorEl.append(carEl);
    }

    yearEl.textContent = car.year;
    secondCarContainerEl.classList.add('cars-four');


    secondCarContainerEl.append(makeEl, modleEl, colorEl, yearEl);

    return secondCarContainerEl;
}