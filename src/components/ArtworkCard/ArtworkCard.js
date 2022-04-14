import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './ArtworkCard.module.scss';

const ArtworkCard = ({ title, slug, text, image }) => (
  <div className='col-12 col-md-4  pb-3'>
    <div className='card'>
      <div className='card-body'>
        <img className='img-fluid' src={image} alt={title} />
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.lieux}>{text}</p>
        <a href={`/gallery/${slug}`} className='btn btn-dark'>
          Analyse
        </a>
      </div>
    </div>
  </div>
);

ArtworkCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

ArtworkCard.defaultProps = {
  title: ``,
  slug: ``,
  text: ``,
  image: ``,
};

export default ArtworkCard;
