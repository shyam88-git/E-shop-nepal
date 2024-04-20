import { ToastContainer, ToastOptions, toast } from "react-toastify";
const Toast = () => {
  return (
    <ToastContainer
      bodyClassName="custom-text"
      position="top-center"
      theme="dark"
      rtl={false}
      autoClose={3000}
      pauseOnHover
    />
  );
};

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    style: {
      background: "#EDEDED",
      color: "#050B22",
    },
    ...options,
  });
};

export default Toast;
