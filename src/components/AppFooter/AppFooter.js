import React from 'react';
import * as styles from './AppFooter.module.scss';
import BanksyBallonFooter from '../../images/image-footer.png';

const AppFooter = () => (
  <footer className={styles.appFooter}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <p>This site was created for non-profit purposes.</p>
          <p>All images are coming from google.</p>
          <p>This site doesn't use any cookie.</p>
        </div>
        <div className='col-12 col-md-4'>
          <div className={styles.appFooterImage}>
            <img
              src={BanksyBallonFooter}
              class='img-fluid float-end'
              alt='Banknotes'
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default AppFooter;
