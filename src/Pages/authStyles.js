import styled from 'styled-components';

export const FormSign = styled.section`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const FormContainer = styled.div`
  width: 350px;
  max-height: 445px;
  height: auto;
  border-radius: 3px;
  color: var(--text-color);
  font-size: 14px;
  border: 1px solid #efefef;
`;

export const FormLogoWrapper = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogo = styled.img`
  width: 175px;
  height: 51px;
`;
export const FormWrapper = styled.div`
  margin: 0 40px;
`;
export const Footer = styled.footer`
  width: 100%;
  font-size: 14px;
  color: #999999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  a {
    font-weight: 700;
    color: #3897f0 !important;
    margin-left: 10px;
    text-decoration: none !important;
  }
`;
