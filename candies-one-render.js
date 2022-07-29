export function renderCandy(candy) {
    const candyNameEl = document.createElement('p');
    candyNameEl.textContent = candy;
    candyNameEl.classList.add('movieBox');
    return candyNameEl;
};