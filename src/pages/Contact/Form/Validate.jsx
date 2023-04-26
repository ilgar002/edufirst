export const validateFirstname = (value) => {
  value = value.trim();
  if (!value) {
    return "Required";
  } else if (value.length < 3) {
    return "Invalid firstname";
  }
};
export const validateEmail = (value) => {
  value = value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return "Required";
  } else if (!emailRegex.test(value)) {
    return "Invalid email";
  }
};
export const validateNumber = (value) => {
  value = value.trim();
  if (!value) {
    return "Required";
  } else if (value.length < 9) {
    return "Invalid number";
  }
};
export const validateSubject = (value) => {
  value = value.trim();
  if (!value) {
    return "Required";
  } else if (value.length < 3) {
    return "Invalid subject";
  }
};
export const validateMessage = (value) => {
  value = value.trim();
  if (!value) {
    return "Required";
  } else if (value.length < 3) {
    return "Invalid message";
  }
};
