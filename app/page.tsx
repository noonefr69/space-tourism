import TiltedCard from "@/components/TiltedCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/home/background-home-mobile.jpg')] relative md:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] min-h-screen bg-no-repeat bg-center bg-cover">
      <div className="grid lg:grid-cols-2 gap-20 container px-2 lg:px-10 mx-auto pt-44 lg:pt-75 text-center lg:text-left">
        <div className="flex flex-col justify-center">
          <h5
            style={{
              animationDuration: `0.2s`,
            }}
            className="animate-faceIn text-gray-400 font-mono lg:text-xl relative lg:top-2 tracking-[2.7px] uppercase"
          >
            So, you want to travel to
          </h5>
          <h1
            style={{
              animationDuration: `0.3s`,
            }}
            className="text-white animate-faceIn font-serif text-[80px] md:text-[150px] uppercase"
          >
            Space
          </h1>
          <p
            style={{
              animationDuration: `0.4s`,
            }}
            className="text-gray-400 animate-faceIn relative lg:bottom-2 font-barlow text-[15px] md:text-lg max-w-[444px] mx-auto lg:mx-0"
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-center pb-20 lg:pb-0">
          <Link
            href="/destination"
            className="rounded-full active:scale-95 lg:hidden bg-white w-72 h-72 font-serif flex items-center justify-center text-xl text-[32px] uppercase tracking-[1.25px] transition-all duration-300"
          >
            Explore
          </Link>
          <Link className="hidden lg:flex" href={`/destination`}>
            <TiltedCard
              captionText="Let's Explore"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
