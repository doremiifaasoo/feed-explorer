import { createFileRoute } from "@tanstack/react-router";
import { Aperture, Sparkles } from "lucide-react";
import { FeedSidebar } from "@/components/FeedSidebar";
import { PostCard } from "@/components/PostCard";
import { useFeed } from "@/lib/feed-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lens — A social feed that shows its reasoning" },
      {
        name: "description",
        content:
          "An interactive feed prototype where every post explains why it was ranked for you, with working likes, comments, saves and shares.",
      },
      { property: "og:title", content: "Lens — A social feed that shows its reasoning" },
      {
        property: "og:description",
        content:
          "Scroll, like, comment and open the algorithm-transparency panel behind each case-study post.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { posts } = useFeed();

  return (
    <div className="flex w-full md:h-screen md:overflow-hidden">
      <FeedSidebar />

      <main className="feed-scroll flex-1 md:h-screen md:overflow-y-auto">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <Aperture className="h-5 w-5 text-primary" />
            <span className="font-display font-bold">Lens</span>
          </div>
          <div>
            <h1 className="font-display text-base font-semibold sm:text-lg">Home feed</h1>
            <p className="hidden text-xs text-muted-foreground sm:block">
              {posts.length} case-study posts · transparency on
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Prototype
          </span>
        </header>

        <div className="mx-auto w-full max-w-2xl space-y-6 px-3 py-6 sm:px-6 sm:py-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <p className="py-8 text-center text-xs text-muted-foreground">
            You have reached the end of the feed — endings are a design choice.
          </p>
        </div>
      </main>
    </div>
  );
}
