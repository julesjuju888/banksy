import React from 'react';
import * as styles from './AppFooter.module.scss';

const AppFooter = () => (
  <footer className={styles.appFooter}>
    <div className='container'>
      <div className='row text-center'>
        <div className='col-12 col-md-4'>
          <small>This site was created for non-profit purposes</small>
        </div>
        <div className='col-12 col-md-4'>
          <h1>this site was created for non-profit purposes</h1>
        </div>
        <div className='col-12 col-md-4'>
          <h1>this site was created for non-profit purposes</h1>
        </div>
      </div>
    </div>
  </footer>
);

export default AppFooter;
