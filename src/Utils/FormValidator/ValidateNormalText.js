export default (text) => {
  if (text.match(/^[a-zA-Z]+$/)) return true;
  else return false;
};
