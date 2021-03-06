import { AnimationContainer, ButtonContainer, Container, Content, Header, DisappearContainer } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SelectModal } from "../../components/SelectModal";
import { toast } from "react-toastify";

export const ModalEdit = ({ modalEdit, setModalEdit, techId, setTechId, techTitle, setTechTitle }) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@Kenziehub:token")) || "");

    const { register, handleSubmit } = useForm()

    const hide = async(ms) => {

        await new Promise(response => setTimeout(response, ms))
        setModalEdit('none')
    }

    const onSubmitFunction = ({ select }) => {
        const tech = { status: select }

        api
        .put(`/users/techs/${techId}`, tech, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        .then((response) => {
            toast.success("Tecnologia editada com sucesso!")
            setTechId('')
            setTechTitle('')
            setModalEdit('disappear')
        })
        .catch((error) => toast.error("Ops! Algo deu errado"))
    }

        const deleteTech = (techId) => {
            api
            .delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            .then((response) => {
                toast.success("Tecnologia deletada com sucesso!")
                setTechId('')
                setModalEdit('disappear')
            })
            .catch((error) => toast.error("Ops! Algo deu errado"))
        }

        return modalEdit === 'appear' ? (
        <AnimationContainer modalEdit={modalEdit}>
           <Container>
               <Header>
                   <span>Editar Tecnologia</span>
                   <Button size onClick={() => setModalEdit('disappear')}>X</Button>
               </Header>
               <Content>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                  register={register}
                  name="name"
                  value={techTitle}
                  disabled
                 />
                <SelectModal
                  register={register}
                  name="select"
                />
                <ButtonContainer>
                   <Button type="submit">Editar</Button>
                   <Button greySchema onClick={() => deleteTech(techId)}>Deletar</Button>
                </ButtonContainer>
                </form>
               </Content>
           </Container>
        </AnimationContainer>
        ) : modalEdit === 'disappear' ? (
        <DisappearContainer modalEdit={modalEdit}>
           <Container>
               <Header>
                   <span>Editar Tecnologia</span>
                   <Button size onClick={hide(900)}>X</Button>
               </Header>
               <Content>
                <form>
                <Input
                  register={register}
                  name="name"
                  value={techTitle}
                  disabled
                 />
                <SelectModal
                  register={register}
                  name="select"
                />
                <ButtonContainer>
                   <Button>Editar</Button>
                   <Button greySchema>Deletar</Button>
                </ButtonContainer>
                </form>
               </Content>
           </Container>
        </DisappearContainer>
        ) : (
            <></>
        )
}   