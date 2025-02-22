import { Section } from "../section";

export function Experience() {
  return (
    <Section id="experience" backgroundImage="/images/experience.jpeg">
      <div className="mx-auto flex h-full max-w-md flex-col items-start justify-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Education</h1>
        <ol className="flex flex-col italic">
          <li>Master of Science, National Tsing Hua University</li>
          <li>Bachelor of Science, Ming Chuan University</li>
        </ol>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-white">
          Work Experience
        </h1>
        <ol className="flex flex-col italic">
          <li>Senior Frontend Engineer @ Uto.ai</li>
          <li>Frontend Engineer @ Bahwan Cybertek</li>
          <li>Frontend Engineer @ Shopee</li>
        </ol>
      </div>
    </Section>
  );
}
