import { useState } from "react";

function useForm(validate) {
  const [value, setValue] = useState("");
  const [isExited, setIsExited] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { status: isValid, message: alertMsg } = validate(value);

  function onChange(e) {
    isExited && setHasError(!validate(e.target.value).status);
    setValue(e.target.value);
  }

  function onFocus() {
    isExited && setHasError(!isValid);
  }
  function onBlur() {
    setIsExited(true);
    setHasError(!isValid);
  }

  return {
    value,
    setValue,
    isValid,
    hasError,
    alertMsg,
    onChange,
    onFocus,
    onBlur,
  };
}

export default useForm;
