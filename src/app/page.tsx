import Image from "next/image";
import { metadata as makeMetadata } from "@/lib/seo";
import { business, config, withBasePath } from "@/lib/config";
import { services, resources, faqs } from "@/content/pages";
import { Actions, ContactBand } from "@/components/Actions";
import { PageCards } from "@/components/ContentPage";

const local = (path: string) => withBasePath(path, config.basePath);

export const metadata = makeMetadata(
  "Backflow Testing & Repair in Upstate South Carolina",
  "Backflow testing, repair and commercial service across the Upstate, with statewide South Carolina availability. Call Ben’s Backflow at (864) 238-5277.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> BACKFLOW SPECIALISTS · UPSTATE SC
            </p>
            <h1>
              Backflow testing.
              <br />
              In good hands.
            </h1>
            <p className="hero-subtitle">
              Backflow testing & repair.
              <br />
              Done with your property in mind.
            </p>
            <p className="hero-description">
              Testing, repairs and utility reporting for homes and commercial
              properties. Based in the Upstate, serving customers throughout
              South Carolina.
            </p>
            <Actions />
            <div className="hero-note">
              <span aria-hidden="true">✓</span> Family business{" "}
              <span className="note-divider" /> Second-generation business
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src={local("/images/trailer-residential.webp")}
              alt="Ben’s Backflow branded service trailer and truck parked at a property"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
            <div className="photo-caption">
              <span>LOCAL ROOTS. PRACTICAL EXPERTISE.</span>
              <strong>Ready for the work ahead.</strong>
            </div>
            <div className="photo-corner" aria-hidden="true">
              SC
              <br />
              <span>UPSTATE</span>
            </div>
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container">
          <span>Residential & commercial</span>
          <span>Testing, repair & retesting</span>
          <span>Utility reports submitted</span>
          <span>Statewide availability</span>
        </div>
      </div>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / WHAT WE DO</p>
              <h2>
                The right service.
                <br />A clear next step.
              </h2>
            </div>
            <p>
              From a testing notice to an assembly that needs attention, we help
              you move the job forward.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <a
                className="service-card"
                href={local(service.path)}
                key={service.path}
              >
                <div className="service-card-top">
                  <span>0{index + 1}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{service.eyebrow}</h3>
                <p>
                  {
                    [
                      "Know how your assembly is performing, with the test report filed after a passing result.",
                      "Get a failed or leaking assembly assessed, repaired or replaced, and retested.",
                      "Coordinate testing and reporting for a commercial property or multiple locations.",
                      "Get help with leaks, sprinkler heads, valves and controllers in an existing system.",
                    ][index]
                  }
                </p>
                <span className="text-link">Explore service</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container process-grid">
          <div className="process-photo">
            <Image
              src={local("/images/backflow-assembly-test.webp")}
              alt="Backflow testing gauges connected to an assembly during field work"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
            <span>THE WORK BEHIND A PASSING TEST</span>
          </div>
          <div>
            <p className="eyebrow">02 / A STRAIGHTFORWARD PROCESS</p>
            <h2>
              You have enough
              <br />
              on your to-do list.
            </h2>
            <p className="section-intro">
              We’ll help you understand what the property needs, from the first
              conversation to the report.
            </p>
            <ol className="process-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Tell us what you have.</h3>
                  <p>
                    Share the address, testing notice and any access details.
                    We’ll discuss scheduling.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>We test. Then talk through the result.</h3>
                  <p>
                    If the assembly fails, we explain repair or replacement
                    options and retesting.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>The report goes where it belongs.</h3>
                  <p>
                    After a passing test, we submit the completed report to your
                    water provider.
                  </p>
                </div>
              </li>
            </ol>
            <a
              className="text-link"
              href={local("/resources/preparing-for-a-backflow-test/")}
            >
              What to have ready for your visit{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="commercial-section">
        <div className="container commercial-grid">
          <div>
            <p className="eyebrow">FOR PROPERTY MANAGERS & BUSINESSES</p>
            <h2>
              One property.
              <br />
              Or a longer list.
            </h2>
          </div>
          <div>
            <p>
              Commercial backflow work takes coordination. Bring us your
              locations, due dates and site contacts so we can discuss the work
              with the whole property in view.
            </p>
            <a
              href={local("/services/commercial-backflow/")}
              className="button button-light"
            >
              Commercial service <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container coverage-grid">
          <div>
            <p className="eyebrow">03 / WHERE WE WORK</p>
            <h2>
              Upstate at heart.
              <br />
              South Carolina
              <br />
              within reach.
            </h2>
            <p>
              Our home region is the Upstate. Our service availability extends
              throughout the state.
            </p>
            <a className="text-link" href={local("/service-areas/")}>
              Find your service area ↗
            </a>
          </div>
          <div className="coverage-panel">
            <p className="eyebrow">OUR PRIMARY SERVICE REGION</p>
            <h3>Upstate South Carolina</h3>
            <ul>
              {business.cities.slice(0, 9).map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p>And surrounding Upstate communities.</p>
            <a href={local("/south-carolina/")}>
              Outside the Upstate? Let’s talk statewide service. ↗
            </a>
          </div>
        </div>
      </section>
      <section className="section resources-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / A LITTLE KNOW-HOW</p>
              <h2>
                Good questions.
                <br />
                Practical answers.
              </h2>
            </div>
            <a className="text-link" href={local("/resources/")}>
              Visit the resource center ↗
            </a>
          </div>
          <PageCards paths={resources.map((p) => p.path)} />
        </div>
      </section>
      <section className="section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">BEFORE YOU CALL</p>
            <h2>
              A few things
              <br />
              worth knowing.
            </h2>
            <a className="text-link" href={local("/faq/")}>
              All frequently asked questions ↗
            </a>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
