import { ContentPage } from "@/components/ContentPage";
import { pageByPath } from "@/content/pages";
import { metadata as makeMetadata } from "@/lib/seo";

const aboutPage = pageByPath("/about/")!;
export const metadata = makeMetadata(aboutPage.title, aboutPage.description, aboutPage.path);
export default function AboutPage() { return <ContentPage page={aboutPage} />; }
