import { Container } from "./style";

export const Button = ({ children, greySchema = false, size = false, ...rest }) => {
  return (
    <Container greySchema={greySchema} size={size} type="button" {...rest}>
      {children}
    </Container>
  );
};
