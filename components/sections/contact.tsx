import { Section } from "../section";

export function Contact() {
  return (
    <Section id="contact" backgroundImage="/images/contact.jpeg">
      <div className="mx-auto flex h-full max-w-md flex-col items-start justify-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Email</h1>
        <a
          href="mailto:isaac.kwokch@gmail.com"
          target="_blank"
          className="italic underline"
        >
          isaac.kwokch@gmail.com
        </a>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-white">Links</h1>
        <ol className="flex flex-col italic">
          <li>
            <a
              href="https://github.com/isaackwok"
              target="_blank"
              className="underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/isaac-kwok-026b2a184/"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
        </ol>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-white">Support</h1>
        <a href="https://www.buymeacoffee.com/isaackwok" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: "60px !important", width: "217px !important" }}
          />
        </a>
      </div>
    </Section>
  );
}
