export default (str) => {
  let value = str.replaceAll("-", "");
  return parseInt(value);
};
