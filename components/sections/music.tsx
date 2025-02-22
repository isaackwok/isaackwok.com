import { Section } from "../section";

export function Music() {
  return (
    <Section id="music" backgroundImage="/images/music.jpeg">
      <div className="mx-auto flex h-full max-w-lg flex-col items-start justify-center">
        <h1 className="mb-8 text-4xl font-bold">Recent Loops</h1>
        <iframe
          className="rounded-lg"
          src="https://open.spotify.com/embed/track/27udJcfu06TvbbOpgfxIlw?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Section>
  );
}
