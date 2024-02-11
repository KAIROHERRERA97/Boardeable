import React, { useEffect, useRef, useState } from "react";

function BoardHeaderOrganism() {
  const [isEdit, setIsEdit] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    // setIsEdit(!isEdit);
    // inputRef.current.focus();
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    if (!isEdit) inputRef.current.focus();
  }, [isEdit]);

  return (
    <div className="relative w-fit">
      <div className="flex flex-row gap-2">
        <input
          ref={inputRef}
          className="outline-none border-none bg-violet-300 "
          type="text"
          disabled={isEdit}
          value={"mi Board"}
        ></input>
        <span role="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#525252"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="#525252"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="#525252"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {isVisible ? (
        <div className="absolute w-20  shadow-md rounded-md right-0 mt-1 bg-white flex flex-col gap-1 py-1 px-1">
          <span role="button" className="rounded-md hover:bg-gray-100 p-1">Edit</span>
          <span role="button" className="rounded-md hover:bg-gray-100 p-1">Delete</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BoardHeaderOrganism;
