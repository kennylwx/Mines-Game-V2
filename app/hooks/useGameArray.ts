import { useState } from "react";

type GameArrayProps = {
  gemSymbol: string;
  mineSymbol: string;
  totalCards: number;
  mines: number[];
};

const useGameArray = ({
  gemSymbol,
  mineSymbol,
  totalCards,
  mines,
}: GameArrayProps) => {
  let res = [];

  for (let i = 0; i < totalCards; i++) {
    res.push(gemSymbol);
  }

  for (let j = 0; j < mines.length; j++) {
    res[mines[j]] = mineSymbol;
  }

  const [cards, setCards] = useState<string[]>(res);
  return { cards, setCards };
};

export default useGameArray;
