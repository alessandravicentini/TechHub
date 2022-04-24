import logo from '../../assets/images/logo.png'
import { Button } from '../../components/Button'

import { Container, Header, Nav, TechCard, TechContainer, TechInfo } from "./styles";

export const Dashboard = () => {

  return (
   <>
   <Nav>
    <img src={logo} alt="" />
    <Button size>Sair</Button>
   </Nav>
   <Header>
     <h2>olá, kenzinho</h2>
     <p>primeiro módulo</p>
   </Header>
   <Container>
     <TechInfo>
       <h3>Tecnologias</h3>
       <Button size>+</Button>
     </TechInfo>
     <TechContainer>
       <TechCard><p>tech</p><span>nivel</span></TechCard>
       <TechCard><p>tech</p><span>nivel</span></TechCard>
     </TechContainer>
   </Container>
   </>
  );
};
