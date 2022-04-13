import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => (
  <div className='row'>
    <div className='col-12'>
      <h1 className={styles.pageTitle}>
        {title}</h1>
    </div>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: ``,
};

export default PageTitle;
