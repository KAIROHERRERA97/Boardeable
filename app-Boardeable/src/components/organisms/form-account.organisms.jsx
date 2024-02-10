import React from "react";

function FormAccountOrganism() {
  return (
    <form className="mt-20 w-80">
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
      <div>
        <button className="bg-violet-700 text-white px-8 py-2 my-5 rounded-md w-full">
          Update
        </button>
      </div>
      <div>
        <button className="bg-red-100 text-red-900 border-red-600 border px-8 py-2 font-semibold rounded-md w-full">
          Delete my Account
        </button>
      </div>
    </form>
  );
}

export default FormAccountOrganism;
