import React from "react";
import BannerAuthTemplate from "./banner-auth.template";
import FormAuthOrganisms from "../organisms/form-auth.organisms";
import { actions_auth } from "../../constants/auth.constant";

function SignupTemplate() {
  return (
    <main className="max-w-xs">
      <BannerAuthTemplate></BannerAuthTemplate>
      <FormAuthOrganisms action={actions_auth.SIGNUP}></FormAuthOrganisms>
      <div className=" flex flex-row items-center justify-center text-violet-700 font-semibold gap-2">
        <span className="text-sm">
          Login to your Account
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M3.83325 7.99998H13.1666M13.1666 7.99998L8.49992 3.33331M13.1666 7.99998L8.49992 12.6666"
              stroke="#6D28D9"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </main>
  );
}

export default SignupTemplate;
