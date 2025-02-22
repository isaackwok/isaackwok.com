import { Section } from "../section";

export function Experience() {
  return (
    <Section id="experience" backgroundImage="/images/experience.jpeg">
      <div className="mx-auto flex h-full max-w-md flex-col items-start justify-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Work Experience</h1>
        <ol className="flex flex-col italic">
          <li>Senior Frontend Engineer @ Uto.ai</li>
          <li>Frontend Engineer @ Bahwan Cybertek</li>
          <li>Frontend Engineer @ Shopee</li>
        </ol>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-white">Education</h1>
        <ol className="flex flex-col gap-4 italic">
          <li>
            M.S. Information Systems and Application
            <br />
            National Tsing Hua University
          </li>
          <li>
            B.S. Information Management
            <br />
            Ming Chuan University
          </li>
        </ol>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-white">Awards</h1>
        <ol className="flex flex-col italic">
          <li>1st Place, MeiChu Hackathon, 2020</li>
          <li>1st Place, InnoServe Awards, 2018</li>
          <li>1st Place, InnoServe Awards, 2017</li>
        </ol>
      </div>
    </Section>
  );
}
