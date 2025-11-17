import data from "../../../data.json";
import TechContainer from "./components/TechContainer";

export default function Technology() {
  const techs = data.technology;

  return (
    <div className="bg-[url('/technology/background-technology-mobile.jpg')] relative md:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="min-h-screen container mx-auto  flex flex-col justify-center pt-52">
        <TechContainer techs={techs} />
      </div>
    </div>
  );
}
