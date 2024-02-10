import { useState } from "react";

export function initialStatus() {
  const [paleteVisible, setPaleteVisible] = useState(false);

  const [color, setColor] = useState("bg-slate-200");

  function handleClick() {
    setPaleteVisible(!paleteVisible);
  }

  function handleSelect(newColor) {
    setColor(newColor);
    setPaleteVisible(!paleteVisible);
  }

  const optionColors = [
    "bg-slate-200",
    "bg-[#FECACA]",
    "bg-[#FED7AA]",
    "bg-[#FEF0BA]",
    "bg-[#D0F99D]",
    "bg-[#BFDBFE]",
    "bg-[#FBCFE8]",
    "bg-[#DDD6FE]",
  ];

  return { optionColors, color, handleClick, handleSelect, paleteVisible };
}
