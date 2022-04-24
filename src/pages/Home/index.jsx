import logo from '../../assets/images/logo.png'

import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';

import { Container, Content } from './styles';

export const Home = () => {

  const history = useHistory()

  const handleNavigation = (path) => {
    return history.push(path)
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <Content>
        <Button greySchema onClick={() => handleNavigation('/signup')}>Cadastro</Button>
        <Button onClick={() => handleNavigation('/login')}>Login</Button>
      </Content>
    </Container>
  );
};
