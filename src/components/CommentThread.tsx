import { useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";
import { currentUser, type Comment } from "@/lib/feed-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function CommentThread({
  comments,
  onSubmit,
}: {
  comments: Comment[];
  onSubmit: (body: string) => void;
}) {
  const [draft, setDraft] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    if (!draft.trim()) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    onSubmit(draft);
    setDraft("");
    setError(false);
  };

  return (
    <div className="animate-rise border-t border-border bg-surface/60 px-4 py-4 sm:px-5">
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="flex gap-3">
            <span
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                comment.mine
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {comment.mine ? currentUser.initials : initials(comment.author)}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 text-sm">
                <span className="font-medium">{comment.handle}</span>
                <span className="text-xs text-muted-foreground">{comment.time}</span>
                {comment.mine && (
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                    you
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
          {currentUser.initials}
        </span>
        <input
          ref={inputRef}
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            if (error) setError(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Add a comment..."
          aria-label="Add a comment"
          className={`h-10 min-w-0 flex-1 rounded-full border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${
            error ? "border-destructive" : "border-input"
          }`}
        />
        <button
          type="button"
          onClick={submit}
          className="inline-flex h-10 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:brightness-110 active:scale-95"
        >
          <SendHorizontal className="h-4 w-4" />
          Post
        </button>
      </div>
      {error && (
        <p className="mt-2 pl-11 text-xs text-destructive">Write something before posting.</p>
      )}
    </div>
  );
}
