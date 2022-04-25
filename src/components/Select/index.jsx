import { Container, InputContainer } from "./styles";

export const Select = ({
  label,
  register,
  name,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer haveError={!!error}>
        <select {...register(name)} {...rest}>
            <option value="" disabled selected hidden></option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
        </select>
      </InputContainer>
    </Container>
  );
};