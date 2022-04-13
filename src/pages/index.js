import * as React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.scss';
//import BanksyVideo from '../video/video-presentation.mp4'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className='container'>

        <div className='row'>
          <div className='col-12'>
            <h1 className={styles.titleIndex}>
              Banksy
            </h1>
          </div>
        </div>

        <hr></hr>

        <section className="row">
          <div className="col-12">
            <p>
              Urban art is a growing phenomenon that has been present in our lives for many years. <br />
              In the streets, on the walls, on trains, on trucks, we find everywhere works of urban art. <br />
              Our site is interested in a pioneer of this medium: Banksy. You will be able to discover his
              works
              through a detailed analysis.
            </p>
            {/* <video controls width="960" height="540" autoPlay muted>
              <source src={BanksyVideo} type="video/mp4" />
              <p className="warning">Your browser does not support HTML5 video.</p>
            </video> */}

            <br /> <br />  <br /> <br />
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default IndexPage;
