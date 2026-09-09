import Image from "next/image";
import { business, config, withBasePath } from "@/lib/config";
import { resources } from "@/content/pages";
import { Actions, ContactBand } from "./Actions";

const local = (path: string) => withBasePath(path, config.basePath);
function FieldImage({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`field-image ${className}`}>
      <Image
        src={local(`/images/${name}.webp`)}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export function IndustrialHome() {
  return (
    <>
      <section className="industrial-hero" aria-labelledby="hero-title">
        <FieldImage
          name="backflow-assembly-test"
          alt="Hands and test hoses on a backflow prevention assembly during actual company field work"
          className="hero-field"
          priority
          sizes="(max-width: 760px) 100vw, 65vw"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container industrial-hero-inner">
          <div className="hero-kicker">
            <span className="technical-cross" aria-hidden="true">
              +
            </span>{" "}
            BACKFLOW TESTING & REPAIR <span className="kicker-line" />
          </div>
          <h1 id="hero-title">
            <span>Test.</span>
            <span>Repair.</span>
            <span className="accent-word">Report.</span>
          </h1>
          <div className="hero-brief">
            <p>
              Precision in the field.
              <br />
              Clarity in the paperwork.
            </p>
            <p>
              Backflow testing, repair and compliance support across the
              Upstate. Statewide South Carolina service available.
            </p>
            <Actions light />
          </div>
          <span className="hero-photo-label">
            FIELD WORK / BACKFLOW ASSEMBLY TEST
          </span>
        </div>
        <div className="hero-bottom">
          <div className="container">
            <span>
              <b>SC</b> BASED IN THE UPSTATE
            </span>
            <a href={local("/services/commercial-backflow/")}>
              Residential & commercial service <span aria-hidden="true">↗</span>
            </a>
            <a href="#capabilities" className="explore-link">
              Explore our capabilities <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="capability-panel"
        id="capabilities"
        aria-label="Service capabilities"
      >
        <div className="container capability-grid">
          <div className="capability-intro">
            <span className="technical-cross" aria-hidden="true">
              +
            </span>
            <p>
              FIELD CAPABILITY
              <br />
              <strong>
                Clear scope.
                <br />
                Direct contact.
              </strong>
            </p>
          </div>
          <dl>
            <div>
              <dt>PROPERTIES</dt>
              <dd>
                Residential
                <br />
                Commercial
              </dd>
            </div>
            <div>
              <dt>THE WORK</dt>
              <dd>
                Testing & repair
                <br />
                Retesting & reporting
              </dd>
            </div>
            <div>
              <dt>OUR REACH</dt>
              <dd>
                Upstate primary
                <br />
                South Carolina statewide
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-title">
        <div className="container">
          <div className="work-heading">
            <SectionLabel number="01">FIELD SERVICES</SectionLabel>
            <h2 id="work-title">
              The assembly.
              <br />
              The details.
              <br />
              <span>The whole job.</span>
            </h2>
            <p>
              Backflow work is more than a test result. It is understanding the
              device, addressing what needs attention and getting the report to
              the right place.
            </p>
          </div>
          <article className="work-feature testing-feature">
            <FieldImage
              name="backflow-assembly-test"
              alt="Connected test hoses and valves on a backflow assembly"
            />
            <div className="work-feature-copy">
              <span className="service-index" aria-hidden="true">
                01
              </span>
              <p className="eyebrow">ASSEMBLY TESTING</p>
              <h3>
                Know where
                <br />
                you stand.
              </h3>
              <p>
                Testing for residential, commercial and irrigation assemblies.
                Bring us the utility notice; we’ll discuss access, timing and
                the work your property needs.
              </p>
              <a
                className="text-link"
                href={local("/services/backflow-testing/")}
              >
                Backflow testing <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
          <article className="work-feature repair-feature">
            <div className="work-feature-copy">
              <span className="service-index" aria-hidden="true">
                02
              </span>
              <p className="eyebrow">REPAIR & REPLACEMENT</p>
              <h3>
                Find the fault.
                <br />
                Resolve the problem.
              </h3>
              <p>
                A failed test needs a clear explanation. We assess the assembly,
                discuss repair or replacement, and retest after the work.
              </p>
              <a
                className="text-link"
                href={local("/services/backflow-repair/")}
              >
                Backflow repair <span aria-hidden="true">↗</span>
              </a>
            </div>
            <FieldImage
              name="testing-gate-valve-vault"
              alt="Technician using a gauge while working on a backflow assembly in a valve vault"
            />
          </article>
          <a
            className="irrigation-row"
            href={local("/services/irrigation-repair/")}
          >
            <span className="service-index" aria-hidden="true">
              03
            </span>
            <div>
              <p className="eyebrow">ALSO IN THE FIELD</p>
              <h3>Existing irrigation. Working again.</h3>
            </div>
            <p>
              Diagnostics and repair for heads, valves, leaks and controllers.
            </p>
            <span className="row-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>

      <section className="technical-process" aria-labelledby="process-title">
        <div className="container">
          <div className="process-heading">
            <SectionLabel number="02">THE FIELD SEQUENCE</SectionLabel>
            <h2 id="process-title">
              Measured.
              <br />
              Not guessed.
            </h2>
            <p>
              The result determines the next step. Repair and replacement are
              discussed when an assembly needs attention.
            </p>
          </div>
          <ol className="sequence-grid">
            {[
              ["Test", "Check assembly performance and record the result."],
              [
                "Diagnose",
                "If it fails, assess the cause and discuss the options.",
              ],
              ["Repair", "Carry out the agreed repair or replacement work."],
              ["Retest", "Test the assembly again after the work."],
              ["Report", "Submit the completed report after a passing test."],
            ].map(([title, copy], i) => (
              <li key={title}>
                <span className="sequence-number">
                  0{i + 1}
                  <span aria-hidden="true">/</span>
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
          <div className="sequence-note">
            <p>
              Requirements and reporting instructions depend on your water
              provider. Start with the notice for your connection.
            </p>
            <a
              href={local("/resources/preparing-for-a-backflow-test/")}
              className="text-link"
            >
              Prepare for a site visit ↗
            </a>
          </div>
        </div>
      </section>

      <section
        className="commercial-capability"
        aria-labelledby="commercial-title"
      >
        <div className="commercial-photo-wrap">
          <FieldImage
            name="testing-gate-valve-vault"
            alt="Hands-on testing with a gauge inside a below-grade assembly vault"
          />
          <span className="image-register">
            ON SITE / ASSEMBLY ACCESS & TESTING
          </span>
        </div>
        <div className="commercial-copy">
          <SectionLabel number="03">COMMERCIAL CAPABILITY</SectionLabel>
          <h2 id="commercial-title">
            Serious work.
            <br />
            At every
            <br />
            service address.
          </h2>
          <p>
            One building or a list of properties. Coordinate backflow testing,
            repairs and reporting with the locations, access contacts and due
            dates in view.
          </p>
          <ul className="audience-list">
            <li>Property managers</li>
            <li>Commercial facilities</li>
            <li>HOAs & multifamily</li>
            <li>Multiple locations</li>
          </ul>
          <a
            href={local("/services/commercial-backflow/")}
            className="button button-light"
          >
            Commercial backflow <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="continuity-section">
        <div className="container continuity-grid">
          <div>
            <SectionLabel number="04">THE COMPANY BEHIND THE WORK</SectionLabel>
            <h2>
              Built on experience.
              <br />
              Carried forward.
            </h2>
          </div>
          <div className="continuity-copy">
            <p className="owner-line">Kyle / Current owner & operator</p>
            <p>
              Kyle carries forward the second-generation family business his
              father built. Direct owner involvement keeps the conversation
              grounded in the property, the work and what needs to happen next.
            </p>
            <a href={local("/about/")} className="text-link">
              Meet the company ↗
            </a>
          </div>
          <div className="continuity-image">
            <FieldImage
              name="trailer-residential"
              alt="Ben’s Backflow branded trailer and service vehicle at a property"
              sizes="(max-width: 760px) 100vw, 85vw"
            />
            <span className="image-register">
              BEN’S BACKFLOW / FIELD SERVICE
            </span>
          </div>
        </div>
      </section>

      <section className="industrial-coverage">
        <div className="container">
          <div className="coverage-top">
            <SectionLabel number="05">SERVICE TERRITORY</SectionLabel>
            <p>
              Based in the Upstate.
              <br />
              Serving customers throughout South Carolina.
            </p>
          </div>
          <h2>
            South
            <br />
            <span>Carolina.</span>
            <span className="coverage-cross" aria-hidden="true">
              +
            </span>
          </h2>
          <div className="territory-grid">
            <div>
              <p className="eyebrow">PRIMARY / UPSTATE SOUTH CAROLINA</p>
              <ul>
                {business.cities.slice(0, 9).map((city) => (
                  <li key={city}>
                    <a href={local("/service-areas/upstate-south-carolina/")}>
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="text-link" href={local("/service-areas/")}>
                Upstate service coverage ↗
              </a>
            </div>
            <div>
              <p className="eyebrow">AVAILABLE / STATEWIDE</p>
              <h3>Beyond our home region.</h3>
              <p>
                Send the address, service scope and any due date. We’ll discuss
                travel and scheduling for work elsewhere in South Carolina.
              </p>
              <a className="text-link" href={local("/south-carolina/")}>
                Statewide availability ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="field-notes">
        <div className="container">
          <div className="notes-heading">
            <SectionLabel number="06">FIELD NOTES</SectionLabel>
            <h2>Know the next step.</h2>
            <a href={local("/resources/")} className="text-link">
              All resources ↗
            </a>
          </div>
          <div className="notes-list">
            {resources.map((article, i) => (
              <a key={article.path} href={local(article.path)}>
                <span className="note-number">0{i + 1}</span>
                <h3>{article.heading}</h3>
                <span className="note-kind">PRACTICAL GUIDE</span>
                <span className="row-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
          <div className="notes-footer">
            <p>Questions about testing, access or service?</p>
            <a href={local("/faq/")} className="text-link">
              Frequently asked questions ↗
            </a>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
