import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName }) => (
  <button className="btn btn-lg btn-primary btn-block" type="submit">
    {btnName}
  </button>
);

Button.prototypes = {
  btnName: PropTypes.string.isRequired
};

export default Button;
