const isTargetSymbol = (symbol: string, target: string) => {
  return !target.localeCompare(symbol);
};

export default isTargetSymbol;
