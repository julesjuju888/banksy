import * as React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.scss';
import { Helmet } from 'react-helmet';
import CardLinkGallery from '../images/card-link-gallery.jpg';

// markup
const IndexPage = () => {
  return (
    <Layout>
      {/* Helmet is used to define the SEO page metas (title, description, etc..) */}
      <Helmet>
        <meta charSet='utf-8' />
        <title>Homepage</title>
      </Helmet>

      {/* Main Bootstrap container: required to define grids (.row > .col)  */}
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className={styles.titleIndex}>Banksy</h1>
          </div>
        </div>

        {/* Section Welcome */}
        <section className='row mb-5 pb-5'>
          <div className='col-12 col-md-6'>
            <h2>Welcome</h2>
            <p>
              Urban art is a growing phenomenon that has been present in our
              lives for many years. In the streets, on the walls, on trains, on
              trucks, we find everywhere works of urban art. Our site is
              interested in a pioneer of this medium: Banksy. You will be able
              to discover his works through a detailed analysis.
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <div className={styles.videoResponsive}>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/INPxijwS3AY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Section Who is Banksy */}
        <section className='row mb-5 pb-5'>
          <div className='col-12 col-md-6'>
            <div className={styles.videoResponsive}>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/Xoe3Nn5vuBg'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className='col-12 col-md-6 order-first order-md-last mb-4'>
            <h2>Who is Banksy?</h2>
            <p>
              Banksy is a street art artist who works under a pseudonym. His
              real name and exact identity are unknown and still subject to
              speculation. Apparently British and active since the 1990s, he
              uses stencil painting to convey his messages, which often mix
              politics, humor and poetry.
            </p>
            <a href={`/biography`} className='btn btn-lg btn-danger'>
              Check his biography
            </a>
          </div>
        </section>

        {/* Section Banksy artwork */}
        <section className='row align-content-center'>
          <div className='col-12 col-md-6 mb-4'>
            <h2>Banksy artwork</h2>
            <p>
              Banksy uses the stencil technique for almost all his works. In his
              book Wall and Piece, Banksy explains this decision: he used to
              work slowly when he first started out, and would often get caught
              in the act. Stencils allow him to work much faster on site, as
              some of the work can be done in advance.
            </p>
            <a href={`/gallery`} className='btn btn-lg btn-danger'>
              Check our selected artworks explained
            </a>
          </div>
          <div className='col-12 col-md-6'>
            <div className={styles.videoResponsive}>
              <img
                src={CardLinkGallery}
                alt='Check our selected artworks explained'
                className='img-fluid'
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
