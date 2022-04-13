import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';
import ArtworkCard from '../components/ArtworkCard/ArtworkCard';
import { graphql } from 'gatsby';

// markup
const GalleryPage = ({ data }) => {
  const {
    allDatoCmsOeuvre: { edges },
  } = data;
  return (
    <Layout>
      <div className='container'>
        <br />  <br /> <br /> <br />
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
            fluid{
              src
            }
          }
        }
      }
    }
  }
`;
