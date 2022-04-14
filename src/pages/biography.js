import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet';

// markup
const BiographyPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Biography</title>
      </Helmet>
      <div className='container'>
        <PageTitle title='Biography' />
        <section class='row'>
          <div class='col-12'>
            <img
              src='https://i.pinimg.com/originals/f1/36/70/f1367055805247c1994b502ddd012fb8.jpg'
              class='img-fluid float-end'
              alt=''
            />
            <p>
              {' '}
              Although he is neither a founder nor a precursor of this movement,
              the king of provocation Banksy is today the unavoidable star of
              street art. <br />
              He is one of the most famous contemporary artists of our timeSince
              1993, his work has spread to every continent. Stencils, paintings,
              sculptures, <br />
              hijacking of urban objects or classical works, installations...
              Banksy is a versatile artist. He plays the usurper and the
              provocateur. <br />
              Interpellant citizens on the human condition, all with a good dose
              of humor and second degree. Finally, Banksy gives a kick in the
              contemporary artistic ant-hill,
              <br />
              assuring his peers that it is useless to take himself too
              seriously...In all likelihood, Banksy was born in Bristol, Great
              Britain in 1974. <br />
              It's hard to say because the artist has spent his life escaping
              the media in order to remain anonymous. This line of conduct is
              the very essence of the underground scene that he loves. <br />
              It allows him to act night and day, without ever being discovered.
              This has earned him some exceptional coups, at the limit of
              legality. <br />
              In 2004, he printed counterfeit banknotes bearing the effigy of
              Lady Di, replacing the Bank of England with Banksy of England, and
              scattered them during the Notting Hill carnival. <br />
              In 2005, he managed to enter the biggest museums in the world, at
              the MoMa, the Tate Britain or the Louvre, to display his own
              works. <br />
              Sometimes, some of them will remain exposed several days before
              the discovery of the deception. In 2006, he placed a giant
              sculpture in the heart of London's Soho district, <br />
              representing a red telephone booth, split by a pickaxe and
              appearing to bleed. That same year, he brought a blow-up doll
              dressed in an orange uniform similar to that of Guantanamo
              prisoners into Disneyland in California. <br />
              If his words are rare, his misdeeds speak for him. Indignant,
              irreverent, revolutionary, Banksy likes to provoke and shock. Some
              people like to think that Banksy could be a woman, <br />
              or even a collective. Because if we do not know the identity of
              the artist, speculations are going well. Banksy plays with the
              codes according to which society would like us to like an artist
              before we like his work. <br />
              Here, it is only his work that counts.On the walls, some of
              Banksy's works denounce the deprivation of freedom, notably on the
              wall in Gaza or the one in Jerusalem, where he paints openings,{' '}
              <br />
              views of the beach, the clouds, this ladder that reaches the top
              of the wall or children digging a hole. He also denounces the
              consumer society by pointing to the flagship emblems of
              consumerist America,
              <br />
              such as the drawing of this Vietnamese woman irradiated with
              napalm holding Mickey Mouse and Ronald McDonald. Other walls
              incite us to keep hope. The most famous being the Little Girl with
              a Balloon.
              <br />
              In Bristol, the city that has appropriated Banksy, a major
              exhibition of his work - more than 100 pieces - welcomed more than
              300,000 visitors in 2009. Illustrator of the cover of the album of
              Blur in 2003,
              <b />
              Banksy is also a director with the film "Do the wall", released in
              2010.
            </p>
            <br /> <br />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BiographyPage;
