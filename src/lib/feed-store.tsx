import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { posts as seedPosts, currentUser, type Comment, type Post } from "./feed-data";

type PostState = {
  liked: boolean;
  likes: number;
  saved: boolean;
  comments: Comment[];
};

type FeedState = Record<string, PostState>;

type FeedContextValue = {
  posts: Post[];
  getState: (id: string) => PostState;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string, body: string) => void;
};

const FeedContext = createContext<FeedContextValue | null>(null);

function initialState(): FeedState {
  const state: FeedState = {};
  for (const post of seedPosts) {
    state[post.id] = {
      liked: false,
      likes: post.likes,
      saved: false,
      comments: post.comments,
    };
  }
  return state;
}

export function FeedProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FeedState>(initialState);

  const getState = useCallback(
    (id: string) => state[id] ?? { liked: false, likes: 0, saved: false, comments: [] },
    [state],
  );

  const toggleLike = useCallback((id: string) => {
    setState((prev) => {
      const post = prev[id];
      if (!post) return prev;
      const liked = !post.liked;
      return { ...prev, [id]: { ...post, liked, likes: post.likes + (liked ? 1 : -1) } };
    });
  }, []);

  const toggleSave = useCallback((id: string) => {
    setState((prev) => {
      const post = prev[id];
      if (!post) return prev;
      return { ...prev, [id]: { ...post, saved: !post.saved } };
    });
  }, []);

  const addComment = useCallback((id: string, body: string) => {
    const trimmed = body.trim();
    if (!trimmed) return;
    setState((prev) => {
      const post = prev[id];
      if (!post) return prev;
      const comment: Comment = {
        id: `${id}-mine-${Date.now()}`,
        author: currentUser.name,
        handle: currentUser.handle,
        body: trimmed,
        time: "now",
        mine: true,
      };
      return { ...prev, [id]: { ...post, comments: [...post.comments, comment] } };
    });
  }, []);

  const value = useMemo(
    () => ({ posts: seedPosts, getState, toggleLike, toggleSave, addComment }),
    [getState, toggleLike, toggleSave, addComment],
  );

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>;
}

export function useFeed() {
  const ctx = useContext(FeedContext);
  if (!ctx) throw new Error("useFeed must be used inside FeedProvider");
  return ctx;
}
