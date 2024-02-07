import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
// import LoginPage from "./components/pages/login.pages";
import SignupPage from "./components/pages/signup.page";
import { ToastProvider } from "./context/auth-toast.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <SignupPage></SignupPage>
      {/* <LoginPage></LoginPage> */}
    </ToastProvider>
  </React.StrictMode>
);
