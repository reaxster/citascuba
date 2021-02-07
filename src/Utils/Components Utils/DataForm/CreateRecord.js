import { convertToYY, convertToMMDD } from "../../Date/DateUtil";

export default (name, dob, ent) => {
  let record = "";
  if (dob !== undefined && ent !== undefined && name !== undefined) {
    record = name.substr(0, 2) + convertToYY(dob) + convertToMMDD(ent);
    record = record.toLowerCase();
    record = record.replaceAll("-", "");
  }

  return record;
};
