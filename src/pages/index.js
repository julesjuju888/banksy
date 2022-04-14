import * as React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.scss';
import { Helmet } from 'react-helmet';
//import BanksyVideo from '../video/video-presentation.mp4'
import CardLinkGallery from '../images/card-link-gallery.jpg';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Homepage</title>
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className={styles.titleIndex}>Banksy</h1>
          </div>
        </div>

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
              Banksy is a street art artist who works under a pseudonym.
              His real name and exact identity are unknown and still subject to speculation.
              Apparently British and active since the 1990s, he uses stencil painting to convey
              his messages, which often mix politics, humor and poetry.
            </p>
            <a href={`/biography`} className='btn btn-lg btn-dark'>
              Check his biography
            </a>
          </div>
        </section>

        <section className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <h2>Banksy artwork</h2>
            <p>
              Urban art is a growing phenomenon that has been present in our
              lives for many years. In the streets, on the walls, on trains, on
              trucks, we find everywhere works of urban art. Our site is
              interested in a pioneer of this medium: Banksy. You will be able
              to discover his works through a detailed analysis.
            </p>
            <a href={`/gallery`} className='btn btn-lg btn-dark'>
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
