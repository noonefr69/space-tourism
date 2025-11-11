import { CrewProps } from "./CrewContainer";

export default function Details({
  filterdCrews,
}: {
  filterdCrews: CrewProps[];
}) {
  return (
    <>
      {filterdCrews.map((crew, i) => (
        <div
          className="h-full lg:pb-14 flex flex-col justify-center"
          key={i}
        >
          <h3 className="lg:text-4xl text-2xl text-center lg:text-start text-gray-400 font-serif">
            {crew.role}
          </h3>
          <h1 className="lg:text-7xl text-3xl text-center lg:text-start font-serif text-white mb-10">
            {crew.name}
          </h1>
          <p className="lg:w-2/3 pb-10 lg:pb-0 text-center lg:text-start text-gray-400 font-medium leading-8">
            {crew.bio}
          </p>
        </div>
      ))}
    </>
  );
}
