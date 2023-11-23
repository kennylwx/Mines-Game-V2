import React from "react";

type Props = {
  label: string;
  id: string;
  value: number;
  onChange: () => {};
};

const NumberInput = ({ label, id, value, onChange }: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Bet Amount
      </label>
      <input
        type="number"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        value={value}
      />
    </div>
  );
};

export default NumberInput;
