import datas from "../../../data.json";
import DestinationClient from "./components/DestinationClient";

export default function Destination() {
  const destinations = datas.destinations;

  return (
    <div className="bg-[url('/destination/background-destination-mobile.jpg')]  md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="grid lg:grid-cols-2 auto-rows-auto gap-10 px-2 lg:px-10 min-h-screen container mx-auto pt-52">
        <h1 className="self-start text-center lg:text-start h-fit text-white text-lg lg:text-2xl tracking-widest uppercase font-mono">
          <span className="font-sans font-bold text-gray-400 tracking-tight">
            01
          </span>{" "}
          Pick your destination
        </h1>

        <DestinationClient destinations={destinations} />
      </div>
    </div>
  );
}
