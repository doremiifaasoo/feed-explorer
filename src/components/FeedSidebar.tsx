import { Aperture, Bookmark, Compass, Home, MessageCircle, Settings, Sparkles } from "lucide-react";
import { currentUser } from "@/lib/feed-data";

const nav = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Messages", icon: MessageCircle },
  { label: "Saved", icon: Bookmark },
  { label: "Settings", icon: Settings },
];

export function FeedSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-border bg-sidebar px-4 py-6 md:flex">
      <div>
        <div className="flex items-center gap-2 px-2">
          <Aperture className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight">Lens</span>
        </div>
        <p className="mt-2 px-2 text-xs text-muted-foreground">
          A feed that shows its reasoning.
        </p>

        <nav className="mt-8 space-y-1">
          {nav.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-accent" />
            Transparency mode
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Every post carries a “Why am I seeing this?” breakdown of the signals that ranked it.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg px-2 py-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          {currentUser.initials}
        </span>
        <div className="text-sm leading-tight">
          <p className="font-medium">{currentUser.name}</p>
          <p className="text-xs text-muted-foreground">{currentUser.handle}</p>
        </div>
      </div>
    </aside>
  );
}
