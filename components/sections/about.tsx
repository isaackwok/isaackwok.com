import { Section } from "../section";

export function About() {
  return (
    <Section id="about" backgroundImage="/images/about.jpeg">
      <div className="mx-auto flex h-full w-fit flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Isaac Kwok</h1>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <span>🎧 Music </span>
          <span>🥁 Drum </span>
          <span>📷 Photography </span>
          <span>🌍 Travel </span>
        </p>
      </div>
    </Section>
  );
}
