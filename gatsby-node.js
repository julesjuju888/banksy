exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDatoCmsOeuvre {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allDatoCmsOeuvre.edges.forEach((edge) => {
    const slug = edge.node.slug;

    actions.createPage({
      path: `gallery/${slug}`,
      component: require.resolve(`./src/templates/artwork-page.js`),
      context: { slug: slug },
    });
  });
};
