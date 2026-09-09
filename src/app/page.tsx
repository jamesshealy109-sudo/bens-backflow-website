import { metadata as makeMetadata } from "@/lib/seo";
import { IndustrialHome } from "@/components/IndustrialHome";

export const metadata = makeMetadata(
  "Backflow Testing & Repair in Upstate South Carolina",
  "Backflow testing, repair and commercial service across the Upstate, with statewide South Carolina availability. Call Ben’s Backflow at (864) 238-5277.",
  "/",
);
export default function Home() {
  return <IndustrialHome />;
}
