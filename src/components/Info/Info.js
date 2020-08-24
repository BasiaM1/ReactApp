import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContents } from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <div className={styles.component}>
    <Container>
      <Hero titleText={infoContents.title} imgSrc={infoContents.image} />
      <p>{infoContents.text}</p>
    </Container>
  </div>
);
// Info.propTypes = { czemu to daje warningi...
//   title: PropTypes.node.isRequired,
//   image: PropTypes.string,
//   text: PropTypes.string,
// };
export default Info;
