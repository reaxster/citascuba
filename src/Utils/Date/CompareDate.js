export default (date1, date2) => {
  date1 = date1.replace("-", "");
  date2 = date2.replace("-", "");

  if (date1 < date2) return -1;
  else if (date1 == date2) return 0;
  else if (date1 > date2) return 1;
  else return "ERROR COMPARING DATES";
};
