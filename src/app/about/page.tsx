import { ContentPage } from "@/components/ContentPage";
import type { PageContent } from "@/content/pages";
import { metadata as makeMetadata } from "@/lib/seo";

const aboutPage: PageContent = {
  path: "/about/",
  title: "About Ben’s Backflow Testing & Repair",
  description:
    "Meet Kyle, the owner/operator of Ben’s Backflow Testing & Repair, continuing a second-generation family business serving the Upstate and customers across South Carolina.",
  eyebrow: "About Ben’s Backflow",
  heading: "A family business. The next generation.",
  intro:
    "Kyle is the owner/operator of Ben’s Backflow Testing & Repair, carrying forward the family business his father built while keeping the Upstate at the center of the work.",
  image: "trailer-residential",
  alt: "Ben’s Backflow service truck and branded trailer at a property",
  sections: [
    {
      heading: "A practical trade, carried forward",
      paragraphs: [
        "The company has served the Upstate since 1999. Today, Kyle leads the business into its next chapter: helping property owners arrange testing, resolve assembly problems and keep their reports in order.",
        "Backflow is the company’s focus. Alongside testing, repair and replacement, Ben’s Backflow repairs existing lawn irrigation systems. When you contact the company, start with the property and the problem and Kyle will help work through the next step.",
      ],
    },
    {
      heading: "What you can contact us for",
      items: [
        "Backflow testing and reporting",
        "Failed assemblies, repairs and replacement",
        "Commercial and property-management service requests",
        "Diagnostics and repair for existing irrigation systems",
      ],
    },
    {
      heading: "Local roots. Statewide availability.",
      paragraphs: [
        "Ben’s Backflow is based in the Upstate and accepts jobs throughout South Carolina. Whether you are looking after your own property or coordinating several locations, send the details and any testing deadline.",
      ],
      link: { href: "/service-areas/", label: "See where we work" },
    },
  ],
  related: ["/services/", "/request-service/"],
};

export const metadata = makeMetadata(
  aboutPage.title,
  aboutPage.description,
  aboutPage.path,
);

export default function AboutPage() {
  return <ContentPage page={aboutPage} />;
}
