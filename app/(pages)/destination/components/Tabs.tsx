"use client";
import React from "react";

type Item = { name: string };

export default function Tabs({
  items,
  selected,
  onSelect,
}: {
  items: Item[];
  selected: string;
  onSelect: (name: string) => void;
}) {
  return (
    <>
      {items.map((it) => (
        <button
          key={it.name}
          onClick={() => onSelect(it.name)}
          className={`text-xl text-[#ffffff74] pb-1 duration-200 border-b-2 border-transparent font-medium cursor-pointer ${
            selected === it.name
              ? "text-white border-b-white"
              : "hover:border-b-white"
          }`}
        >
          {it.name}
        </button>
      ))}
    </>
  );
}
