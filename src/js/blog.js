export function formatBlogPosts(
  posts,
  { filterOutFuturePosts = true, sortByDate = true, limit = undefined } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date } = post.frontmatter;

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    acc.push(post);

    return acc;
  }, []);

  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
