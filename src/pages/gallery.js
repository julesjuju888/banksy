import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';
import ArtworkCard from '../components/ArtworkCard/ArtworkCard';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// markup
const GalleryPage = ({ data }) => {
  const {
    allDatoCmsOeuvre: { edges },
  } = data;
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gallery</title>
      </Helmet>
      <div className='container'>
        <PageTitle title='Gallery' />
        <div className='row py-3'>
          {edges.map((item) => (
            <ArtworkCard
              key={item.node.id}
              title={item.node.title}
              slug={item.node.slug}
              text={item.node.text}
              image={item.node.image.fluid.src}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
  query AllOeuvres {
    allDatoCmsOeuvre {
      edges {
        node {
          date(locale: "")
          id
          title
          slug
          text
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
