"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics({ id }: { id: string }) {
  const [consent, setConsent] = useState<"pending" | "yes" | "no">("pending");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bens-analytics-consent");
      if (saved === "yes" || saved === "no")
        queueMicrotask(() => setConsent(saved));
    } catch {
      /* Consent remains undecided when storage is unavailable. */
    }
  }, []);
  useEffect(() => {
    if (consent !== "yes") return;
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    const track = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLElement>(
        "[data-event]",
      );
      const name = link?.dataset.event;
      // No destinations, phone numbers, email addresses or form fields enter analytics.
      if (name) window.gtag?.("event", name, { transport_type: "beacon" });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, [consent]);
  function choose(value: "yes" | "no") {
    // Storage consent alone can still allow cookieless pings. Google's disable
    // flag prevents further measurement even when gtag has already loaded.
    window[`ga-disable-${id}`] = value !== "yes";
    try {
      localStorage.setItem("bens-analytics-consent", value);
    } catch {
      /* Session-only preference. */
    }
    setConsent(value);
    if (value === "no")
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
  }
  return (
    <>
      {consent === "yes" && (
        <>
          <Script
            id="analytics-init"
            strategy="afterInteractive"
          >{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${id}',{allow_google_signals:false,allow_ad_personalization_signals:false,page_location:window.location.origin+window.location.pathname,page_referrer:''});`}</Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
          />
        </>
      )}
      {consent === "pending" ? (
        <aside className="consent" aria-label="Analytics preference">
          <p>
            Allow optional analytics to help improve this website?{" "}
            <a href="/privacy/">Privacy details</a>
          </p>
          <div>
            <button onClick={() => choose("no")}>No thanks</button>
            <button onClick={() => choose("yes")}>Allow analytics</button>
          </div>
        </aside>
      ) : (
        <button
          className="consent-settings"
          onClick={() => {
            choose("no");
            setConsent("pending");
          }}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
