import { convertToMMDDYY } from "../../Date/DateUtil";

const CreateRecord = (name, visa, cc) => {
  let record = "";

  if (visa.length === 2) visa = visa + visa.charAt(0);
  else if (visa.length === 3) visa = visa;
  else if (visa.length > 3) visa = visa.substr(0, 3);
  else visa = "XXX";

  if (visa !== undefined && cc !== undefined && name !== undefined) {
    record = visa + name.substr(0, 4) + convertToMMDDYY(cc);
    record = record.toLowerCase();
    record = record.replace(/-/g, "");
  }

  return record;
};

export default CreateRecord;
