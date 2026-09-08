import { metadata as makeMetadata } from "@/lib/seo";
import { business, config } from "@/lib/config";
import { Breadcrumbs } from "@/components/ContentPage";
export const metadata = makeMetadata(
  "Request Service",
  "Call or email Ben’s Backflow with your property address, service needs and testing notice. Upstate South Carolina and statewide jobs welcome.",
  "/request-service/",
);
export default function RequestService() {
  return (
    <>
      <Breadcrumbs path="/request-service/" title="Request service" />
      <header className="page-hero container">
        <div>
          <p className="eyebrow">Let’s get started</p>
          <h1>
            Tell us what
            <br />
            your property needs.
          </h1>
          <p className="lead">
            A test due, a leaking assembly or an irrigation problem—call or
            email with the details and we’ll discuss the next step.
          </p>
        </div>
      </header>
      <div className="container request-grid">
        <div>
          <section className="contact-option">
            <p className="eyebrow">Talk it through</p>
            <h2>Call Ben’s Backflow</h2>
            <a
              className="large-contact"
              href={business.tel}
              data-event="phone_click"
            >
              {business.phone}
            </a>
            <p>
              Have your service address and testing notice nearby, if you have
              one.
            </p>
          </section>
          <section className="contact-option">
            <p className="eyebrow">Send the details</p>
            <h2>Email your request</h2>
            <a
              className="large-contact"
              href={`mailto:${business.email}?subject=Service%20request`}
              data-event="email_click"
            >
              {business.email}
            </a>
            <p>
              Include the work you need, property location and a phone number
              where we can reach you. Please do not email payment details.
            </p>
          </section>
        </div>
        <div className="request-checklist">
          <h2>A few details help us help you.</h2>
          <ul>
            <li>Property address and service needed</li>
            <li>Water provider and any testing due date</li>
            <li>Assembly make, model or photos, if available</li>
            <li>Site contact and access instructions</li>
            <li>Preferred timing and any water interruption constraints</li>
          </ul>
          <p>
            Looking after several properties? Include the full list of
            locations.
          </p>
          {config.requestUrl !== "/request-service/" && (
            <p>
              <a
                className="button"
                href={config.requestUrl}
                data-event="request_service_click"
              >
                Request service online ↗
              </a>
            </p>
          )}
          {config.portalUrl && (
            <p>
              <a
                className="text-link"
                href={config.portalUrl}
                data-event="customer_portal_click"
              >
                Existing customer portal ↗
              </a>
            </p>
          )}
          <p>
            We’ll confirm the service details and appointment with you. Sending
            an inquiry does not reserve a time.
          </p>
          <a className="text-link" href="/privacy/">
            How we handle your information →
          </a>
        </div>
      </div>
    </>
  );
}
