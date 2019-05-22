import React from 'react';
import PropTypes from 'prop-types';

const SubmitIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
);

SubmitIcon.propTypes = {
  size: PropTypes.number
};

SubmitIcon.defaultProps = {
  size: 20
};

export default SubmitIcon;
