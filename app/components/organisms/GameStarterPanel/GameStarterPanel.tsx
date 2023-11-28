import React from "react";

type GameStarterProps = {
  betAmount: number;
  numOfMines: number;
};

const GameStarterPanel = ({
  betAmount = 1000,
  numOfMines = 5,
}: GameStarterProps) => {
  return (
    <div className="flex flex-col w-full border-r-[1px] border-gray-200">
      <div className="h-16 flex justify-start items-center px-4 border-b-[1px] border-gray-200">
        <h1 className="text-md text-gray-900 font-bold uppercase">💣</h1>
      </div>
      <div className="px-4 py-4 h-full">Testing</div>
      <div className="h-12 px-4 flex items-center border-t-[1px] border-gray-200">
        <p className="text-sm text-gray-900 font-medium">kennylee.ai</p>
      </div>
    </div>
  );
};

export default GameStarterPanel;
