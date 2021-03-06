import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents } from '../../data/dataStore';
import styles from './Faq.scss';

const Faq = () => (
  <div className={styles.component}>
    <Container>
      <Hero titleText={faqContents.title} imgSrc={faqContents.image} />
      <p>{faqContents.text}</p>
    </Container>
  </div>
);
// Faq.propTypes = { czemu to daje warningi...
//   title: PropTypes.node.isRequired,
//   image: PropTypes.string,
//   text: PropTypes.string,
// };
export default Faq;
