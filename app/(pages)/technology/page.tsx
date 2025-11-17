import data from "../../../data.json";
import TechContainer from "./components/TechContainer";

export default function Technology() {
  const techs = data.technology;

  return (
    <div className="bg-[url('/technology/background-technology-mobile.jpg')] relative md:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="min-h-screen container mx-auto flex flex-col pt-52">
        <h1 className="animate-faceIn lg:w-fit w-full lg:text-start lg:pl-10 self-start text-center h-fit text-white text-lg lg:text-2xl tracking-widest uppercase font-mono">
          <span className="font-sans font-bold text-gray-400 tracking-tight">
            03
          </span>{" "}
          Space launch 101
        </h1>
        <TechContainer techs={techs} />
      </div>
    </div>
  );
}
