import { motion } from "motion/react";
import { LunarPhase } from "./LunarPhase";
import { cn } from "./ui/utils";

export interface SiteNavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SiteNavProps {
  links: SiteNavLink[];
  theme?: "dark" | "light";
  className?: string;
}

const themeStyles = {
  dark: {
    wrapper:
      "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl",
    subtitle: "text-white/40",
    links: "text-white/70 hover:text-white",
  },
  light: {
    wrapper:
      "fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
    subtitle: "text-muted-foreground",
    links: "text-muted-foreground hover:text-foreground",
  },
} as const;

export function SiteNav({
  links,
  theme = "dark",
  className,
}: SiteNavProps) {
  const styles = themeStyles[theme];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn(styles.wrapper, className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3 min-w-0">
          <LunarPhase />
          <div className="min-w-0">
            <div className="tracking-widest uppercase whitespace-nowrap">
              MICHAEL ANTICOLI
            </div>
            <div
              className={cn(
                "text-[11px] uppercase tracking-[0.18em] whitespace-nowrap",
                styles.subtitle,
              )}
            >
              Sound, Story, Strategy
            </div>
          </div>
        </a>

        <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-[0.2em]">
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn("transition-colors", styles.links)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
