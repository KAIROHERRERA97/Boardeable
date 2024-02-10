import React, { useContext } from "react";
import axios from "axios";
import { actions_auth } from "../../constants/auth.constant";
import { ToastContext } from "../../context/auth-toast.context";

function FormAuthOrganisms({ action = "login" }) {
  const { setErrorToast } = useContext(ToastContext);
  // formulario de eventos:
  async function handleSubmit(e) {
    e.preventDefault();
    if (action === actions_auth.LOGIN) {
      try {
        await axios.post("api.../login");
      } catch (error) {
        setErrorToast("Login Incorrect");
      }
    } else if (action === actions_auth.SIGNUP) {
      try {
        await axios.post("api.../signup");
      } catch (error) {
        setErrorToast("Signup incorrect");
      }
    }
  }

  return (
    <form className="flex flex-col my-8 gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="my-2 font-semibold" htmlFor="">
          Username
        </label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="my-2 font-semibold" htmlFor="">
          Password
        </label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="password"
        />
      </div>
      <div>
        <button className="bg-violet-700 text-white px-8 py-2  rounded-md w-full">
          {action === actions_auth.LOGIN ? "Login" : "Signup "}
        </button>
      </div>
    </form>
  );
}

export default FormAuthOrganisms;
