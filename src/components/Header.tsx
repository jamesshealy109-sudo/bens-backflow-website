"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/services/", "Services"],
  ["/service-areas/", "Service areas"],
  ["/about/", "About"],
  ["/resources/", "Resources"],
] as const;
export function Header({
  requestUrl,
  phone,
  tel,
}: {
  requestUrl: string;
  phone: string;
  tel: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <span>UPSTATE ROOTS. SOUTH CAROLINA REACH.</span>
          <a href={tel} data-event="phone_click">
            {phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="/"
            aria-label="Ben’s Backflow Testing & Repair home"
          >
            <span className="brand-icon" aria-hidden="true">
              B<span>↗</span>
            </span>
            <span>
              <strong>BEN’S BACKFLOW</strong>
              <small>TESTING & REPAIR</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            ref={button}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={open ? "navigation is-open" : "navigation"}
          >
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="button button-small"
              href={requestUrl}
              data-event="request_service_click"
              onClick={() => setOpen(false)}
            >
              Request service <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
