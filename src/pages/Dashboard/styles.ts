import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 48px;
  line-height: 58px;
  color: #3a3a3a;
  margin-top: 80px;
  width: 100%;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin: 40px 0 20px 0;
  width: 100%;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 58px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid white;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c30305;
        border-right: 0;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 58px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.8s ease-out;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.8s ease-out;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    flex: 1;

    strong {
      color: #3a3a3a;
      font-size: 18px;
      line-height: 33px;
    }

    p {
      color: #bbb;
      font-size: 15px;
      line-height: 28px;
      margin-top: 3px;
    }
  }
  svg {
    color: #a8a8b3;
    margin-left: auto;
    transition: color 0.8s ease-out;
    &:hover {
      color: ${shade(0.2, '#3a3a3a')};
    }
  }
`;

export const Error = styled.span`
  width: 100%;
  max-width: 700px;
  display: block;
  background-color: #ed6b61;
  color: #c30305;
  padding: 10px;
  border-radius: 5px;
`;
