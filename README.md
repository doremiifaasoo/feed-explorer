# Feed Explorer

## IMPORTANT — FEED MUST BE FULLY INTERACTIVE

### Scrollable Social Media Feed

The main feed MUST be vertically scrollable.

* The feed should behave like a real social-media home feed.
* Users should be able to continuously scroll through multiple posts.
* Each post should remain a separate card with its own interactions.
* The sidebar/navigation can remain fixed while the central feed scrolls.
* On desktop, the central feed should have its own natural scrolling behaviour without causing the entire page layout to break.
* Make sure the feed contains enough content/posts to demonstrate scrolling.
* Use smooth scrolling and maintain a polished social-media experience.
* On mobile/tablet, the feed should adapt naturally to a single-column layout.

### Comments MUST Be Functional

Users MUST be able to add comments directly within the UI.

For every post:

1. Display a comment icon/button.

2. Display the existing number of comments.

3. Clicking the comment icon should expand the comments section beneath the post OR open a comment drawer.

4. Show several realistic example comments for each case-study post.

5. Include a text input with placeholder:

   "Add a comment..."

6. Include a "Post" button.

7. When the user enters a comment and clicks "Post":

   * Immediately add the new comment to the post.
   * Display the user's comment with their profile avatar/name.
   * Increment the comment count.
   * Clear the input field.

8. The newly added comment should persist while the user navigates/scrolls through the prototype.

9. Pressing Enter should also submit the comment.

10. Prevent empty comments from being submitted.

### Comment Interaction

Make comments feel like an actual social-media interaction rather than static text.

Example:

User clicks:

💬 24 comments

↓

Comments section expands:

@alex
"I never realised recommendation systems could influence this."

@jane
"But isn't this just based on what people interact with?"

@sam
"That's what makes the feedback loop interesting."

[ Add a comment... ] [Post]

After the user submits:

@user
"This makes me think differently about what appears on my feed."

💬 25 comments

### Likes

Likes should also be functional.

* Clicking the heart icon should toggle the like state.
* Like count should increase/decrease accordingly.
* Use a subtle animation when liking a post.
* The interaction should persist during the current session.

### Saves

The bookmark/save icon should be functional.

* Clicking it toggles between saved/unsaved.
* Provide subtle visual feedback.
* Saved state should persist while navigating the prototype.

### Share

The share button should provide an interactive response.

For example, clicking Share can open a small menu containing:

* Copy link
* Share to Lens
* Cancel

Since this is a prototype, the actions can be simulated rather than actually sharing externally.

### Post State

Each post should maintain its own independent state.

For example:

Post 1:

* Own likes
* Own comments
* Own saved state

Post 2:

* Different likes
* Different comments
* Different saved state

Do NOT use one global comment/like state for every post.

### "Why Am I Seeing This?" Interaction

The existing "Why am I seeing this?" functionality should remain interactive even after comments are opened.

Clicking it should open the algorithm-transparency drawer/modal without navigating away from the feed.

The user should be able to:

1. Open a post
2. Like it
3. Comment
4. Open "Why am I seeing this?"
5. Read the case study
6. Close the explanation
7. Continue scrolling

All without losing their interactions.

### Overall UX Goal

The prototype should feel like a REAL interactive social-media feed rather than a collection of screenshots.

The user should be able to:

✓ Scroll through the feed
✓ Like posts
✓ Comment on posts
✓ See comments
✓ Add their own comments
✓ Save posts
✓ Share posts
✓ Open "Why am I seeing this?"
✓ Explore the research behind each post
✓ Continue scrolling without losing their state

Prioritise functionality and interaction over simply making the interface visually impressive.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a39fc699-dee2-4611-9f4b-37e887e0f764).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
