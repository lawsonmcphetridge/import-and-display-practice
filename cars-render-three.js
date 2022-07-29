export function renderCars(car) {
    const carContainer = document.createElement('div');
    const brandEl = document.createElement('h1');
    const haulingEl = document.createElement('p');
    const fuelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    brandEl.textContent = car.brand;
    haulingEl.textContent = car.make.hauling;
    fuelEl.textContent = car.make.fuel;
    yearEl.textContent = car.year;

    carContainer.append(brandEl, haulingEl, fuelEl, yearEl);
    return carContainer;

}

