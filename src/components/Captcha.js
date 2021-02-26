import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

export default (props) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <ReCAPTCHA
      sitekey={process.env.REACT_APP_CAPTCHA_KEY}
      onChange={props.onChange}
    />
  );
};
