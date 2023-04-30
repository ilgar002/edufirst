import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const properties = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  className: "toast-message",
  theme: "light",
};

export const notify = (message, status) => toast[status](message, properties);
