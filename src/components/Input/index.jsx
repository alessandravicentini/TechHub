import { Container, InputContainer } from "./styles";

export const Input = ({
  label,
  register,
  name,
  error = "",
  icon: Icon,
  passwordVisible,
  setPasswordVisible,
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer haveError={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && <Icon size={20} onClick={() => setPasswordVisible(!passwordVisible)}/>}
      </InputContainer>
    </Container>
  );
};
