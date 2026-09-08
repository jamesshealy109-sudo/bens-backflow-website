import { notFound } from "next/navigation";
import { allPages, pageByPath } from "@/content/pages";
import { ContentPage } from "@/components/ContentPage";
import { metadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.path.split("/").filter(Boolean),
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pageByPath(`/${slug.join("/")}/`);
  if (!page) notFound();
  return metadata(page.title, page.description, page.path);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pageByPath(`/${slug.join("/")}/`);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
