// https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default numberWithCommas;
