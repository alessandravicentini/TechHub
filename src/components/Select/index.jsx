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
            <option value="primeiro-modulo">Primeiro Módulo</option>
            <option value="segundo-modulo">Segundo Módulo</option>
            <option value="terceiro-modulo">Terceiro Módulo</option>
        </select>
      </InputContainer>
    </Container>
  );
};