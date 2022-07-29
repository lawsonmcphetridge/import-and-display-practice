
import { videoGames } from './games-array-two.js';
import { renderCandy } from './candies-one-render.js';
import { cars } from './cars-array-three.js';
import { carArray } from './car-array-four.js';



import { candies } from './candies-array-one.js';
import { renderGames } from './video-games-render-two.js';
import { renderCars } from './cars-render-three.js';
import { renderSecondCar } from './cars-render-four.js';
// import functions and grab DOM elements


const candiesOne = document.getElementById('candies-one');
const videoGame = document.getElementById('video-games-two');
const carsThree = document.getElementById('car-three')
const carFour = document.getElementById('car-four');




for (let car of carArray) {
  const carDude = renderSecondCar(car);
  carFour.append(carDude);
}


for (let candy of candies) {
   const candyItem = renderCandy(candy);
    candiesOne.append(candyItem);
}



for (let game of videoGames) {
  const gameItem = renderGames(game);
  videoGame.append(gameItem);
  // console.log(game.name);
}

for (let car of cars) {
  const carItem = renderCars(car);
  carsThree.append(carItem);
}
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
