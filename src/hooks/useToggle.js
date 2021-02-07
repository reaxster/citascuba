import { useState } from "react";

export default (initialState) => {
  const [state, setState] = useState(initialState);

  const handleToggle = () => {
    setState(!state);
  };

  return [state, handleToggle];
};
