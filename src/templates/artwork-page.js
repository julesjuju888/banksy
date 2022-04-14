import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Helmet } from 'react-helmet';
import * as styles from './artwork-page.module.scss';
import PageTitle from '../components/PageTitle/PageTitle';
import { Carousel } from 'react-bootstrap';

export default function ArtworkPage({ data }) {
  // Associate specific data to a variable (speed optimisation)
  const page = data.datoCmsOeuvre;
  const paragraphs = page.description.value.document.children;
  const allDatoCmsOeuvre = data.allDatoCmsOeuvre.edges;

  return (
    <Layout>
      {/* Helmet is used to define the SEO page metas (title, description, etc..) */}
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gallery: {page.title}</title>
      </Helmet>

      {/* Main Bootstrap container: required to define grids (.row > .col)  */}
      <div className='container mb-5'>
        <PageTitle title={page.title} />

        {/* Artwork content coming from DatoCMS  */}
        <div className='row justify-content-center mb-5 pb-5'>
          <div className='col-12 col-md-10 col-lg-8'>
            <div className='text-center mb-5'>
              <img
                src={page.image.fluid.src}
                className='img-fluid'
                alt={page.title}
              />
            </div>

            {paragraphs.map((item, index) => (
              <p key={index}>{item?.children[0]?.value}</p>
            ))}
          </div>
        </div>

        {/* Carousel to link to other explained artworks */}
        <div className='row justify-content-center'>
          <Carousel className='text-center' variant='dark'>
            {allDatoCmsOeuvre.map((item, index) => (
              <Carousel.Item interval={1000}>
                <div className={styles.imageCaroussel}>
                  <img
                    src={item.node.image.fluid.src}
                    className='img-fluid'
                    alt={item.node.title}
                  />
                </div>
                <Carousel.Caption>
                  <a
                    href={`/gallery/${item.node.slug}`}
                    className='btn btn-sm btn-danger'
                  >
                    {item.node.title}
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
}

{
  /* GraphQL Query: you can check http://localhost:8000/___graphql to see all available data  */
}
export const query = graphql`
  query ($slug: String!) {
    datoCmsOeuvre(slug: { eq: $slug }) {
      title
      text
      image {
        fluid {
          src
        }
      }
      description {
        value
      }
    }
    allDatoCmsOeuvre {
      edges {
        node {
          title
          slug
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
