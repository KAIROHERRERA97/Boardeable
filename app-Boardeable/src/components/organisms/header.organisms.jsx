import React from "react";
import LogoAtom from "../atoms/logo.atom";

function HeaderOrganism() {
  function HandleLogout() {}

  return (
    <header className="px-16 ">
      <nav className="flex justify-between items-center py-4">
        <div className="flex flex-row gap-4 items-center">
          <LogoAtom size="sm"></LogoAtom>
          <h2 className="text-xl font-bold ">Boardable</h2>
        </div>
        <div className="flex gap-2">
          <button className="py-2 px-4 border shadow-md rounded-md h-10 text-sm">
            My Account
          </button>
          <button className="py-2 px-4 border shadow-md bg-gray-200 border-gray-200 rounded-md">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderOrganism;
