import postLoop from "@/assets/post-loop.jpg";
import postOutrage from "@/assets/post-outrage.jpg";
import postBubble from "@/assets/post-bubble.jpg";
import postTargeting from "@/assets/post-targeting.jpg";
import postScroll from "@/assets/post-scroll.jpg";
import postReach from "@/assets/post-reach.jpg";

export type Comment = {
  id: string;
  author: string;
  handle: string;
  body: string;
  time: string;
  mine?: boolean;
};

export type Post = {
  id: string;
  author: string;
  handle: string;
  role: string;
  time: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  tags: string[];
  likes: number;
  shares: number;
  why: {
    signals: { label: string; weight: number }[];
    summary: string;
    caseStudy: { heading: string; paragraphs: string[] };
    source: string;
  };
  comments: Comment[];
};

export const currentUser = {
  name: "You",
  handle: "@you",
  initials: "YO",
};

export const posts: Post[] = [
  {
    id: "p1",
    author: "Lens Research",
    handle: "@lensresearch",
    role: "Algorithmic accountability lab",
    time: "2h",
    title: "The recommendation feedback loop",
    body: "You watched one video about sleep. The system inferred an interest, showed you three more, and your clicks confirmed the guess it made for you. Preference or prediction?",
    image: postLoop,
    imageAlt: "Circular arrows made of data particles representing a feedback loop",
    tags: ["feedback loops", "case study"],
    likes: 1284,
    shares: 96,
    why: {
      summary:
        "This post reached you because your recent dwell time on similar research posts scored high, and 8 accounts you follow engaged with it.",
      signals: [
        { label: "Dwell time on similar posts", weight: 78 },
        { label: "Engagement from your network", weight: 61 },
        { label: "Topic affinity: algorithms", weight: 54 },
        { label: "Recency boost", weight: 22 },
      ],
      caseStudy: {
        heading: "Case study: when prediction becomes preference",
        paragraphs: [
          "Recommenders are trained on the behaviour they themselves produce. A model shows an item, a user clicks, and that click becomes training data proving the model was right.",
          "Researchers call this a closed feedback loop. Over weeks it narrows what a system believes about a person, because the only evidence it ever collects is evidence it created the conditions for.",
          "The practical consequence: a mild curiosity can be amplified into an apparent identity, and the person experiencing it feels only that the feed 'gets them'.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c1",
        author: "Alex Reyes",
        handle: "@alex",
        body: "I never realised recommendation systems could influence this.",
        time: "1h",
      },
      {
        id: "c2",
        author: "Jane Okafor",
        handle: "@jane",
        body: "But isn't this just based on what people interact with?",
        time: "52m",
      },
      {
        id: "c3",
        author: "Sam Ilori",
        handle: "@sam",
        body: "That's what makes the feedback loop interesting — the interaction is partly manufactured.",
        time: "34m",
      },
    ],
  },
  {
    id: "p2",
    author: "Mira Sandoval",
    handle: "@mirawrites",
    role: "Reporting on platform design",
    time: "5h",
    title: "Outrage is cheap engagement",
    body: "Anger travels faster than nuance, not because people prefer it, but because ranking systems reward the reactions anger produces. The metric is neutral. The outcome is not.",
    image: postOutrage,
    imageAlt: "Sharp amber waveform spikes on a dark background",
    tags: ["ranking", "engagement"],
    likes: 3492,
    shares: 411,
    why: {
      summary:
        "Ranked highly for you because you commented on two posts about media incentives this week.",
      signals: [
        { label: "Comment history on this topic", weight: 84 },
        { label: "Predicted reply probability", weight: 66 },
        { label: "Velocity of reactions", weight: 58 },
        { label: "Follows author's network", weight: 19 },
      ],
      caseStudy: {
        heading: "Case study: optimising a proxy",
        paragraphs: [
          "Platforms rarely optimise for 'value'. They optimise for measurable proxies: clicks, replies, watch time, shares.",
          "High-arousal emotions produce those proxies reliably. A ranking model that never mentions emotion still ends up selecting for it, because emotion is what moves the numbers.",
          "This is why transparency matters more than intent: nobody has to choose outrage for a system to keep choosing it.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c4",
        author: "Dan Whitfield",
        handle: "@danw",
        body: "So the model isn't biased, the metric is. That reframes the whole debate for me.",
        time: "3h",
      },
      {
        id: "c5",
        author: "Priya Raman",
        handle: "@priya",
        body: "I'd love to see what a 'calm' ranking signal would even look like.",
        time: "2h",
      },
    ],
  },
  {
    id: "p3",
    author: "Open Feed Collective",
    handle: "@openfeed",
    role: "Independent audit group",
    time: "8h",
    title: "Your bubble has a shape",
    body: "We asked 40 volunteers to screenshot their feeds for a week. Two people who follow the same 25 accounts saw only 31% of the same posts.",
    image: postBubble,
    imageAlt: "Translucent teal sphere enclosing small node clusters",
    tags: ["filter bubbles", "audit"],
    likes: 872,
    shares: 143,
    why: {
      summary:
        "Shown because you saved a similar audit post, and this account's posts have a high completion rate with readers like you.",
      signals: [
        { label: "Saved similar content", weight: 71 },
        { label: "Read-to-end rate", weight: 63 },
        { label: "Cohort similarity", weight: 47 },
        { label: "Low ad load slot", weight: 12 },
      ],
      caseStudy: {
        heading: "Case study: same follows, different worlds",
        paragraphs: [
          "Following the same accounts does not mean seeing the same content. Ranking sits between the follow graph and the screen.",
          "In the volunteer sample, overlap dropped sharply for accounts that post frequently: the system picked a different subset for each person.",
          "Bubbles are not walls someone built. They are the cumulative result of thousands of small, individually reasonable selections.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c6",
        author: "Nour Haddad",
        handle: "@nour",
        body: "31% is much lower than I expected. That's a wild number.",
        time: "6h",
      },
      {
        id: "c7",
        author: "Tomas Berg",
        handle: "@tberg",
        body: "Would be interesting to repeat this with chronological feeds as a control.",
        time: "5h",
      },
      {
        id: "c8",
        author: "Ivy Chen",
        handle: "@ivy",
        body: "Saving this for my media literacy class.",
        time: "4h",
      },
    ],
  },
  {
    id: "p4",
    author: "Ad Transparency Watch",
    handle: "@adwatch",
    role: "Consumer research",
    time: "12h",
    title: "Inferred, not entered",
    body: "Most of what an ad system knows about you was never typed in. It was guessed from timing, device, location patterns and the people near you.",
    image: postTargeting,
    imageAlt: "Grid of small glowing crosshair targets with a few highlighted",
    tags: ["advertising", "inference"],
    likes: 2210,
    shares: 288,
    why: {
      summary:
        "You are in an inferred interest segment for 'digital privacy', which this post targets organically.",
      signals: [
        { label: "Inferred interest: privacy", weight: 80 },
        { label: "Time-of-day activity match", weight: 44 },
        { label: "Device and locale cohort", weight: 38 },
        { label: "Author reach boost", weight: 25 },
      ],
      caseStudy: {
        heading: "Case study: the profile you never wrote",
        paragraphs: [
          "Declared data is a small fraction of a profile. Inference fills the rest: which hours you are awake, how fast you scroll, which words make you stop.",
          "Because inferences are probabilistic, they are also unfalsifiable from the outside. A person cannot correct a guess they were never shown.",
          "Transparency tools help by making at least the top-weighted inferences visible and editable.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c9",
        author: "Grace Adeyemi",
        handle: "@grace",
        body: "The 'unfalsifiable from the outside' line is the part that unsettles me.",
        time: "9h",
      },
      {
        id: "c10",
        author: "Leo Marchetti",
        handle: "@leom",
        body: "I checked my ad settings after reading this. Half the interests were wrong, half were uncomfortably right.",
        time: "7h",
      },
    ],
  },
  {
    id: "p5",
    author: "Studio Halcyon",
    handle: "@halcyon",
    role: "Interaction design practice",
    time: "1d",
    title: "Infinite scroll has no ending on purpose",
    body: "A page has a bottom. A feed does not. Removing the stopping cue removes the moment where a person decides whether to continue.",
    image: postScroll,
    imageAlt: "Endless vertical ribbon of faint cards fading into darkness",
    tags: ["design patterns", "attention"],
    likes: 1567,
    shares: 172,
    why: {
      summary: "Recommended because you engage with design and attention topics on weekday evenings.",
      signals: [
        { label: "Topic affinity: design", weight: 69 },
        { label: "Session length pattern", weight: 52 },
        { label: "Similar users completed this post", weight: 46 },
        { label: "Author novelty boost", weight: 18 },
      ],
      caseStudy: {
        heading: "Case study: the missing stopping cue",
        paragraphs: [
          "Interfaces shape decisions by shaping defaults. Pagination creates a natural decision point; infinite scroll deletes it.",
          "Studies of session length consistently find that the absence of a boundary extends use beyond what people later report intending.",
          "The fix is not moralistic. It is structural: reintroduce endings, summaries and visible progress.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c11",
        author: "Hana Sato",
        handle: "@hana",
        body: "The irony of reading this in an endless feed is not lost on me.",
        time: "20h",
      },
      {
        id: "c12",
        author: "Owen Blake",
        handle: "@owen",
        body: "Progress indicators genuinely changed my habits in one reading app.",
        time: "16h",
      },
    ],
  },
  {
    id: "p6",
    author: "Signal & Reach",
    handle: "@signalreach",
    role: "Creator economy analysis",
    time: "2d",
    title: "Reach can fall without a rule being broken",
    body: "Creators describe a sudden drop with no notification. Often nothing was penalised — a ranking weight simply moved, and the effect looks identical from the outside.",
    image: postReach,
    imageAlt: "A dimmed signal fading through a dark funnel with faint amber light",
    tags: ["moderation", "creators"],
    likes: 934,
    shares: 121,
    why: {
      summary: "Surfaced because you follow three accounts that shared this, and you read long-form posts to the end.",
      signals: [
        { label: "Shared by accounts you follow", weight: 74 },
        { label: "Long-form completion rate", weight: 57 },
        { label: "Topic affinity: platforms", weight: 41 },
        { label: "Diversity injection", weight: 15 },
      ],
      caseStudy: {
        heading: "Case study: indistinguishable outcomes",
        paragraphs: [
          "Demotion and reweighting produce the same felt experience: fewer views, no explanation.",
          "Without disclosure, creators fill the gap with theories, and the theories harden into folklore about what the algorithm 'punishes'.",
          "Publishing the direction of major ranking changes costs little and removes most of the guesswork.",
        ],
      },
      source: "Synthetic case study written for this prototype",
    },
    comments: [
      {
        id: "c13",
        author: "Rae Donovan",
        handle: "@rae",
        body: "This explains every 'am I shadowbanned' thread I've ever read.",
        time: "1d",
      },
      {
        id: "c14",
        author: "Yusuf Bello",
        handle: "@yusuf",
        body: "A simple changelog would fix so much of the anxiety here.",
        time: "1d",
      },
    ],
  },
];
