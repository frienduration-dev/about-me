import { OrbitingCircles } from "./OrbitingCircles";

const SKILLS = [
  "auth0",
  "blazor",
  "cplusplus",
  "csharp",
  "css3",
  "dotnet",
  "dotnetcore",
  "git",
  "html5",
  "javascript",
  "microsoft",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
] as const;

const Icon = ({ src }: { src: string }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" alt="" />
);

export function Frameworks() {
  const skillsReversed = [...SKILLS].reverse();
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {SKILLS.map((skill, index) => (
          <Icon key={skill + index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skillsReversed.map((skill, index) => (
          <Icon key={`rev-${skill}-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
