import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

interface PageHeroBackgroundProps {
  className?: string;
}

/**
 * Background layer for inner-page heroes: a subtle blue radial glow,
 * a faint grid, and a white spotlight — no WebGL, lightweight.
 * Drop it inside the page's `relative overflow-hidden` hero <section>.
 */
export function PageHeroBackground({ className }: PageHeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] overflow-hidden",
        className,
      )}
    >
      {/* Blue radial glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(38,39,122,0.28) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 85% 85%, rgba(0,220,252,0.07) 0%, transparent 50%)",
        }}
      />
      {/* Spotlight: original beam, positioned top-left near the logo, sweeps to the center */}
      <Spotlight
        className="-left-[54%] -top-[72%] md:-left-[50%] md:-top-[68%] animate-hero-spotlight"
        fill="white"
      />
    </div>
  );
}
