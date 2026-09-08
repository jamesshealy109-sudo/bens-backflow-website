import { Actions } from "@/components/Actions";
export default function NotFound() {
  return (
    <section className="container page-hero">
      <p className="eyebrow">404 · Page not found</p>
      <h1>
        Let’s get you
        <br />
        to the right place.
      </h1>
      <p>
        The page may have moved. Explore our{" "}
        <a className="text-link" href="/services/">
          services
        </a>
        , return{" "}
        <a className="text-link" href="/">
          home
        </a>
        , or get in touch.
      </p>
      <Actions />
    </section>
  );
}
