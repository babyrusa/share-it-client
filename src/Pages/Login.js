import React, { useState } from 'react';
import cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import Input from '../components/Input/input';
import Button from '../components/Button/button';
import Title from '../utils/Title';
import {
  FormWrapper,
  FormSign,
  FormContainer,
  FormLogo,
  FormLogoWrapper,
  Footer
} from './authStyles';
import { axiosInstance } from '../services/config';
import { instagram2 } from '../assets/img';

const Login = () => {
  const [inputData, setInputData] = useState({});
  const [error, setError] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
  };

  const submitUser = async event => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/login', inputData);
      if (res && res.data) {
        const { token } = res.data;
        cookie.set('token', token);
      }

      const { origin } = window.location;
      window.location.replace(`${origin}/`);
    } catch (err) {
      if (err && err.response) {
        const { data } = err.response;
        if (data) {
          setError(data.data);
        }
      }
    }
  };

  return (
    <>
      <Title titleName="Login" />
      <FormSign>
        <FormContainer>
          <FormLogoWrapper>
            <FormLogo alt="Instagram" src={instagram2} />
          </FormLogoWrapper>
          <form onSubmit={submitUser}>
            <FormWrapper>
              <Input
                type="text"
                id="inputEmail"
                placeholder="Email address or Username"
                name="data"
                errorMsg={(error && error.data) || ''}
                handleChange={handleChange}
              />
              <Input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Password"
                errorMsg={(error && error.password) || ''}
                handleChange={handleChange}
              />
            </FormWrapper>
            <Button btnName="Log in" />
          </form>
          <Footer>
            Don't have an account?
            <Link to="/register">Sign Up</Link>
          </Footer>
        </FormContainer>
      </FormSign>
    </>
  );
};

export default Login;
