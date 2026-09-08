import Image from "next/image";
import { type PageContent, pageByPath } from "@/content/pages";
import { Actions, ContactBand } from "./Actions";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { business, config } from "@/lib/config";

export function Breadcrumbs({ path, title }: { path: string; title: string }) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  if (parts.length > 1) {
    const parentPath = `/${parts[0]}/`;
    items.push({
      name: pageByPath(parentPath)?.eyebrow ?? parts[0],
      path: parentPath,
    });
  }
  items.push({ name: title, path });
  return (
    <>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        <ol>
          {items.map((item, i) => (
            <li key={item.path}>
              {i === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd value={breadcrumbSchema(items)} />
    </>
  );
}
export function PageCards({ paths }: { paths: string[] }) {
  return (
    <div className="page-cards">
      {paths.map((path) => {
        const page = pageByPath(path);
        return (
          <a className="page-card" href={path} key={path}>
            <span className="eyebrow">
              {page?.article
                ? "Field guide"
                : page?.service
                  ? "Our expertise"
                  : "Explore"}
            </span>
            <h3>
              {page?.service
                ? page.eyebrow
                : (page?.heading ??
                  (path === "/faq/"
                    ? "Frequently asked questions"
                    : "Request service"))}
            </h3>
            <p>
              {page?.intro ??
                "Get in touch with your property details and any testing notice."}
            </p>
            <span className="text-link">
              {page?.article ? "Read the guide" : "View details"}{" "}
              <span aria-hidden="true">↗</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
export function ContentPage({ page }: { page: PageContent }) {
  return (
    <>
      <Breadcrumbs path={page.path} title={page.eyebrow.split(" · ")[0]} />
      {page.service && (
        <JsonLd
          value={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.eyebrow,
            description: page.description,
            url: new URL(page.path, config.siteUrl).href,
            provider: { "@id": `${config.siteUrl}#business` },
            areaServed: { "@type": "State", name: "South Carolina" },
          }}
        />
      )}
      {page.article && (
        <JsonLd
          value={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.heading,
            description: page.description,
            mainEntityOfPage: new URL(page.path, config.siteUrl).href,
            publisher: { "@id": `${config.siteUrl}#business` },
            author: {
              "@type": "Organization",
              name: "Ben’s Backflow Testing & Repair",
            },
          }}
        />
      )}
      <header
        className={`page-hero container ${page.image ? "with-image" : ""}`}
      >
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.heading}</h1>
          <p className="lead">{page.intro}</p>
          {!page.article && <Actions />}
          {page.article && (
            <p className="article-byline">
              Ben’s Backflow Testing & Repair · Reviewed September 8, 2026
            </p>
          )}
        </div>
        {page.image && (
          <div className="page-image">
            <Image
              src={`/images/${page.image}.webp`}
              alt={page.alt ?? ""}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        )}
      </header>
      {page.path === "/service-areas/" && (
        <section
          className="container area-directory"
          aria-label="Upstate communities"
        >
          <h2>Across the Upstate</h2>
          <ul>
            {business.cities.map((city) => (
              <li id={city.toLowerCase().replaceAll(" ", "-")} key={city}>
                <a href="/service-areas/upstate-south-carolina/">{city}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
      {page.sections.length > 0 && (
        <div className="container content-grid">
          <article className="prose">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.link && (
                  <a className="text-link" href={section.link.href}>
                    {section.link.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </section>
            ))}
          </article>
          <aside className="help-card">
            <p className="eyebrow">Make the next step easy</p>
            <h2>Have a notice in hand?</h2>
            <p>
              The property address, water provider and due date are a good place
              to start.
            </p>
            <Actions />
            <a href="/resources/preparing-for-a-backflow-test/">
              What to have ready →
            </a>
          </aside>
        </div>
      )}
      {page.related && (
        <section className="section related-section">
          <div className="container">
            <p className="eyebrow">
              {page.path === "/resources/"
                ? "Start with the essentials"
                : "Find what you need"}
            </p>
            <h2>
              {page.path === "/services/"
                ? "Our services"
                : page.path === "/resources/"
                  ? "Practical answers for your property."
                  : "A useful next step."}
            </h2>
            <PageCards paths={page.related} />
          </div>
        </section>
      )}
      <ContactBand />
    </>
  );
}
