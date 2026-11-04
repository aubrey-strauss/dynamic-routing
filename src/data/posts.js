const posts = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to my blog! This is the very first post.",
  },
  {
    id: 2,
    slug: "learning-react-router",
    title: "Learning React Router",
    content: "React Router lets one app show different pages based on the URL.",
  },
  {
    id: 3,
    slug: "why-context-is-useful",
    title: "Why Context Is Useful",
    content:
      "Context lets components share data without passing props through every level.",
  },
];

export default posts;

//slug is the URL-friendly version of the title: lowercase, with dashes instead of spaces.
// The name comes from old newspaper jargon, where a “slug” was the short nickname for a story.
// It’s what goes in the address bar: /blog/my-first-post.
