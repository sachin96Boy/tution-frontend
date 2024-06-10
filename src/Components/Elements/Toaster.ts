import { Bounce, toast, ToastOptions } from "react-toastify";

const options: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};
const toaster = (type: string, message: string) => {
  type === "success" && toast.success(message, options);
  type === "error" && toast.error(message, options);
};

export default toaster;
