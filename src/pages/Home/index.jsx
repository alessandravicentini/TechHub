import logo from '../../assets/images/logo.png'
import { Button } from '../../components/Button';

import { Container, Content } from './styles';

export const Home = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <Content>
        <Button>Cadastro</Button>
        <Button>Login</Button>
      </Content>
    </Container>
  );
};
