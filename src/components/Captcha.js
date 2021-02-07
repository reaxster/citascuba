import React, { useEffect, useRef, useState } from "react";

export default (props) => {
  const [captcha, setCaptcha] = useState({
    firstDigit: "",
    secondDigit: "",
    userDigit: "",
  });

  const firstNumber = useRef(Math.floor(Math.random() * 10 + 1));
  const secondNumber = useRef(Math.floor(Math.random() * 10 + 1));

  useEffect(() => {
    setCaptcha({
      firstDigit: firstNumber.current,
      secondDigit: secondNumber.current,
    });
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row justify-content-center test">
        <h2>{captcha.firstDigit}</h2>
        <h2>+</h2>
        <h2>{captcha.secondDigit}</h2>
        <h2>=</h2>
        <input
          type="text"
          className="mt-1"
          style={{ width: 50, height: 30, fontSize: 25 }}
        />
      </div>
    </div>
  );
};
