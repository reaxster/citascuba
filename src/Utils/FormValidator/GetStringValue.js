export default (str) => {
  let value = 0;
  for (let index = 0; index < str.length; index++) {
    value += str.charCodeAt(index);
  }
  return value;
};
