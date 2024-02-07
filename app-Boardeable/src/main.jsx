import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import LoginPage from "./components/pages/login.pages";
// import SignupPage from "./components/pages/signup.page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SignupPage></SignupPage> */}
    <LoginPage></LoginPage>
  </React.StrictMode>
);
