import Image from "next/image";
import { business, config, withBasePath } from "@/lib/config";
import { services } from "@/content/pages";

const local = (path: string) => withBasePath(path, config.basePath);

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-company">
              <a href={local("/")} className="footer-wordmark">
                BEN’S BACKFLOW<span>TESTING & REPAIR</span>
              </a>
              <p>
                Based in the Upstate.
                <br />
                Serving customers throughout South Carolina.
              </p>
              <a
                className="footer-phone"
                href={business.tel}
                data-event="phone_click"
              >
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} data-event="email_click">
                {business.email}
              </a>
            </div>
            <div>
              <h2>Services</h2>
              {services.map((service) => (
                <a href={local(service.path)} key={service.path}>
                  {service.eyebrow}
                </a>
              ))}
            </div>
            <div>
              <h2>Explore</h2>
              <a href={local("/service-areas/upstate-south-carolina/")}>
                Upstate South Carolina
              </a>
              <a href={local("/south-carolina/")}>Statewide service</a>
              <a href={local("/about/")}>About Ben’s Backflow</a>
              <a href={local("/resources/")}>Resources</a>
              <a href={local("/faq/")}>Frequently asked questions</a>
            </div>
            <div>
              <h2>Let’s talk</h2>
              <a href={config.requestUrl} data-event="request_service_click">
                Request service ↗
              </a>
              {config.portalUrl && (
                <a href={config.portalUrl} data-event="customer_portal_click">
                  Customer portal ↗
                </a>
              )}
              <a
                className="strata-credit"
                href="https://strataworks.tech"
                aria-label="Site by StrataWorks"
              >
                <span>Site by</span>
                <Image
                  src={local("/images/strataworks-logo.webp")}
                  alt="StrataWorks - Precision. Performance. Partnership."
                  width={136}
                  height={94}
                />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {business.legalName}
            </span>
            <div>
              <a href={local("/privacy/")}>Privacy</a>
              <a href={local("/terms/")}>Terms</a>
              <a className="f3-mark" href="https://f3midlands.com/">
                <Image
                  src={local("/images/f3-midlands-logo.webp")}
                  alt="F3 Midlands"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href={business.tel} data-event="phone_click">
          Call {business.phone}
        </a>
        <a href={config.requestUrl} data-event="request_service_click">
          Request service ↗
        </a>
      </div>
    </>
  );
}
