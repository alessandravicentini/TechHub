import { AnimationContainer, Container, Content } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import logo from "../../assets/images/logo.png"
import { RiEyeCloseLine } from 'react-icons/ri'

import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


export const Login = ({userAuth, setUserAuth}) => {

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo 8 caracteres"),
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

  const onSubmitFunction = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

        setUserAuth(true);

        history.push("/dashboard");
      })
      .catch((err) => toast.error("Verifique seus dados e tente novamente"));
  };

  if (userAuth) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <Container>
      <Content>
          <img src={logo} alt="logo" />
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
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
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
            <Button greySchema onClick={() => handleNavigation('/signup')}>Cadastre-se</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
