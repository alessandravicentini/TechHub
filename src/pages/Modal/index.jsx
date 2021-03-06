import { AnimationContainer, Container, Content, Header, DisappearContainer } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SelectModal } from "../../components/SelectModal";
import { toast } from "react-toastify";

export const Modal = ({ modal, setModal }) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@Kenziehub:token")) || "");

    const { register, handleSubmit } = useForm()

    const onSubmitFunction = ({ name, select }) => {
        const tech = { title: name, status: select }

        api
        .post('/users/techs', tech, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        .then((response) => {
            toast.success("Tecnologia adicionada com sucesso!")
            setModal(false)
        })
        .catch((error) => toast.error("Ops! Algo deu errado"))
    }

    const hide = async(ms) => {

        await new Promise(response => setTimeout(response, ms))
        setModal('none')
    }

    return modal === 'appear' ? (
        <AnimationContainer modal={modal}>
           <Container>
               <Header>
                   <span>Cadastrar Tecnologia</span>
                   <Button size onClick={() => setModal('disappear')}>X</Button>
               </Header>
               <Content>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                  register={register}
                  name="name"
                  placeholder="Tecnologia"
                 />
                <SelectModal
                  register={register}
                  name="select"
                />
                   <Button type="submit">Adicionar</Button>
                </form>
               </Content>
           </Container>
        </AnimationContainer>
    ) : modal === 'disappear' ? (
        <DisappearContainer onLoad={hide(501)}>
           <Container>
               <Header>
                   <span>Cadastrar Tecnologia</span>
                   <Button size>X</Button>
               </Header>
               <Content>
                <form>
                <Input
                  register={register}
                  name="name"
                  placeholder="Tecnologia"
                 />
                <SelectModal
                  register={register}
                  name="select"
                />
                   <Button>Adicionar</Button>
                </form>
               </Content>
           </Container>
        </DisappearContainer>
    ) : (
        <></>
    )
}