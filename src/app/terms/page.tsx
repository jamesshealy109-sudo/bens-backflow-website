import { metadata as makeMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ContentPage";
export const metadata = makeMetadata(
  "Website Terms",
  "Information about using the Ben’s Backflow website, service inquiries, appointments and property-specific backflow requirements.",
  "/terms/",
);
export default function Terms() {
  return (
    <>
      <Breadcrumbs path="/terms/" title="Terms" />
      <header className="page-hero container">
        <div>
          <p className="eyebrow">Website information</p>
          <h1>Website terms</h1>
          <p>Updated September 8, 2026</p>
        </div>
      </header>
      <article className="container legal">
        <h2>General information</h2>
        <p>
          This website describes the services of Ben’s Backflow Testing & Repair
          LLC. Educational content is general information. The notice and
          instructions from your water provider govern the requirements for your
          connection; contact the provider when you need clarification.
        </p>
        <h2>Inquiries and appointments</h2>
        <p>
          A phone call, email or online inquiry does not reserve an appointment.
          Service details, access and scheduling are confirmed with you. Scope,
          estimates, payment terms and any applicable warranty are provided for
          the specific work.
        </p>
        <h2>Access and interruptions</h2>
        <p>
          Testing and repairs require access to the assembly and its shutoff
          valves and may interrupt water to the affected line. Tell us about
          access restrictions and timing constraints when arranging service.
        </p>
        <h2>Other websites</h2>
        <p>
          Links to utility information, customer services, StrataWorks and F3
          Midlands are provided for their stated purposes. Third-party website
          content and policies may change. The F3 Midlands link does not imply
          endorsement of Ben’s Backflow.
        </p>
        <h2>Questions</h2>
        <p>
          Contact{" "}
          <a href="mailto:bensbackflow@gmail.com">bensbackflow@gmail.com</a> or{" "}
          <a href="tel:+18642385277">(864) 238-5277</a>.
        </p>
      </article>
    </>
  );
}
