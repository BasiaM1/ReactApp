import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const Container = (props) => (
  <div className={styles.component}>{props.childern}</div>
);
Container.propTypes = {
  childern: PropTypes.node,
};
export default Container;
