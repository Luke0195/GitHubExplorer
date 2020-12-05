import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  line-height: 58px;
  color: #3a3a3a;
  margin-top: 80px;
  width: 100%;
  max-width: 450px;
`;

export const Form = styled.form`
  margin: 40px 0;
  width: 100%;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 210px;
    height: 50px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
