import { AnimationContainer, ButtonContainer, Container, Content, Header } from "./styles"

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
            setModalEdit(false)
            setTechId('')
            setTechTitle('')
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
            setModalEdit(false)
            setTechId('')
        })
        .catch((error) => toast.error("Ops! Algo deu errado"))
    }

    return modalEdit ? (
    <AnimationContainer modalEdit={modalEdit}>
       <Container>
           <Header>
               <span>Editar Tecnologia</span>
               <Button size onClick={() => setModalEdit(false)}>X</Button>
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
    ) : (
        <></>
    )
}