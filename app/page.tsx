import { About, Experience, Contact, Music } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-screen">
      <About />
      <Music />
      <Experience />
      <Contact />
    </div>
  );
}
