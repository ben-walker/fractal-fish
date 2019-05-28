export default (value: number | string): number | string => {
  const port = parseInt(value.toString(), 10);
  if (Number.isNaN(Number(port))) {
    return value;
  }
  return port >= 0 ? port : value;
};
