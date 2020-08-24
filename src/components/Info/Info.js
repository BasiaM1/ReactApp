import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { infoContents } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imgSrc={infoContents.image} />
    <p>{infoContents.text}</p>
  </Container>
);
Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
};
export default Info;
