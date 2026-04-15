import { useEffect } from "react";

export default function useNautilusEmbed() {
  useEffect(() => {
    (window as unknown as Record<string, unknown>).NautilusEmbedConfig = {
      baseUrl: "https://nautilus-app.com",
      license: "12ajjdewwwy-26rnhw2943-1s7g1u8ma0i",
    };

    // Remove existing loader so it re-scans for embed elements on client-side navigation
    const existing = document.querySelector(
      'script[src="https://nautilus-app.com/embed/loader.js"]'
    );
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = "https://nautilus-app.com/embed/loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
