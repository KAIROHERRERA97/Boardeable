import { createcontext, useState } from "react";

export const ToastContext = createcontext({
  error: false,
  message: "",
});

export function ToastProvider({ children }) {
  const [toastInfo, setToastInfo] = useState({
    error: false,
    message: "",
  });

  function setErrorToast (message){
    setToastInfo({...toastInfo, error:true, message})

    setTimeout(() => {
      setToastInfo({...toastInfo, error:false, message:""});
    }, 2000 );
  }

  return(
    <ToastContext.Provider 
    value={{setErrorToast:setErrorToast, toastInfo:toastInfo}}>{children}</ToastContext.Provider>
  )
}
