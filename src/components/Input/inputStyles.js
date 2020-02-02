import styled from 'styled-components';

export const FormLabelGroup = styled.div`
  position: relative;
  margin-bottom: 1rem;

  > input {
    background-color: #fafafa;
    outline: none !important;

    ::-webkit-input-placeholder {
      color: transparent;
    }
    :-ms-input-placeholder {
      color: transparent;
    }
    ::-ms-input-placeholder {
      color: transparent;
    }
    ::-moz-placeholder {
      color: transparent;
    }

    ::placeholder {
      color: transparent;
    }

    :not(:placeholder-shown) {
      padding-top: 1.25rem;
      padding-bottom: 0.25rem;
    }

    :not(:placeholder-shown) ~ label {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      font-size: 12px;
      color: #777;
    }
  }

  > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    cursor: text;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 0.1s ease-in-out;
  }

  > input:focus {
    box-shadow: none;
    border-color: #efefef;
  }
  > input,
  > label {
    padding: 0.55rem;
    font-size: 13px;
    min-height: 36px;
    height: auto;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    > label {
      display: none;
    }
    input:-ms-input-placeholder {
      color: #777;
    }
  }

  @supports (-ms-ime-align: auto) {
    > label {
      display: none;
    }
    input::-ms-input-placeholder {
      color: #777;
    }
  }
`;
