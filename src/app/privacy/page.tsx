import { metadata as makeMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ContentPage";
export const metadata = makeMetadata(
  "Privacy Policy",
  "How Ben’s Backflow handles website inquiries, optional analytics and links to customer services. Contact us about your information.",
  "/privacy/",
);
export default function Privacy() {
  return (
    <>
      <Breadcrumbs path="/privacy/" title="Privacy" />
      <header className="page-hero container">
        <div>
          <p className="eyebrow">Website information</p>
          <h1>Privacy policy</h1>
          <p>Updated September 8, 2026</p>
        </div>
      </header>
      <article className="container legal">
        <h2>Information you share</h2>
        <p>
          When you call or email Ben’s Backflow Testing & Repair LLC, we receive
          the contact information and property details you provide. We use them
          to respond, arrange service, carry out the work and manage related
          records. This public website does not collect payment details.
        </p>
        <h2>Service records</h2>
        <p>
          Information needed for a job may be shared with the water provider for
          test reporting and with the software used to schedule, invoice and
          manage the work. We do not sell your information or share your phone
          number or SMS consent for other organizations’ marketing.
        </p>
        <h2>Optional analytics</h2>
        <p>
          If analytics is enabled, this website asks permission before loading
          Google Analytics. Analytics may measure page visits and clicks on
          service, phone or portal links. We do not send the contents of emails,
          service requests or payment information as analytics events. Your
          preference is stored in your browser. Use Cookie settings when
          available to change it; clearing browser storage resets the
          preference.
        </p>
        <h2>Customer service links</h2>
        <p>
          When available, online service requests and the customer portal open a
          separate service. Review the privacy information provided there before
          entering your information. Hosting providers may process technical
          access logs to operate and protect their services.
        </p>
        <h2>Records and choices</h2>
        <p>
          Job and test records are kept as needed to service accounts and meet
          applicable recordkeeping requirements. You can ask about access,
          correction or deletion by emailing{" "}
          <a href="mailto:bensbackflow@gmail.com">bensbackflow@gmail.com</a> or
          calling <a href="tel:+18642385277">(864) 238-5277</a>. Records we must
          retain may not be eligible for deletion.
        </p>
        <h2>Text messages</h2>
        <p>
          Calling, emailing or browsing this website does not by itself enroll
          you in marketing texts. If a separate service offers text-message
          enrollment, follow its consent and opt-out instructions.
        </p>
        <h2>Contact</h2>
        <p>
          Ben’s Backflow Testing & Repair LLC · Upstate South Carolina
          <br />
          <a href="mailto:bensbackflow@gmail.com">bensbackflow@gmail.com</a>
        </p>
      </article>
    </>
  );
}
