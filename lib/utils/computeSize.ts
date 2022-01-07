const computeSize = (value: string | number) => {
  return isNaN(+value) ? value : `${value}px`;
};

export default computeSize;
