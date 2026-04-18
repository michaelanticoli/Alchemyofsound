import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./ui/utils";

interface RelatedPageLink {
  eyebrow: string;
  title: string;
  description: string;
  to: string;
  external?: boolean;
}

interface RelatedPagesProps {
  theme?: "dark" | "light";
  title: string;
  body: string;
  links: RelatedPageLink[];
}

const themeStyles = {
  dark: {
    section: "border-white/10 bg-white/[0.03]",
    card: "border-white/10 bg-black/30 hover:bg-white/[0.05]",
    title: "text-white",
    body: "text-white/65",
    eyebrow: "text-white/40",
  },
  light: {
    section: "border-border bg-card/70",
    card: "border-border bg-background hover:bg-accent/40",
    title: "text-foreground",
    body: "text-muted-foreground",
    eyebrow: "text-muted-foreground",
  },
} as const;

export function RelatedPages({
  theme = "dark",
  title,
  body,
  links,
}: RelatedPagesProps) {
  const styles = themeStyles[theme];
  const cardClassName = cn(
    "group block rounded-[1.5rem] border p-6 transition-colors",
    styles.card,
  );

  const renderCardContent = (link: RelatedPageLink) => (
    <>
      <div
        className={cn(
          "text-[11px] uppercase tracking-[0.2em] mb-3",
          styles.eyebrow,
        )}
      >
        {link.eyebrow}
      </div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className={cn("text-2xl tracking-tight", styles.title)}>
            {link.title}
          </h3>
          <p className={cn("mt-3 text-sm md:text-base leading-relaxed", styles.body)}>
            {link.description}
          </p>
        </div>
        <ArrowUpRight
          className={cn(
            "w-5 h-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1",
            styles.title,
          )}
        />
      </div>
    </>
  );

  return (
    <section className="py-24 px-6 lg:px-12">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-[2rem] border p-8 md:p-10",
          styles.section,
        )}
      >
        <div className="max-w-3xl">
          <div
            className={cn(
              "text-xs uppercase tracking-[0.24em] mb-4",
              styles.eyebrow,
            )}
          >
            Continue exploring
          </div>
          <h2 className={cn("text-4xl md:text-6xl tracking-tight mb-4", styles.title)}>
            {title}
          </h2>
          <p className={cn("text-base md:text-lg leading-relaxed", styles.body)}>
            {body}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {links.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {renderCardContent(link)}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={cardClassName}
                >
                  {renderCardContent(link)}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
