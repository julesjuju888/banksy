import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet';

// Images
import BanksyAnonym from '../images/banksy-anonyme.jpg';
import BanksyBristol from '../images/bristol.jpeg';
import BanksyDianaBanknote from '../images/diana-banksy.jpeg';

// markup
const BiographyPage = () => {
  return (
    <Layout>
      {/* Helmet is used to define the SEO page metas (title, description, etc..) */}
      <Helmet>
        <meta charSet='utf-8' />
        <title>Biography</title>
      </Helmet>

      {/* Main Bootstrap container: required to define grids (.row > .col)  */}
      <div className='container'>
        <PageTitle title='Biography' />

        {/* Section Banksy Anonymous */}
        <section className='row mb-5 pb-5'>
          <div className='col-12 col-md-6'>
            <h2>Banksy, an anonymous provocator</h2>
            <p>
              Although he is neither a founder nor a precursor of this movement,
              the king of provocation Banksy is today the unavoidable star of
              street art.{' '}
            </p>
            <p>
              He is one of the most famous contemporary artists of our timeSince
              1993, his work has spread to every continent. Stencils, paintings,
              sculptures, hijacking of urban objects or classical works,
              installations... Banksy is a versatile artist. He plays the
              usurper and the provocateur.
            </p>
            <p>
              Interpellant citizens on the human condition, all with a good dose
              of humor and second degree. Finally, Banksy gives a kick in the
              contemporary artistic ant-hill, assuring his peers that it is
              useless to take himself too seriously...In all likelihood, Banksy
              was born in Bristol, Great Britain in 1974.
            </p>
            <p>
              It's hard to say because the artist has spent his life escaping
              the media in order to remain anonymous. This line of conduct is
              the very essence of the underground scene that he loves. <br />
              It allows him to act night and day, without ever being discovered.
              This has earned him some exceptional coups, at the limit of
              legality.
            </p>
          </div>
          <div className='col-12 col-md-6 order-first order-md-last mb-4'>
            <img
              src={BanksyAnonym}
              class='img-fluid float-end'
              alt='Banknotes'
            />
          </div>
        </section>

        {/* Section Banksy prolific artist */}
        <section className='row mb-5 pb-5'>
          <div className='col-12 col-md-6'>
            <img
              src={BanksyDianaBanknote}
              class='img-fluid float-end'
              alt='Banknotes'
            />
          </div>
          <div className='col-12 col-md-6 order-first order-md-last mb-4'>
            <h2>Banksy, a prolific artist</h2>
            <p>
              In 2004, he printed counterfeit banknotes bearing the effigy of
              Lady Di, replacing the Bank of England with Banksy of England, and
              scattered them during the Notting Hill carnival.
            </p>
            <p>
              In 2005, he managed to enter the biggest museums in the world, at
              the MoMa, the Tate Britain or the Louvre, to display his own
              works.
            </p>
            <p>
              Sometimes, some of them will remain exposed several days before
              the discovery of the deception. In 2006, he placed a giant
              sculpture in the heart of London's Soho district, representing a
              red telephone booth, split by a pickaxe and appearing to bleed.
              That same year, he brought a blow-up doll dressed in an orange
              uniform similar to that of Guantanamo prisoners into Disneyland in
              California.
            </p>
            <p>
              If his words are rare, his misdeeds speak for him. Indignant,
              irreverent, revolutionary, Banksy likes to provoke and shock. Some
              people like to think that Banksy could be a woman, or even a
              collective. Because if we do not know the identity of the artist,
              speculations are going well. Banksy plays with the codes according
              to which society would like us to like an artist before we like
              his work. Here, it is only his work that counts.On the walls, some
              of Banksy's works denounce the deprivation of freedom, notably on
              the wall in Gaza or the one in Jerusalem, where he paints
              openings, views of the beach, the clouds, this ladder that reaches
              the top of the wall or children digging a hole. He also denounces
              the consumer society by pointing to the flagship emblems of
              consumerist America, such as the drawing of this Vietnamese woman
              irradiated with napalm holding Mickey Mouse and Ronald McDonald.
              Other walls incite us to keep hope. The most famous being the
              Little Girl with a Balloon.
            </p>
          </div>
        </section>

        {/* Section Banksy in Bristol  */}
        <section className='row mb-5 pb-5'>
          <div className='col-12 col-md-6'>
            <h2>Banksy in Bristol</h2>
            <p>
              In Bristol, the city that has appropriated Banksy, a major
              exhibition of his work - more than 100 pieces - welcomed more than
              300,000 visitors in 2009. Illustrator of the cover of the album of
              Blur in 2003,
            </p>
            <p>
              Banksy is also a director with the film "Do the wall", released in
              2010.
            </p>
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <img
              src={BanksyBristol}
              class='img-fluid float-end'
              alt='Banknotes'
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BiographyPage;
