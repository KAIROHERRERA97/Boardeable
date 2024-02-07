import { useContext } from "react";
import SignupTemplate from "../templates/signup.template";
import { ToastContext } from "../../context/auth-toast.context";
import ToastErrorMolecule from "../molecules/toast.error.molecule";

export default function SignupPage() {
  const {toastInfo} = useContext(ToastContext);

  return (
    <div className="mt-24 flex justify-center relative">
      <SignupTemplate></SignupTemplate>
      {toastInfo.error ? <ToastErrorMolecule></ToastErrorMolecule> : ""}
    </div>
  );
}
