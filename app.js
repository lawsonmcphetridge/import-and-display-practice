
import { videoGames } from './games-array-two.js';
import { renderCandy } from './candies-one-render.js';



import { candies } from './candies-array-one.js';
import { renderGames } from './video-games-render-two.js';
// import functions and grab DOM elements


const candiesOne = document.getElementById('candies-one');
const videoGame = document.getElementById('video-games-two');


for (let candy of candies) {
   const candyItem = renderCandy(candy);
    candiesOne.append(candyItem);
}



for (let game of videoGames) {
  const gameItem = renderGames(game);
  videoGame.append(gameItem);
  // console.log(game.name);
}


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
