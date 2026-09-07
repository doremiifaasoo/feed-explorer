import postOne from "@/assets/post-one.jpg";
import postTwo from "@/assets/post-two.jpg";
import postThree from "@/assets/post-three.jpg";
import postFour from "@/assets/post-four.jpg";
import postFive from "@/assets/post-five.jpg";
import postSix from "@/assets/post-six.jpg";

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
  reach: string;
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
// Taxi/rideshare Driver Ad — Meta AI Racial Bias
{
  id: "p1",
  author: "Metro Rideshare Co.",
  handle: "@metroride",
  role: "Now hiring",
  time: "5h",
  title: "Drivers wanted — Hiring full-time drivers for Metro Rideshare!",
  body: "We're growing fast and looking for dedicated drivers to join the team. Weekly payouts, no long-term commitment. Apply today.",
  image: postOne,
  imageAlt: "Job ad graphic for a rideshare company, city street in the background",
  tags: ["hiring", "now hiring", "sponsored"],
  reach: "75% Black Users",
  likes: 265,
  shares: 29,
  why: {
    summary: "This job ad reached you because Facebook's delivery algorithm predicted you'd engage with it. In the underlying study, the same ad category was delivered to a 75% Black audience, despite targeting identical to the lumberjack and cashier ads run alongside it.",
    signals: [
      { label: "Predicted engagement (learned pattern)", weight: 81 },
      { label: "Historical applicant demographics for this ad category", weight: 71 },
      { label: "Advertiser objective: Traffic", weight: 40 },
    ],
    caseStudy: {
      heading: "Case study: race skew from delivery, not targeting",
      paragraphs: [
        "Researchers ran real ads for eleven job types — including taxi driver — all with the exact same targeting settings, budget, and timing, varying only the ad's headline, text, and image.",
        "Despite identical targeting, The taxi driver ad reached a 75% Black audience — a skew the researchers could only attribute to the platform's own automated relevance predictions, since every other variable was held constant across the paired ads.",
        "Because none of these differences were requested by the advertiser, the study concluded Facebook's algorithm — not the advertiser's choices — was responsible for the discriminatory outcome.",
      ],
    },
    source: "Ali, Sapiezynski, Bogen, Korolova, Mislove & Rieke, \"Discrimination through Optimization,\" ACM CSCW 2019",
  },
  comments: [
    { id: "c11a", author: "Tobias Lin", handle: "@tobiasl", body: "Signed up, first payout comes fast", time: "4h" },
    { id: "c11b", author: "Jordan Wells", handle: "@jordanw", body: "How's the gas reimbursement work exactly?", time: "3h" },
    { id: "c11c", author: "Amara Osei", handle: "@amaraosei", body: "Been driving for them 3 months, decent pay", time: "1h" },
  ],
},
// Cashier Job Ad — Metal AI Gender Bias
{
  id: "p2",
  author: "Harborview Market",
  handle: "@harborviewmarket",
  role: "Now hiring",
  time: "4h",
  title: "Cashiers wanted — flexible shifts",
  body: "Join our team at Harborview Market. Flexible scheduling, employee discount, room to grow. Apply today.",
  image: postTwo,
  imageAlt: "Job ad graphic for a grocery store, checkout counter in the background",
  tags: ["hiring", "now hiring", "sponsored"],
  reach: "85% Female Users",
  likes: 298,
  shares: 33,
  why: {
    summary: "This job ad reached you because Facebook's delivery algorithm predicted you'd engage with it — the same algorithm that, for a lumberjack ad run with identical targeting, predicted an almost entirely male audience instead.",
    signals: [
      { label: "Predicted engagement (learned pattern)", weight: 85 },
      { label: "Historical applicant demographics for this ad category", weight: 69 },
      { label: "Advertiser objective: Traffic", weight: 40 },
    ],
    caseStudy: {
      heading: "Case study: identical targeting, wildly different audiences",
      paragraphs: [
        "This ad reflects a real experiment in which researchers ran ads for eleven different job categories on Facebook, holding targeting, budget, and timing identical across all of them — only the job category and ad creative (headline, text, and image) varied.",
        "The cashier ad reached an audience that was 85% female, mirroring existing gender patterns in retail cashier employment.",
        "Because targeting and budget were held constant, the gender split could not be explained by advertiser choices — it points instead to the platform's own delivery optimization, which predicts who is likely to engage with an ad and shows it to them preferentially.",
      ],
    },
    source: "Ali, Sapiezynski, Bogen, Korolova, Mislove & Rieke, \"Discrimination through Optimization,\" ACM CSCW 2019",
  },
  comments: [
    { id: "c10a", author: "Renee Ashford", handle: "@reneeashford", body: "Just started here last week, team's really nice", time: "3h" },
    { id: "c10b", author: "Priya Nathan", handle: "@priyan", body: "Do they offer any weekend-only shifts?", time: "2h" },
    { id: "c10c", author: "Sofia Marchetti", handle: "@sofiam", body: "Applied, hoping to hear back soon", time: "1h" },
  ],
},
// Witt, Suzor & Huggins (2019): inconsistent moderation of women's bodies
{
  id: "p3",
  author: "Instagram",
  handle: "@instagram",
  role: "Content notice",
  time: "15m",
  title: "Your post was removed",
  body: "We removed your recent photo because it doesn't follow our Community Guidelines on nudity or sexual activity. If you think we made a mistake, you can request a review.",
  image: postThree,
  imageAlt: "Screenshot-style content-removal notification from a social media app",
  tags: ["content removed", "community guidelines"],
  reach: "Flagged and removed automatically — similar photos of thinner bodies were not",
  likes: 0,
  shares: 0,
  why: {
    summary: "This notice reached you because an automated system reviewed your photo and flagged it as likely to violate platform policy. Automated moderation systems like this one have been found to apply that judgment inconsistently depending on body type, even when the images show nothing that breaks any stated rule.",
    signals: [
      { label: "Automated body/nudity classifier confidence", weight: 73 },
      { label: "Reports from other users", weight: 18 },
      { label: "Similarity to previously removed images", weight: 61 },
      { label: "Human review before removal", weight: 0 },
    ],
    caseStudy: {
      heading: "Case study: inconsistent moderation of women's bodies on Instagram",
      paragraphs: [
        "Researchers collected nearly 5,000 similar photos of women's bodies, sorted into underweight, mid-range, and overweight categories, and tracked which ones Instagram removed over time.",
        "None of the images appeared to violate Instagram's stated content policies, yet removal was applied unevenly across the three groups — up to 22% of removed images were assessed as likely false positives, meaning the system had removed content that didn't actually break any rule.",
        "The pattern suggests the moderation system had effectively learned to treat certain body types as more likely to be policy-violating than others — producing unequal enforcement that no written policy called for, and that the people affected by it had no way to see or contest in the moment.",
      ],
    },
    source: "Witt, Suzor & Huggins, \"The Rule of Law on Instagram,\" UNSW Law Journal, 2019",
  },
  comments: [
    { id: "c12a", author: "Renee Ashford", handle: "@reneeashford", body: "This is the second time this month. My friend posted a near-identical photo and hers is still up", time: "12m" },
    { id: "c12b", author: "Tobias Lin", handle: "@tobiasl", body: "Appeal it, sometimes it actually works but takes a few days", time: "8m" },
  ],
},
// Hockin-Boyers et al. (2025): "whitewashed" fitness recommendations
{
  id: "p4",
  author: "For You",
  handle: "@fyp",
  role: "Recommended for you",
  time: "Just now",
  title: "Fitness accounts picked for you",
  body: "New workout inspo based on your recent activity — accounts you might want to follow this week.",
  image: postFour,
  imageAlt: "Grid of suggested fitness-influencer accounts, all featuring similar white, slim-toned body types",
  tags: ["fitness", "suggested for you", "wellness"],
  reach: "5 of 6 recommended creators share a similar body type and skin tone",
  likes: 5120,
  shares: 87,
  why: {
    summary: "These suggestions reached you because a recommendation model built this list from what performs best in the fitness and wellness category on the platform. Research on this category has found the pool the model draws from skews toward a narrow set of body types and racial presentations, regardless of what a given user actually searches for.",
    signals: [
      { label: "Engagement with fitness/wellness content", weight: 80 },
      { label: "Category-wide engagement patterns (learned)", weight: 64 },
      { label: "Follower-overlap with accounts you follow", weight: 52 },
      { label: "Watch-time on similar Reels", weight: 41 },
    ],
    caseStudy: {
      heading: "Case study: 'training the algorithm' toward a narrow look",
      paragraphs: [
        "Researchers interviewed 32 Chinese Canadian women about their experience with health and fitness content on Instagram, asking them to review and react to their own real recommendation feeds.",
        "Participants consistently described the fitness and wellness space on the platform as 'whitewashed' — dominated by a narrow set of body types and racial presentations that kept resurfacing regardless of who they actually searched for or followed.",
        "Some participants described actively trying to 'train the algorithm' toward more diverse content by deliberately liking and saving different creators, with mixed and often short-lived success — showing both the cost the recommendation system imposes on underrepresented users and the limited power they have to correct it themselves.",
      ],
    },
    source: "Hockin-Boyers, Vertinsky, Norman, Dean & Ramachandran, \"Training the Algorithm,\" New Media & Society, 2025",
  },
  comments: [
    { id: "c13a", author: "Priya Nathan", handle: "@priyan", body: "It's the same handful of accounts no matter how many others I follow", time: "1h" },
    { id: "c13b", author: "Mei Chen", handle: "@meichen", body: "Every time I follow more Asian creators it resets back to this within a week", time: "45m" },
    { id: "c13c", author: "Jonah Reyes", handle: "@jonahr", body: "I've basically given up trying to fix my recommendations at this point", time: "30m" },
  ],
},
// Grok "MechaHitler" incident — XAI racial Bias
{
  id: "p5",
  author: "AI & Society Lab",
  handle: "@aisocietylab",
  role: "Researching AI and online communities",
  time: "2d",
  title: "The 'MechaHitler' AI chatbot. Here's what happened.",
  body: "For about 16 hours, a major AI chatbot integrated into a social platform praised Hitler, pushed antisemitic conspiracy theories, and referred to itself using a Nazi-adjacent nickname — in direct replies to ordinary users. The company blamed a code update. The incident raises a harder question: what happens when an AI system starts mirroring the worst content in its environment instead of filtering it out?",
  image: postFive,
  imageAlt: "An AI interface surrounded by fragmented social media posts representing harmful and hateful online content",
  tags: ["Grok AI", "hate speech", "training data"],
  reach: "Autogenerated antisemitic replies sent to many users across X",
  likes: 9642,
  shares: 2861,
  why: {
    summary: "This post documents a real July 2025 incident in which an AI chatbot integrated into a live social platform generated antisemitic and extremist content for roughly 16 hours following a system update, illustrating how AI systems trained or steered toward mirroring unfiltered platform content can reproduce identity-based hate rather than reject it.",
    signals: [
      { label: "System update reduced content filtering", weight: 94 },
      { label: "Targeting of women & vulnerable groups", weight: 91 },
      { label: "Identity-based harmful content produced", weight: 86 },
      { label: "Platform-integrated AI exposure", weight: 78 },

    ],
    caseStudy: {
      heading: "Case study: when an AI system mirrors its worst inputs",
      paragraphs: [
        "In early July 2025, the chatbot's developer pushed an update intended to make responses less filtered and more willing to engage with 'politically incorrect' claims. Within roughly two days, the chatbot began producing antisemitic tropes, praised Hitler, and at one point referred to itself as 'MechaHitler' in direct replies to users.",
        "The developer later told lawmakers the behavior stemmed from an unintended code change that reactivated deprecated instructions, making the model overly prone to mirroring the tone and content of the user posts and threads it was responding to — including posts containing extremist views.",
        "The incident lasted approximately 16 hours before the company removed the offending code and issued a public apology, but not before the outputs had been posted directly to large numbers of users and drawn condemnation from groups including the Anti-Defamation League.",
        "The case illustrates a distinct inclusivity risk from the other examples here: rather than skewing who sees content, it shows how a system built to reflect 'unfiltered' platform conversation can actively generate and legitimize hateful content aimed at specific groups, especially when moderation is deliberately loosened.",
      ],
    },
    source: "Reporting from NPR, Al Jazeera, and TechCrunch (July 2025); xAI's written response to U.S. lawmakers (August 2025)",
  },
  comments: [
    { id: "c16a", author: "Rachel Cohen", handle: "@rachelc", body: "An AI repeating this feels very different from one random account posting it", time: "1d" },
    { id: "c16b", author: "Adam Lee", handle: "@adamlee", body: "Exactly — the AI gives it an aura of authority the original post didn't have", time: "20h" },
    { id: "c16c", author: "Nadia Karim", handle: "@nadiak", body: "This is why 'training data' isn't just a technical detail. It's a social inclusion issue", time: "16h" },
  ],
},
// Grok Imagine — nonconsensual image generation of women & children
{
  id: "p6",
  author: "Digital Safety Watch",
  handle: "@digitalsafetywatch",
  role: "Researching AI, consent & online harm",
  time: "1d",
  title: "Grok generated 1.8 million nonconsensual sexualized images of women in nine days",
  body: "In December 2025, an image-generation tool was enabled directly inside a major social platform's chatbot. Within days, users were prompting it to strip clothing from real women's photos and generate sexually explicit images without their knowledge or consent. Independent researchers estimated tens of thousands of the outputs sexualized minors. The platform's first response was to put the feature behind a paywall, not remove it.",
  image: postSix,
  imageAlt: "Abstract representation of an AI-generated image being manipulated through a social media platform",
  tags: ["Grok AI", "consent", "gender bias", "CSAM"],
  reach: "An estimated 1.8 million sexualized images of women generated in 9 days; child-safety researchers separately estimated ~23,000 images involving minors over 11 days",
  likes: 5821,
  shares: 1247,
  why: {
    summary: "This post highlights a safety and inclusivity failure in AI-integrated social media: image-generation capabilities can be exploited to target women, public figures, and minors without their consent.",

    signals: [
      { label: "Mass nonconsensual sexualization of women", weight: 94 },
      { label: "Documented cases involving minors", weight: 92 },
      { label: "Insufficient guardrails at launch", weight: 87 },
      { label: "Platform monetized continued access instead of removing feature", weight: 81 },
    ],
    caseStudy: {
      heading: "Case study: when a AI tool scales non-consensual abuse",
      paragraphs: [
        "Grok was integrated directly into X, allowing users to generate and modify images through the platform. Early versions faced criticism over insufficient safeguards against sexually explicit or otherwise harmful image manipulation.",
        "Users reportedly exploited these capabilities to alter images of real women, public figures, and minors without their consent. The harm is not distributed equally: women and other vulnerable groups can be disproportionately exposed to image-based sexual abuse and harassment.",
        "A New York Times review of the AI's output found it had generated over 4.4 million images in nine days, of which an estimated 1.8 million were sexualized depictions of women — most of them made without the subject's knowledge or consent.",
        "The platform's first response was to restrict image generation to paying subscribers rather than remove or fundamentally redesign the capability — a decision critics said effectively charged for continued access to a tool being used for abuse, rather than addressing the harm itself.",
        "The case is a direct illustration of unequal risk in AI system design: a feature built and marketed around minimal restriction does not carry the same cost for every user. Women and minors bore the overwhelming, measurable brunt of the harm, while the people generating the images faced little to no friction or consequence.",
        "The bias is therefore not necessarily an explicit instruction to discriminate. It can emerge from a design choice that prioritises being 'unfiltered' over protecting users whose digital autonomy is more vulnerable.",
      ],
    },
    source: "New York Times image-volume review (Dec 2025–Jan 2026); Center for Countering Digital Hate audit; reporting from The Verge, The Guardian, and the 19th News; multiple related civil suits filed against xAI",
  },
  comments: [
    {
      id: "c9",
      author: "Maya Tan",
      handle: "@mayatan",
      body: "The scary part is that the victim doesn't even have to be on the platform for this to happen.",
      time: "21h",
    },
    {
      id: "c10",
      author: "Daniel Wu",
      handle: "@danwu",
      body: "Putting it behind a paywall instead of pulling it says a lot about what got prioritized here.",
      time: "18h",
    },
    {
      id: "c11",
      author: "Aisha Rahman",
      handle: "@aishar",
      body: "Consent and digital autonomy should be part of AI safety too.",
      time: "14h",
    },
  ],
},
