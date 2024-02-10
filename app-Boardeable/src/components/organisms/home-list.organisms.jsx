import React, { useState } from "react";
import { initialStatus } from "../../hooks/home-list.hooks";

function HomeListOrganism() {
  const { optionColors, color, handleClick, handleSelect, paleteVisible } =
    initialStatus();

  const [tittle, setTittle] = useState("");

  const [boards, setBoards] = useState([]);

  function handleCreate() {
    const format = {
      color,
      tittle,
    };
    console.log(format);

    setBoards([...boards, format]);
  }

  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative">
        {/* card */}
        <div className="rounded-md border border-slate-300 bg-slate-200 p-4 min-w-[18rem]">
          <h2>Board Tittle</h2>
          <input
            className="px-3 py-2 outline-none rounded-md mt-2 w-full"
            type="text"
            onChange={(e) => setTittle(e.target.value)}
          ></input>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex items-center gap-2">
              <span>Color </span>
              <div
                role="button"
                onClick={handleClick}
                className={`rounded-full border border-black w-6 h-6 ${color}`}
              ></div>
            </div>
            <button
              className="bg-violet-700 shadow-md text-white px-8 py-2 rounded-md"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
        {/* paleta de colores */}

        {paleteVisible ? (
          <div className="w-32   shadow-md rounded-md absolute left-3 top-36 bg-gray-100 flex flex-wrap justify-arround py-2 px-2 gap-1 ">
            {optionColors.map((item, index) => (
              <div
                onClick={() => handleSelect(item)}
                key={index}
                role="button"
                className={`rounded-full border border-black w-6 h-6 ${item}`}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* iterar */}

      {boards.map((board, index) => (
        <div
          key={index}
          className={`rounded-md shadow-xl min-h-40 ${board.color} p-4 min-w-[18rem] flex items-center justify-center`}
        >
          <h1 className="font-bold text-xl">{board.tittle}</h1>
        </div>
      ))}
    </div>
  );
}

export default HomeListOrganism;
