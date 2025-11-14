import { TechContainerProps } from "./TechContainer";

export default function Details({
  filterdTech,
}: {
  filterdTech: TechContainerProps[];
}) {
  return (
    <>
      {filterdTech.map((tech, i) => (
        <div key={i}>
          <h1 className="text-5xl lg:text-start text-center font-serif text-white mb-7">
            {tech.name}
          </h1>
          <p className="text-gray-400 lg:text-start text-center lg:pb-0 pb-10">
            {tech.description}
          </p>
        </div>
      ))}
    </>
  );
}
