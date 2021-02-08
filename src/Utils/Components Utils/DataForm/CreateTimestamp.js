import { convertToYYMM } from "../../Date/DateUtil";

export default (interviewDate) => {
  let timestamp = convertToYYMM(interviewDate);
  timestamp = timestamp.replace("-", "");
  return timestamp;
};
