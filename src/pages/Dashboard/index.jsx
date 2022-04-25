import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { Button } from '../../components/Button'

import { Container, Header, Nav, TechCard, TechContainer, TechInfo } from "./styles";

export const Dashboard = ({ userAuth, setUserAuth }) => {

  const [user] = useState(JSON.parse(localStorage.getItem("@Kenziehub:user")) || "")

  if (!userAuth) {
    return <Redirect to="/login" />;
  }

  return (
   <>
   <Nav>
    <img src={logo} alt="" />
    <Button size onClick={() => {
      localStorage.clear();
      setUserAuth("")
    }}>Sair</Button>
   </Nav>
   <Header>
     <h2>Olá, {user.name}</h2>
     <p>{user.course_module}</p>
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
