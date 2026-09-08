import { business, config } from "@/lib/config";

export function RequestLink({
  className = "button",
  children = (
    <>
      Request service <span aria-hidden="true">↗</span>
    </>
  ),
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={config.requestUrl}
      data-event="request_service_click"
    >
      {children}
    </a>
  );
}
export function Actions({ light = false }: { light?: boolean }) {
  return (
    <div className="actions">
      <RequestLink className={`button ${light ? "button-light" : ""}`} />
      <a
        className={`button button-outline ${light ? "outline-light" : ""}`}
        href={business.tel}
        data-event="phone_click"
      >
        Call {business.phone}
      </a>
    </div>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band" id="request">
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow">Let’s take care of it</p>
          <h2>
            A notice, a failed test,
            <br />
            or a question. Start here.
          </h2>
          <p>
            Tell us the property and what you need. We’ll discuss the next step.
          </p>
        </div>
        <Actions light />
      </div>
    </section>
  );
}
