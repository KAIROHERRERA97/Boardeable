import React from "react";

function FormAccountOrganism() {
  return (
    <form className="mt16 w-80 flex flex-col gap-4">
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
          Name
        </label>
        <input
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="my-2 font-semibold" htmlFor="">
          Email
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
      <div className="flex flex-col gap-4">
        <button className="bg-violet-700 text-white px-8 py-2 shadow-md rounded-md w-full">
          Update
        </button>
        <button className="bg-red-100 text-red-900 border-red-600 border px-8 py-2 shadow-md font-semibold rounded-md w-full">
          Delete my Account
        </button>
      </div>
    </form>
  );
}

export default FormAccountOrganism;
