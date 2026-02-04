export const ALL_POSTS_WITH_COVER = `
  query AllPostsWithCover($first: Int!, $after: String) {
    publication(host: "kodenops.hashnode.dev") {
      posts(first: $first, after: $after) {
        edges {
          node {
            title
            slug
            brief
            publishedAt
            url
            coverImage {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
