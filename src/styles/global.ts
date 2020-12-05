import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/github-background.svg';

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
}

body{
  background:#A8A8A8 url(${backgroundImage}) 70% top;
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;

}

#root{
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

body, input, button{
font-family:'Roboto', sans-serif;
font-size: 16px;
}

button{
  cursor: pointer;
}


`;
