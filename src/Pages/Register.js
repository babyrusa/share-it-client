import React, { useState } from 'react';
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

const Register = () => {
  const [inputData, setInputData] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setInputData({ name: value });
  };

  const submitUser = event => {
    event.preventDefault();
    console.log(inputData);
  };

  return (
    <>
      <Title titleName="Register" />
      <FormSign>
        <FormContainer>
          <FormLogoWrapper>
            <FormLogo alt="Instagram" src="./assets/img/instagram2x.png" />
          </FormLogoWrapper>
          <form onSubmit={submitUser}>
            <FormWrapper>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                name="username"
                errorMsg=""
                handleChange={handleChange}
              />
              <Input
                type="email"
                id="inputEmail"
                placeholder="Email address"
                name="email"
                errorMsg=""
                handleChange={handleChange}
              />
              <Input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Password"
                errorMsg=""
                handleChange={handleChange}
              />
            </FormWrapper>
            <Button btnName="Sign up" />
          </form>
          <Footer>
            Already have an account?
            <Link to="login">Log in</Link>
          </Footer>
        </FormContainer>
      </FormSign>
    </>
  );
};

export default Register;
