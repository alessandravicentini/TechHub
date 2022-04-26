import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

import { Button } from '../../components/Button'
import { TechCard } from '../../components/TechCard'
import { Modal } from '../Modal';
import { api } from '../../services/api'

import { Container, Header, Nav, TechContainer, TechInfo } from "./styles";
import { ModalEdit } from '../Modal-edit';

export const Dashboard = ({ userAuth, setUserAuth }) => {
  const [techs, setTechs] = useState('')

  const [modal, setModal] = useState('none')
  const [modalEdit, setModalEdit] = useState('none')
  const [techId, setTechId] = useState('')
  const [techTitle, setTechTitle] = useState('')
  
  const [user] = useState(JSON.parse(localStorage.getItem("@Kenziehub:user")) || "")
  const [token] = useState(JSON.parse(localStorage.getItem("@Kenziehub:token")) || "")

  const loadTechs = () => {
    api
    .get(`/users/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setTechs(response.data.techs))
  }

  useEffect(() => {
    loadTechs()
  })

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
       <Button size onClick={() => setModal('appear')}>+</Button>
     </TechInfo>
     <TechContainer>
       <Modal modal={modal} setModal={setModal} />
       <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} techId={techId} setTechId={setTechId} techTitle={techTitle} setTechTitle={setTechTitle}/>
        {techs !== '' ? techs.map((tech) => (
          <TechCard 
          key={tech.id}
          title={tech.title}
          status={tech.status}
          onClick={() => {
            setModalEdit('appear')
            setTechId(tech.id)
            setTechTitle(tech.title)
          }}
          />
        )) : ''}
     </TechContainer>
   </Container>
   </>
  );
};
