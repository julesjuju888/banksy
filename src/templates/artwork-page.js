import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Helmet } from 'react-helmet';
import * as styles from './artwork-page.module.scss';

export default function ArtworkPage({ data }) {
  const page = data.datoCmsOeuvre;
  const paragraphs = page.description.value.document.children;
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gallery: {page.title}</title>
      </Helmet>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8'>
            <h1 className={styles.titleIndex}>{page.title}</h1>
            <div className='text-center'>
              <img src={page.image.fluid.src} className='img-fluid' />
            </div>
            <br /> <br />
            <p>
              {page.description.value.document.children[0].children[0].value}
            </p>
            {paragraphs.map((item, index) => (
              <div key={index}>{item?.children[0]?.value}</div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
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
  }
`;
