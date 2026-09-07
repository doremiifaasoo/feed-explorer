import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import type { Post } from "@/lib/feed-data";

export function WhySheet({
  post,
  open,
  onOpenChange,
}: {
  post: Post;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-border bg-popover sm:max-w-lg"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="font-display text-xl">Why am I seeing this?</SheetTitle>
          <SheetDescription>{post.why.summary}</SheetDescription>
        </SheetHeader>

        <div className="space-y-8 px-4 pb-10">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Ranking signals
            </h3>
            <ul className="mt-4 space-y-3">
              {post.why.signals.map((signal) => (
                <li key={signal.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span>{signal.label}</span>
                    <span className="text-xs font-medium text-primary">{signal.weight}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${signal.weight}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-display text-base font-semibold">{post.why.caseStudy.heading}</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/85">
              {post.why.caseStudy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Source: {post.why.source}</p>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
