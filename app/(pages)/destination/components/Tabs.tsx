"use client";

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
      {items.map((it, i) => (
        <button
          key={it.name}
          style={{
            animationDuration: `${0.1 + i * 0.1}s`,
          }}
          onClick={() => onSelect(it.name)}
          className={`text-xl animate-faceIn text-[#ffffff74] pb-1 duration-200 border-b-2 border-transparent font-medium cursor-pointer ${
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
