import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqContents } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} imgSrc={faqContents.image} />
    <p>{faqContents.text}</p>
  </Container>
);
Faq.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
};
export default Faq;
