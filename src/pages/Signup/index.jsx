import { AnimationContainer, Container, Content, Header } from "./styles";
import logo from "../../assets/images/logo.png"

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { RiEyeCloseLine } from 'react-icons/ri'


export const Signup = ({userAuth}) => {

  const schema = yup.object().shape({
    name: yup
    .string()
    .required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senha não confere"),
    select: yup
      .string()
      .required("Campo obrigatório")

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [passwordVisible, setPasswordVisible] = useState(false)

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path)
  }

  const onSubmitFunction = ({ name, email, password, select }) => {
    const user = { email, password, name, bio: "-", contact: "-", course_module: select };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  if (userAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="logo" />
          <Button size onClick={() => handleNavigation('/')}>Voltar</Button>
        </Header>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <p>Rápido e grátis, vamos nessa</p>
            <Input
              register={register}
              name="name"
              error={errors.name?.message}
              label="Nome"
              placeholder="Digite aqui seu nome"
            />
            <Input
              register={register}
              name="email"
              error={errors.email?.message}
              label="Email"
              placeholder="Digite aqui seu email"
            />
            <Input
              register={register}
              name="password"
              error={errors.password?.message}
              label="Senha"
              placeholder="Digite aqui sua senha"
              icon={RiEyeCloseLine}
              type={passwordVisible ? "text" : "password"}
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
            <Input
              register={register}
              name="passwordConfirmation"
              error={errors.passwordConfirmation?.message}
              label="Confirmar senha"
              placeholder="Digite novamente sua senha"
              icon={RiEyeCloseLine}
              type={passwordVisible ? "text" : "password"}
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
            <Select
              register={register}
              name="select"
              error={errors.select?.message}
              label="Selecionar o módulo"
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
