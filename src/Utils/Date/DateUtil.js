const getDateElements = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return {
    dd: dd,
    mm: mm,
    yyyy: yyyy,
  };
};

const getDateForInput = () => {
  const curr = new Date();
  curr.setDate(curr.getDate() + 3);
  return curr.toISOString().substr(0, 10);
};

const getDateDDMMYYY = () => {
  return (
    getDateElements().dd +
    "/" +
    getDateElements().mm +
    "/" +
    getDateElements().yyyy
  );
};

const getDateMMDDYYY = () => {
  return (
    getDateElements().mm +
    "/" +
    getDateElements().dd +
    "/" +
    getDateElements().yyyy
  );
};

const convertToMMDDYYY = (str) => {
  return str.substr(5, 7) + "-" + str.substr(0, 4);
};

const convertToYY = (str) => {
  return str.substr(2, 2);
};

const convertToMMDD = (str) => {
  return str.substr(5, 7);
};

export {
  getDateForInput,
  getDateDDMMYYY,
  getDateMMDDYYY,
  convertToMMDDYYY,
  convertToMMDD,
  convertToYY,
};