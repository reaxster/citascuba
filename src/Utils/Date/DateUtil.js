/*
 * ALL CONVERSTIONS NEED TO GET THE INPUT IN YYYY-MM-DD
 * ****/

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

const convertToYYMM = (str) => {
  return str.substr(0, 4) + str.substr(4, 3);
};

const convertFromMMDDYYYYtoYYYYMMDD = (str) => {
  return str.substr(6, 4) + "-" + str.substr(0, 3) + str.substr(6, 2);
};

const convertToMMDDYY = (str) => {
  return str.substr(5, 7) + "-" + str.substr(2, 2);
};

export {
  convertToMMDDYY,
  getDateForInput,
  getDateDDMMYYY,
  getDateMMDDYYY,
  convertToMMDDYYY,
  convertToMMDD,
  convertToYY,
  convertToYYMM,
  convertFromMMDDYYYYtoYYYYMMDD,
};
