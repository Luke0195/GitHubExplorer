import React from 'react';
import { Title, Form } from './styles';
import logoImg from '../../assets/github-logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer logo" />
      <Title> Explore Repositórios no GitHub</Title>
      <Form>
        <input type="text" placeholder="Informe do autor/repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
