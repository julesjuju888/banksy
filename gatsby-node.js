// This is generating the detailed artwork pages
// It's reading all the data from DatoCMS
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

  // Once we get all the pages, we loop on the array (tableau)
  // and generate one page per iteration
  data.allDatoCmsOeuvre.edges.forEach((edge) => {
    const slug = edge.node.slug;

    actions.createPage({
      path: `gallery/${slug}`,
      component: require.resolve(`./src/templates/artwork-page.js`),
      context: { slug: slug },
    });
  });
};
