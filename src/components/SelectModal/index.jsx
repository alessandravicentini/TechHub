import { Container, InputContainer } from "./styles";

export const SelectModal = ({
  register,
  name,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <InputContainer haveError={!!error}>
        <select {...register(name)} {...rest}>
            <option value="" disabled selected hidden>Nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
      </InputContainer>
    </Container>
  );
};