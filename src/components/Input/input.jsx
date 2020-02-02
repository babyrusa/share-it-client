import React from 'react';
import PropTypes from 'prop-types';
import { FormLabelGroup } from './inputStyles';

const Input = ({ type, id, name, placeholder, errorMsg, handleChange }) => (
  <FormLabelGroup>
    <input
      type={type}
      id={id}
      className={errorMsg === '' ? 'form-control' : 'form-control is-invalid'}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      required
      autoFocus
    />
    <div className="invalid-feedback">{errorMsg}</div>
    <label htmlFor={id}>{placeholder}</label>
  </FormLabelGroup>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
