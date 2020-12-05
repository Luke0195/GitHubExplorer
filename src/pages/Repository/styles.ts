import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #3a3a3a;
    transition: color 0.8s ease-out;
    &:hover {
      color: #a8a8b3;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
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
