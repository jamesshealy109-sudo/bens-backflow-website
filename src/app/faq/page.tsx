import { metadata as makeMetadata } from "@/lib/seo";
import { faqs } from "@/content/pages";
import { Breadcrumbs } from "@/components/ContentPage";
import { ContactBand } from "@/components/Actions";
export const metadata = makeMetadata(
  "Backflow Testing & Repair FAQs",
  "Answers about backflow testing, repairs, reporting, irrigation work and statewide service from Ben’s Backflow Testing & Repair in Upstate South Carolina.",
  "/faq/",
);
export default function FAQ() {
  return (
    <>
      <Breadcrumbs path="/faq/" title="Frequently asked questions" />
      <header className="page-hero container">
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h1>Let’s make it clearer.</h1>
          <p className="lead">
            A few practical answers before you arrange service. For requirements
            specific to your property, start with your water provider’s notice.
          </p>
        </div>
      </header>
      <section
        className="container legal faq-list"
        aria-label="Questions and answers"
      >
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
