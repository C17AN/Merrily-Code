const decimalSeperator = (value: number | string): string => {
  if (typeof value == "number") {
    return value.toString().toLocaleString();
  }
  return value.toLocaleString();
};

export default decimalSeperator;
