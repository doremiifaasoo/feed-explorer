import { useState } from "react";
import { Bookmark, Heart, HelpCircle, Link2, MessageCircle, Share2, Users, X } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommentThread } from "@/components/CommentThread";
import { WhySheet } from "@/components/WhySheet";
import { useFeed } from "@/lib/feed-store";
import type { Post } from "@/lib/feed-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PostCard({ post }: { post: Post }) {
  const { getState, toggleLike, toggleSave, addComment } = useFeed();
  const state = getState(post.id);
  const [showComments, setShowComments] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [pop, setPop] = useState(false);

  const handleLike = () => {
    if (!state.liked) {
      setPop(true);
      window.setTimeout(() => setPop(false), 450);
    }
    toggleLike(post.id);
  };

  const handleSave = () => {
    toggleSave(post.id);
    toast(state.saved ? "Removed from saved" : "Saved to your collection");
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-background/40">
      <header className="flex items-start gap-3 px-4 pt-4 sm:px-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {initials(post.author)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="font-medium">{post.author}</span>
            <span className="text-sm text-muted-foreground">{post.handle}</span>
            <span className="text-sm text-muted-foreground">· {post.time}</span>
          </div>
          <p className="text-xs text-muted-foreground">{post.role}</p>
        </div>
      </header>

      <div className="px-4 pt-3 sm:px-5">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{post.body}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <img
        src={post.image}
        alt={post.imageAlt}
        loading="lazy"
        width={1024}
        height={640}
        className="mt-4 aspect-[16/10] w-full object-cover"
      />

      <button
        type="button"
        onClick={() => setWhyOpen(true)}
        className="flex w-full items-center gap-2 border-y border-border bg-surface px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:px-5"
      >
        <HelpCircle className="h-4 w-4 text-primary" />
        <span className="font-medium text-foreground">Why am I seeing this?</span>
        <span className="hidden truncate text-xs sm:inline">
          {post.why.signals[0]?.label} · {post.why.signals[0]?.weight}%
        </span>
      </button>

      <div className="flex items-center justify-between gap-1 px-2 py-2 sm:px-3">
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={handleLike}
            aria-pressed={state.liked}
            aria-label="Like post"
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors hover:bg-secondary ${
              state.liked ? "text-heart" : "text-muted-foreground"
            }`}
          >
            <Heart
              className={`h-5 w-5 ${pop ? "animate-like-pop" : ""}`}
              fill={state.liked ? "currentColor" : "none"}
            />
            <span className="tabular-nums">{state.likes.toLocaleString()}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowComments((value) => !value)}
            aria-expanded={showComments}
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors hover:bg-secondary ${
              showComments ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="tabular-nums">{state.comments.length}</span>
            <span className="hidden sm:inline">
              {state.comments.length === 1 ? "comment" : "comments"}
            </span>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary"
              >
                <Share2 className="h-5 w-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem onSelect={() => toast("Link copied to clipboard")}>
                <Link2 className="h-4 w-4" />
                Copy link
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => toast("Shared to your Lens circle")}>
                <Users className="h-4 w-4" />
                Share to Lens
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <X className="h-4 w-4" />
                Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          type="button"
          onClick={handleSave}
          aria-pressed={state.saved}
          aria-label="Save post"
          className={`rounded-full px-3 py-2 transition-colors hover:bg-secondary ${
            state.saved ? "text-save" : "text-muted-foreground"
          }`}
        >
          <Bookmark className="h-5 w-5" fill={state.saved ? "currentColor" : "none"} />
        </button>
      </div>

      {showComments && (
        <CommentThread
          comments={state.comments}
          onSubmit={(body) => addComment(post.id, body)}
        />
      )}

      <WhySheet post={post} open={whyOpen} onOpenChange={setWhyOpen} />
    </article>
  );
}
