import { useState } from "react";

//This Hook Is to Be Used With Forms
export default (initialState) => {
  const [state, setState] = useState(initialState);

  const handleState = (e) => {
    setState(e.target.value);
  };

  const resetState = () => {
    setState("");
  };

  return [state, handleState, resetState];
};
