import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
// import LoginPage from "./components/pages/login.pages";
import SignupPage from "./components/pages/signup.page";
import { ToastProvider } from "./context/auth-toast.context";
import AccountPage from "./components/pages/account.page";
import HomePage from "./components/pages/home.page";
import BoardPage from "./components/pages/board.page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <BoardPage></BoardPage>
      {/* <HomePage></HomePage> */}
      {/* <AccountPage></AccountPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <LoginPage></LoginPage> */}
    </ToastProvider>
  </React.StrictMode>
);
