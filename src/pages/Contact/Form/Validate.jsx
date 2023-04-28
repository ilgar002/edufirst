export const validateFirstname = (value) => {
  value = value.trim();
  if (!value) {
    return { message: "Required", status: false };
  } else if (value.length < 3) {
    return { message: "Invalid firstname", status: false };
  } else {
    return { message: "", status: true };
  }
};
export const validateEmail = (value) => {
  value = value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return { message: "Required", status: false };
  } else if (!emailRegex.test(value)) {
    return { message: "Invalid email", status: false };
  }
  return { message: "", status: true };
};
export const validateNumber = (value) => {
  value = value.trim();
  if (!value) {
    return { message: "Required", status: false };
  } else if (value.length < 9) {
    return { message: "Invalid number", status: false };
  }
  return { message: "", status: true };
};
export const validateSubject = (value) => {
  value = value.trim();
  if (!value) {
    return { message: "Required", status: false };
  } else if (value.length < 3) {
    return { message: "Invalid subject", status: false };
  }
  return { message: "", status: true };
};
export const validateMessage = (value) => {
  value = value.trim();
  if (!value) {
    return { message: "Required", status: false };
  } else if (value.length < 3) {
    return { message: "Invalid message", status: false };
  }
  return { message: "", status: true };
};
