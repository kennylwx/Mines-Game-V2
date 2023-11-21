// following API - this is how to not write an API
//
//
// DO NOT CHANGE THIS FILE
//
//

// Edited to accomodate multiple mines 8/3/2023

import _ from "lodash";

type State = "idle" | "progress" | "cashout" | "busted";

export type CasinoGameMines = {
  minesCount: number;
  mines: number[];
  revealedTiles: number[];
  state: State;
};

export const wait = () =>
  new Promise<void>((resolve) =>
    setTimeout(resolve, Math.random() * 1000 + 200)
  );

let gameState: CasinoGameMines = {
  minesCount: 5,
  mines: [],
  revealedTiles: [],
  state: "idle",
};

const minesFields = _.range(0, 25);

const getGameState = (state: State) => {
  gameState.state = state;

  if (state === "progress") {
    return { ...gameState };
  }

  return gameState;
};

export const minesBet = async (numOfMines: number) => {
  await wait();

  const newRoundTiles = _.shuffle(minesFields);
  // Updated game state with varying number of mines
  gameState.mines = newRoundTiles.slice(0, numOfMines);
  gameState.minesCount = numOfMines;

  gameState.revealedTiles = [];

  return getGameState("progress");
};

export const minesNext = async (tileToReveal: number) => {
  await wait();

  gameState.revealedTiles.push(tileToReveal);

  if (gameState.mines.includes(tileToReveal)) {
    return getGameState("busted");
  }

  return getGameState("progress");
};

export const minesCashout = async () => {
  await wait();

  return getGameState("cashout");
};
